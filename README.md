# 🛍️ Fusion Store

A modern, high-performance, and secure e-commerce application built on **Next.js 16 (App Router)** and **MongoDB**. This project features a robust role-based authentication system, modern Tailwind CSS v4 styling, and a clean, feature-driven directory structure.

---

## 🚀 Key Features

- **🔐 NextAuth.js v5 (Auth.js)**: Fully integrated authentication with support for:
  - **Credentials Provider** (Email & Password)
  - **Google OAuth Provider**
  - Custom JWT session callback passing user IDs and roles.
- **🛡️ Role-Based Access Control**:
  - Distinct **ADMIN** and **CUSTOMER** roles.
  - Route protection via custom Edge-ready Next.js **Middleware** to block unauthorized access to admin dashboards.
- **🗄️ MongoDB & Mongoose Integration**:
  - Optimized database connection cache inside serverless functions to prevent connection leaks during hot reloads.
  - Schemas defined with full TypeScript support (e.g., User Model with role enums).
- **🎨 Tailwind CSS v4**: Beautiful, responsive, and state-of-the-art styling with PostCSS.
- **📂 Modular Architecture**: Structured following a feature-based organization pattern to ensure scalability and ease of maintenance.

---

## 🛠️ Tech Stack

- **Core**: Next.js 16 (App Router), React 19, TypeScript
- **Database**: MongoDB & Mongoose
- **Authentication**: NextAuth.js v5 (beta)
- **Security**: Bcrypt.js (Password Hashing)
- **Styling**: Tailwind CSS v4, PostCSS
- **Linting**: ESLint

---

## 📂 Project Structure

```text
fusion-store/
├── src/
│   ├── app/                 # Next.js App Router (Layouts & Pages)
│   │   ├── admin/           # Admin-only dashboard
│   │   ├── api/             # API Route Handlers (e.g., auth routes)
│   │   ├── products/        # Product page views
│   │   ├── globals.css      # Core Tailwind CSS imports
│   │   └── page.tsx         # Landing page
│   ├── config/              # Application-wide configurations
│   ├── features/            # Feature-driven domain modules
│   │   ├── admin/           # Admin logic & components
│   │   ├── auth/            # Auth logic (login, register actions)
│   │   ├── cart/            # Shopping cart management
│   │   ├── custom-orders/   # Custom orders handling
│   │   ├── orders/          # Checkout and order flows
│   │   └── products/        # Product listing & details logic
│   ├── lib/                 # Shared libraries (database connection, auth configs)
│   │   ├── auth.ts          # NextAuth v5 configuration and callbacks
│   │   └── mongodb.ts       # Type-safe cached MongoDB client helper
│   ├── models/              # Mongoose Database Models (e.g., User schema)
│   ├── shared/              # Reusable generic UI components and hooks
│   └── types/               # Global TypeScript declarations (e.g., NextAuth types)
├── middleware.ts            # Next.js route protection and session inspection
├── next.config.ts           # Next.js settings
├── package.json             # NPM dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

---

## ⚙️ Getting Started

### 1. Prerequisites
Ensure you have **Node.js 18+** and a running **MongoDB** cluster (or local instance).

### 2. Environment Setup
Create a `.env` file in the root directory and define the following variables:
```env
DB_URL="your-mongodb-connection-string"
MONGODB_URI="your-mongodb-connection-string" # Used by connection helper

# NextAuth Configuration
NEXTAUTH_SECRET="your-super-secret-key"
AUTH_SECRET="your-super-secret-key" # Used by NextAuth v5

# Google Provider Configuration
GOOGLE_ID="your-google-client-id"
GOOGLE_SECRET="your-google-client-secret"
```

### 3. Installation
Install the project dependencies:
```bash
npm install
```

### 4. Running the Development Server
Start the development server locally:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to explore the store.

---

## 🧪 Quality and Type Checks
To perform strict type-checking:
```bash
npx tsc --noEmit
```

To run lint checks:
```bash
npm run lint
```
