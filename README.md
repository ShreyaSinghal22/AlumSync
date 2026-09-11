# AlumSync 🎓

**AlumSync** is an integrated Alumni Data Management and Engagement Platform designed to bridge the gap between students, alumni, and educational institutions. Built with a modern full-stack architecture, it combines verified alumni networking, mentorship workflows, automated resume analysis, and smart career matching into a single ecosystem.

---

## 🌟 Key Features

* **Multi-Role Dashboards:** Customized user interfaces and permission levels for **Students**, **Alumni**, and **Administrators**.
* **Hybrid Data Ingestion:**
* **Bulk Import:** Admin-level CSV ingestion for university-provided historical records.
* **Direct Onboarding:** Real-time user registration via secure REST APIs.
* **Data Pipeline:** Integrated validation, sanitization, and automated duplicate checking prior to database storage.


* **Smart Resume Analyzer & Matching:**
* Upload student resumes (PDF) to extract core skills, education, and experience.
* Automated skill-gap identification matched against verified alumni profile attributes.
* Personalized mentorship and career recommendations based on industry, role, and skills.


* **Community & Engagement:**
* Interactive community feed for posts, updates, and events.
* Secure messaging and mentorship request system.
* Comprehensive admin analytics and monitoring tools.



---

## 🛠️ Tech Stack

* **Frontend:** React.js, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database & Authentication:** Supabase (PostgreSQL, Supabase Auth, Supabase Storage)
* **Data Processing & AI:** PDF Parsing / OCR, NLP Skill Extraction Pipeline

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v18 or higher)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
* A [Supabase](https://supabase.com/) account and project

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/alumsync.git
cd alumsync

```


2. **Install dependencies:**
```bash
# Install root / backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..

```


3. **Set up Environment Variables:**
Create a `.env` file in the root directory and add your configurations:
```env
PORT=5000
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

```


4. **Run the Application:**
```bash
# Run server and client concurrently
npm run dev

```



---

## 📁 Project Structure

```text
AlumSync/
├── client/              # React frontend application
├── server/              # Node.js/Express API backend
│   ├── controllers/     # Route handlers
│   ├── middleware/      # Validation & authentication logic
│   ├── routes/          # API endpoints
│   └── utils/           # Data cleaning, deduplication & parser helpers
├── .env.example         # Template for environment variables
└── README.md            # Project documentation

```

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.
