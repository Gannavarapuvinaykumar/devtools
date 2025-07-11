# DevTool Hub

DevTool Hub is a modern web application that helps developers discover, compare, and access the best developer tools across categories like Editors, CI/CD, Cloud, Productivity, and more. It features a beautiful glassmorphism UI, interactive animations, and a fast search experience.

---

## 🚀 Features
- Browse 40+ popular developer tools with categories, pricing, and descriptions
- Beautiful animated UI with glassmorphism and interactive card effects
- Fast search and filter by name, description, category, or price
- One-click access to tool websites
- Refresh tool list from backend (with scraping support)

---

## 🖥️ Screenshot

![DevTool Hub Screenshot](https://i.imgur.com/1Q9Qw2B.png)

---

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16+ recommended)
- Python 3.8+

### 1. Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

The backend will run at `http://localhost:8000`.

### 2. Frontend (React)

```bash
cd frontend
npm install
npm start
```

The frontend will run at `http://localhost:3000`.

---

## ⚙️ Assumptions
- The backend serves a static list of tools from `data.json` and can refresh via scraping.
- The frontend expects the backend at `http://localhost:8000`.
- All tools have a name, description, category, link, and price.

---

## 📦 Project Structure

```
backend/
  main.py           # FastAPI backend
  scraper.py        # Scraper for refreshing tool data
  data.json         # Tool data
  requirements.txt  # Python dependencies
frontend/
  src/
    App.js          # Main React app
    components/
      ToolCard.jsx  # Tool card UI
    api.js          # API calls
  App.css           # Styles
  package.json      # React config
```

---

## ✨ Sample Output

![Sample Output](https://i.imgur.com/1Q9Qw2B.png)

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License
MIT
