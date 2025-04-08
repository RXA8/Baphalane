## 📘 Baphalane Website – README

### 🔰 Overview

**Baphalane** is a modern web application designed to serve the **Baphalane Traditional Council**. It allows community members to:
- Submit and complete digital forms.
- Access official information.
- View public media and documents.
- Automate traditional office interactions for easier community access.

---

### 🧱 Tech Stack Overview

| Layer         | Technology        | Purpose |
|---------------|-------------------|---------|
| **Frontend**  | Next.js (React + Node.js) | Dynamic user interface and routing |
|               | Tailwind CSS      | Styling and responsiveness |
|               | JavaScript / TypeScript | Logic, API calls, and type safety |
| **Backend**   | Supabase          | Authentication, database (PostgreSQL), and file storage |
| **Hosting**   | Vercel            | Hosting and automatic deployment of the frontend |
| **Domain**    | Freenom / Namecheap / GoDaddy | Custom domain name (e.g. `baphalane.org`) |
| **Version Control** | Git + GitHub | Code collaboration and backup |

---

### 🧭 Project Architecture

This follows a **modular, client-server architecture** with a **separation of concerns** between the frontend and backend.

```
┌──────────────────────────────┐             ┌─────────────────────────────────┐
│   Browser  │──────────────────────────────│    Vercel (Next.js)    │
└──────────────────────────────┘    HTTP(S)    └──────────────────────────────┘
       ▲                            │
       │                            ▼
       │                    ┌──────────────────────────────┐
       │                    │ Supabase       │
       │                    │ (Auth, DB, API │
       │                    │  & Storage)    │
       ▼                    └──────────────────────────────┘
```

### 🥉 Folder Structure (Simplified)

```
/baphalane
│
├── public/                  # Static files like images
├── pages/                   # Routes (e.g. index.js, forms.js)
├── components/              # UI components (Header, Footer, Form, etc.)
├── styles/                 # Tailwind & custom CSS
├── utils/                  # Helper functions (e.g. Supabase client)
├── .env.local              # Environment variables (API keys)
└── README.md               # Project documentation
```

---

### 🔌 Component Communication

| From | To | Method |
|------|----|--------|
| **Next.js (frontend)** | Supabase (backend) | RESTful calls or Supabase JS client |
| **Next.js** | Vercel | Git-based automatic deployments |
| **User** | Next.js UI | Interaction through form submissions, page routing |
| **Supabase** | Database + File Storage | Inserts/queries media, documents, and user input |

---

### 🧱 Architectural Pattern

We are using the **JAMstack architecture**:
- **JavaScript**: All frontend logic (React + Next.js).
- **APIs**: Supabase is used as the backend-as-a-service via client APIs.
- **Markup**: Pre-rendered HTML using Next.js (supports both SSR and static generation).

#### Benefits:
- ✅ Scalable  
- ✅ Secure (no traditional server to attack)  
- ✅ Blazing fast (Vercel’s edge network)  
- ✅ Easy to maintain with modern tooling  

---

### 🔐 Security Considerations

- Form data is sent securely over HTTPS.
- Supabase handles secure authentication and authorization.
- Environment variables (`.env.local`) store API credentials safely.
- Only authenticated users can submit or view sensitive information.

---

### 🚀 Deployment Workflow

1. Push code to GitHub.
2. Vercel auto-deploys based on GitHub branch.
3. Vercel URL (e.g. `https://baphalane.vercel.app`) becomes active.
4. Custom domain (e.g. `baphalane.org`) points to Vercel deployment.

