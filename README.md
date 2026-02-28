# Blog

A personal blog built as a hands-on learning project. The goal is to practice every layer needed to take a system from zero to production: frontend, backend, database, infrastructure, and deployment pipelines.

## Purpose

This project is intentionally simple in scope so the focus can stay on the engineering surrounding it — things like containerization, CI/CD, monitoring, secrets management, and cloud deployment — rather than on complex business logic. The blog itself is just the vehicle.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React, TypeScript, Vite, React Router |
| Backend | Node.js, Express, TypeScript |
| Database | PostgreSQL, Prisma ORM |
| Auth | JWT (Bearer tokens), bcrypt |

## Project Structure

```
/
├── backend/    # Express REST API
└── frontend/   # React SPA
```

## Running Locally

### Backend

```bash
cd backend
npm install
npm run dev
```

Required environment variables:

```
PORT=3000
DATABASE_URL=
ADMIN_EMAIL=
ADMIN_PASSWORD_HASH=   # bcrypt hash
JWT_SECRET=
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Database

```bash
cd backend
npx prisma migrate dev   # apply migrations
npx prisma generate      # regenerate client
```

## Available Scripts

### Backend (`cd backend`)
| Command | Description |
|---|---|
| `npm run dev` | Start with hot reload |
| `npm run build` | Compile TypeScript |
| `npm run start` | Run compiled build |

### Frontend (`cd frontend`)
| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Type-check + build |
| `npm run lint` | Run ESLint |
