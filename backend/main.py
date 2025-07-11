from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
from scraper import scrape_and_save

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/tools")
def get_tools():
    with open("data.json", "r") as f:
        tools = json.load(f)
    return {"tools": tools}

@app.post("/refresh")
def refresh_tools():
    scrape_and_save()
    with open("data.json", "r") as f:
        tools = json.load(f)
    return {"tools": tools, "message": "Data refreshed successfully."}
