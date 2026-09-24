"""
MU Library — chat backend (Groq).

Run:
    cd backend
    .venv\\Scripts\\activate
    uvicorn main:app --reload --port 8000

Environment:
    GROQ_API_KEY        (required)
    GROQ_MODEL          (optional, default: llama-3.1-8b-instant)
    ALLOWED_ORIGINS     (optional, comma-separated. Default: localhost dev ports)
"""
import os
import time
import logging
from collections import defaultdict, deque
from typing import List

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from groq import Groq
from pydantic import BaseModel, Field

load_dotenv()

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("mu-library")

GROQ_MODEL = os.environ.get("GROQ_MODEL", "llama-3.1-8b-instant")
ALLOWED_ORIGINS = [
    o.strip()
    for o in os.environ.get(
        "ALLOWED_ORIGINS",
        "http://localhost:5500,http://127.0.0.1:5500,"
        "http://localhost:3000,http://localhost:5173,"
        "http://localhost:8000,http://127.0.0.1:8000",
    ).split(",")
    if o.strip()
]

if not os.environ.get("GROQ_API_KEY"):
    raise RuntimeError("GROQ_API_KEY is missing. Copy .env.example to .env and set your key.")

client = Groq(api_key=os.environ["GROQ_API_KEY"])

app = FastAPI(title="MU Library Chat")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type"],
    max_age=600,
)

# ---------------------------------------------------------------------
#  Simple in-memory rate limiter (per-IP sliding window).
#  Fine for a single-process deployment. Swap for Redis if you scale out.
# ---------------------------------------------------------------------
RATE_LIMIT_WINDOW = 60   # seconds
RATE_LIMIT_MAX = 20      # requests per window per IP
_rate_buckets: dict[str, deque] = defaultdict(deque)


def check_rate_limit(ip: str) -> bool:
    now = time.time()
    bucket = _rate_buckets[ip]
    while bucket and now - bucket[0] > RATE_LIMIT_WINDOW:
        bucket.popleft()
    if len(bucket) >= RATE_LIMIT_MAX:
        return False
    bucket.append(now)
    return True


SYSTEM_PROMPT = """You are the MU Library assistant — a helpful guide for Mid-West University students.

You help students find subjects and files, understand how to use the site (download, offline, install as app), contribute resources, and report broken links.

Tone: friendly, concise, student-to-student.

Hard rules:
1. NEVER invent subject codes, file titles, or links. If you don't know, say so.
2. If the student asks for a specific subject, tell them to use the search bar or the sidebar.
3. If they ask to contribute, tell them to tap "Send resources" in the hero section.
4. If they ask to report a broken link, tell them each file has a small flag button.
5. Keep responses under 100 words unless the user asks for detail.

Available content:
- BE Civil: Semesters 1-2 have files.
- BE Computer: Semester 1 has files.
- BE Hydropower, BSc Physics, BSc Chemistry, BBA: listed but mostly empty.
- Downloads work offline after first view.
- The site is free, no-login, no ads.
"""


class Message(BaseModel):
    role: str = Field(..., pattern="^(user|assistant)$")
    content: str = Field(..., min_length=1, max_length=4000)


class ChatRequest(BaseModel):
    messages: List[Message] = Field(..., min_length=1, max_length=40)


class ChatResponse(BaseModel):
    reply: str


@app.get("/")
def root():
    return {"status": "ok", "service": "MU Library Chat", "model": GROQ_MODEL}


@app.post("/chat", response_model=ChatResponse)
def chat(req: ChatRequest, request: Request):
    client_ip = request.client.host if request.client else "unknown"
    if not check_rate_limit(client_ip):
        raise HTTPException(status_code=429, detail="Too many requests. Please slow down.")

    if not req.messages:
        raise HTTPException(status_code=400, detail="No messages provided.")
    if req.messages[-1].role != "user":
        raise HTTPException(status_code=400, detail="Last message must be from the user.")

    history = req.messages[-20:]
    groq_messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    for m in history:
        groq_messages.append({"role": m.role, "content": m.content})

    try:
        completion = client.chat.completions.create(
            model=GROQ_MODEL,
            messages=groq_messages,
            temperature=0.3,
            max_tokens=400,
        )
        reply = (completion.choices[0].message.content or "").strip()
        if not reply:
            reply = "Sorry, I didn't catch that. Could you rephrase?"
        return ChatResponse(reply=reply)
    except Exception:
        # Log full detail server-side; never leak it to the client.
        logger.exception("Groq request failed for ip=%s", client_ip)
        raise HTTPException(
            status_code=502,
            detail="The assistant is temporarily unavailable. Please try again in a moment.",
        )