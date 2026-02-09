# MediScope 🏥
> **AI-Powered Medical Interpretation & Analysis**

![React](https://img.shields.io/badge/Frontend-React-blue?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge&logo=node.js)
![Python](https://img.shields.io/badge/Microservices-Python-yellow?style=for-the-badge&logo=python)
![Gemini AI](https://img.shields.io/badge/AI-Google%20Gemini-orange?style=for-the-badge&logo=google)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge)

**MediScope** is a cutting-edge healthcare application that uses advanced Artificial Intelligence to interpret medical reports (X-rays, Lab Reports, etc.) instantly. By bridging the gap between complex medical data and patient understanding, MediScope empowers users to take control of their health.

---

## 🚀 Features

- **🩺 Instant X-Ray Analysis**: Upload an X-ray, and our AI identifies potential fractures, anomalies, or normal findings.
- **🧪 Lab Report Simplification**: Converts complex blood work and lab data into simple, actionable summaries.
- **💬 AI Health Assistant**: A chat interface to ask follow-up questions about your reports.
- **🔐 Secure & Private**: JWT-based authentication ensures your health data remains private.
- **⚡ Real-time Updates**: Socket.io integration for real-time status updates during analysis.

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express, MongoDB
- **Microservices**: Python (Flask), TensorFlow (X-ray), EasyOCR (Lab Reports)
- **AI Core**: Google Gemini 2.0 Flash (via REST API)
- **Deployment**: Docker / Render Ready

---

## 📦 Project Structure

```bash
MEDISCOPE/
├── Client/                 # React Frontend
│   ├── src/
│   │   ├── config.js       # Centralized API configuration
│   │   └── ...
│   └── ...
├── Server/                 # Node.js Gateway & Python Microservices
│   ├── Server.js           # Main Entry Point (Port 4000)
│   ├── Interpreter.py      # AI Chat Service (Gemini)
│   ├── LabMicroservice.py  # Lab Report Parser
│   ├── XrayMicroservice.py # X-Ray Analysis Model
│   └── ...
└── package.json            # Root deployment script
```

---

## ⚡ Quick Start

### Prerequisites
- Node.js (v16+)
- Python (v3.9+)
- MongoDB URI
- Google Gemini API Key

### 1. Clone & Install
```bash
git clone https://github.com/your-username/mediscope.git
cd mediscope
npm run install-all  # Installs dependencies for both Client and Server
```

### 2. Configure Environment
Create a `.env` file in the `Server/` directory:
```properties
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
API_KEY=your_gemini_api_key
NODE_ENV=development
```

### 3. Run Locally (Production Mode)
This builds the frontend and serves it via the backend:
```bash
npm run build   # Builds Client
npm start       # Starts Server on http://localhost:4000
```

---

## ☁️ Deployment Guide (Render)

MediScope is configured for zero-config deployment on [Render](https://render.com).

1. **Connect GitHub**: Link your repo to Render.
2. **Create Web Service**: Select the repository.
3. **Settings**:
   - **Environment**: Node
   - **Build Command**: `npm run install-all && npm run build`
   - **Start Command**: `npm start`
4. **Environment Variables**: Add your `API_KEY`, `MONGO_URI`, etc. in the dashboard.

Done! Your enterprise-grade AI health app is live. 🌍

---

## 🛡️ License

This project is licensed under the ISC License.

---
*Built with ❤️ by the MediScope Team.*
