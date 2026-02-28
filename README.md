# Asim Khan Niazi — Portfolio Website

A modern, responsive personal portfolio built with **React + Vite** (frontend) and **Flask** (backend).

---

## 📁 Project Structure

```
Portfolio/
├── frontend/         # React + Vite
│   ├── public/
│   │   └── Asim-Profile.jpeg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
├── backend/          # Flask REST API
│   ├── app.py
│   ├── data/
│   │   └── portfolio.json
│   ├── messages.json
│   └── requirements.txt
└── README.md
```

---

## 🚀 Setup & Run Instructions

### Prerequisites

- **Node.js** (v18+) and **npm**
- **Python** (v3.8+) and **pip**

---

### 1. Backend (Flask)

```bash
cd backend

# Install dependencies
pip install -r requirements.txt

# Run the server
python app.py
```

The Flask API will start at **http://localhost:5000**

**API Endpoints:**
| Method | Endpoint | Description |
|--------|---------------------|-------------------------------|
| GET    | `/api/portfolio`    | Returns all portfolio data    |
| POST   | `/api/contact`      | Submit contact form message   |

---

### 2. Frontend (React + Vite)

```bash
cd frontend

# Install dependencies
npm install

# Run the dev server
npm run dev
```

The frontend will start at **http://localhost:5173** (default Vite port).

---

### 3. Open in Browser

1. Make sure the **backend is running** first (`python app.py`)
2. Then start the **frontend** (`npm run dev`)
3. Open **http://localhost:5173** in your browser

---

## ✨ Features

- 🎨 Modern, clean design with purple accent theme
- 📱 Fully responsive (mobile + desktop)
- 🧭 Smooth scrolling navigation
- 🎯 Dynamic project rendering from backend API
- 📝 Working contact form with backend storage
- ✨ Scroll-reveal animations
- 🖼️ Profile image integration
- 🔗 Social links (GitHub, LinkedIn)

---

## 🛠 Tech Stack

| Layer     | Technology          |
|-----------|---------------------|
| Frontend  | React, Vite, CSS    |
| Backend   | Python Flask        |
| Data      | JSON                |
| Styling   | Vanilla CSS         |
