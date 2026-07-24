# Secrets

A simple practice project for learning authentication and authorization by building a website where users can securely store and manage personal secrets.

> **Purpose:** This project is for educational purposes to practice implementing authentication, password hashing, session management, and OAuth.

---

## Features

### Phase 1 — Local Authentication

- User registration
- User login
- Password hashing (bcrypt or Argon2)
- Session or JWT authentication
- Protected routes
- Logout functionality

### Phase 2 — Secret Management

Authenticated users can:

- Create a secret
- View their own secret
- Edit their secret
- Delete their secret

Users should **only** be able to access their own secrets.

### Phase 3 — OAuth

Allow users to sign in with providers such as:

- Google
- GitHub
- Discord (optional)

OAuth users should have the same experience as locally registered users.

---

## Tech Stack

- Node.js
- Express
- PostgreSQL
- bcrypt
- Express Session
- EJS
- OAuth 2.0


---

## Learning Objectives

This project is intended to help me learn:

- Password hashing
- User authentication
- Authorization
- Sessions vs JWT
- Protected routes
- OAuth authentication
- Secure cookies
- Environment variables
- Database relationships
- Basic web security practices

---

## Suggested Project Structure
(May change as the project progresses)

```text
secret-vault/
│
├── app.js
├── package.json
├── .env
│
├── routes/
│   ├── auth.js
│   └── secrets.js
│
├── models/
│   ├── User.js
│   └── Secret.js
│
├── middleware/
│   └── auth.js
│
├── views/
├── public/
│
└── README.md
```

---

## Database Schema
(May change as the project progresses)

### User

```javascript
{
  username,
  email,
  passwordHash,
  oauthProvider,
  oauthId,
  createdAt
}
```

### Secret

```javascript
{
  userId,
  content,
  createdAt,
  updatedAt
}
```

---

## Authentication Flow

### Local Authentication

```text
Register
    ↓
Hash Password
    ↓
Store User
    ↓
Login
    ↓
Verify Password
    ↓
Create Session/JWT
    ↓
Access Protected Routes
```

### OAuth Authentication

```text
User clicks "Sign in with Google"
            ↓
Google Authentication
            ↓
Receive User Profile
            ↓
Find or Create User
            ↓
Create Session
            ↓
Redirect to Dashboard
```

---

## Security Notes

- Never store plaintext passwords.
- Hash passwords using bcrypt or Argon2.
- Store secrets and API keys in environment variables.
- Validate and sanitize user input.
- Protect against CSRF when using sessions.
- Use HTTPS in production.
- Store OAuth credentials securely.
- Ensure users can only access their own data.

---

## Future Improvements

- Multiple secrets per user
- Encrypted secrets at rest
- Password reset
- Email verification
- Two-factor authentication (2FA)
- Secret categories
- Search functionality
- User profile page
- Audit logs
- Admin dashboard

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/razeequtama/Capstone-Secrets
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```env
PORT=3000

SESSION_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### 4. Start the development server

```bash
npm run dev
```

---

## Goals

By completing this project, I should understand:

- How password hashing works
- Why passwords should never be stored in plaintext
- Authentication vs authorization
- Session-based authentication
- OAuth authentication
- Protected routes
- Fundamental web application security concepts

---

## License

This project is intended for learning and personal practice.
