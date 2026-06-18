# 🛍️ Fusion Store

A high-performance, secure, and visually stunning e-commerce platform built on **Next.js 16 (App Router)** and **MongoDB**. Designed with a premium high-contrast dark aesthetic with vibrant electric blue highlights, the store incorporates a custom studio, real-time drop countdowns, and robust role-based access controls.

---

## ✨ Core Capabilities

### 1. Unified Authentication & Profiles
- **Social & Credentials Logins**: Secure sign-in flows using **Google OAuth** and standard email/password credentials via **Auth.js v5 (NextAuth)**.
- **Dynamic Profile Dashboard**: Customers can track order history, active customization requests, and delivery status in real-time.

### 2. Immersive Storefront & Stock Engine
- **Active Drop Countdown**: Homepage features a real-time countdown timer for upcoming drops, preventing purchases until the drop goes live.
- **Scarcity & Stock Protection**: Dynamic stock tracking that automatically adds scarcity badges (e.g., "Limited Edition" for low-stock items), decrements counts during checkout, and disables purchasing once stock hits zero.
- **Advanced Filtering**: Client-side sorting and filtering by collection, price, size, and color.

### 3. Customization Studio (`/customize`)
- **Interactive Builder**: An intuitive multi-step form allowing users to submit bespoke apparel requests (specifying base product type, colors, and print locations).
- **Secure File Storage**: Integrated image uploading for client artwork, processed and stored via Cloudinary.
- **Workflow Pipeline**: Automated status transition tracking custom orders from "Pending" review through to admin-managed custom pricing.

### 4. Persistent Shopping Cart & Checkout
- **Zustand State Engine**: Highly optimized, lightweight local state management that persists across browser sessions using local storage, eliminating unnecessary global app re-renders.
- **Secure Payment Gateway**: Integrates tokenized payment processors (Stripe/Paymob) to handle card transactions without exposing credit card details to internal databases.

### 5. Admin Control Center
- **Inventory & Drop Manager**: Control interface to toggle drop schedules, create/update products, and set stock scarcity.
- **Custom Order Review**: Queue to review uploaded artwork, approve/reject custom designs, and issue custom pricing links directly to the client's dashboard.

---

## ⚙️ Technical Architecture & NFRs

- **⚡ Server-Side Rendering (SSR)**: Leveraging Next.js Server Components for pre-rendered listings to ensure a Largest Contentful Paint (LCP) under 2.5 seconds.
- **🖼️ Dynamic Image Optimization**: Automated format conversion (WebP/AVIF) and quality compression for uploaded and product assets.
- **🛡️ Secure Route Guarding**: Custom Edge-ready Next.js Middleware guarding `/admin` and user profile directories from unauthorized access.
- **💾 Database Concurrency**: Safe MongoDB checkouts utilizing guarded write operations to prevent overselling limited-edition inventory.
- **🏗️ Serverless Ready**: Stateless Server Actions and API routes ready for seamless horizontal scaling on Vercel.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router), React 19
- **State Management**: Zustand
- **Database & ODM**: MongoDB / Mongoose
- **Security & Auth**: Auth.js (v5), Bcrypt.js
- **Styling**: Tailwind CSS v4, PostCSS
- **Media Hosting**: Cloudinary

---

## 📂 Project Structure

```text
fusion-store/
├── src/
│   ├── app/                 # Next.js App Router (Layouts & Pages)
│   │   ├── admin/           # Protected Admin views
│   │   ├── api/             # API Handlers (including Auth.js routes)
│   │   ├── products/        # Product page views
│   │   └── page.tsx         # Storefront landing page
│   ├── features/            # Feature-driven domain modules
│   │   ├── admin/           # Admin logic & review queues
│   │   ├── auth/            # Authentication actions and forms
│   │   ├── cart/            # Zustand cart store & drawer
│   │   ├── custom-orders/   # Customization Studio state & upload components
│   │   └── products/        # Catalog, filters, and countdown timer
│   ├── lib/                 # Third-party wrappers (Mongoose connection, auth configurations)
│   ├── models/              # MongoDB/Mongoose database schemas
│   ├── shared/              # Reusable generic UI components and hooks
│   └── types/               # TypeScript definitions
├── middleware.ts            # Route guarding middleware
├── package.json             # NPM configuration
└── tsconfig.json            # Strict TypeScript configuration
```

---

## 🚀 Setup & Local Development

### 1. Prerequisites
- Node.js 18+
- MongoDB instance (local or Atlas)
- Cloudinary credentials

### 2. Environment Variables
Configure the following in a `.env` file at the root:
```env
MONGODB_URI="your-mongodb-connection-string"
AUTH_SECRET="your-nextauth-secret-key"
GOOGLE_ID="google-client-id"
GOOGLE_SECRET="google-client-secret"
CLOUDINARY_URL="cloudinary-connection-url"
```

### 3. Quickstart
```bash
# Install dependencies
npm install

# Start local server
npm run dev
```

---

## 🧪 Diagnostics & Validation
Ensure strict type-safety:
```bash
npx tsc --noEmit
```
Validate code style:
```bash
npm run lint
```
