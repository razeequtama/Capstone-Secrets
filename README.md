# Secrets

A simple practice project for learning authentication and authorization by building a website where users can securely store and manage personal secrets.

> **Purpose:** This project is for educational purposes to practice implementing authentication, password hashing, session management, and OAuth.

---

# MVC Diagram
![alt text](readme_media/MVC.png)

---

## Features

### Phase 1 — Local Authentication

- User registration
- User login
- Password hashing (bcrypt )
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

- HTML
- CSS
- JavaScript
- Node.js
- Express
- Passport
- bcrypt
- Express Session
- EJS
- PostgreSQL
- OAuth 1.0


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
capstone - secrets/
├── controller/
│   ├── apiController.js
│   ├── loginController.js
│   └── registerController.js
├── db/
│   ├── db.js
│   └── queries.js
├── model/
│   ├── loginModel.js
│   └── registerModel.js
├── public/
│   └── js/
│       ├── loginJavaScript.js
│       └── registerJavaScript.js
├── readme_media/
│   └── MVC.png
├── routes/
│   ├── apiRoute.js
│   ├── loginRoute.js
│   └── registerRoute.js
├── views/
│   ├── login.ejs
│   ├── register.ejs
│   └── secrets.ejs
├── .gitignore
├── ERD.png
├── package.json
├── package-lock.json
├── README.md
└── server.js

```

---

## Database Schema
(May change as the project progresses)

### User

```javascript
{
  user_id PRIMARY KEY,
  email,
  password
}
```

### Secret

```javascript
{
  secret_id PRIMARY KEY,
  secret,
  user_id FOREIGN KEY,
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
Create Session
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
DB_NAME=your_database_name
DB_PASSWORD=your_database_password
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

# Commit Progresses

## Commit 4: Add register feature
What is being added/finished:
- Password hashing using bcrypt with 10 salt rounds
- Register email validation
- Adding credentials to database under "users" table
What is being fixed:
- 

## Commit 5: Fix register email check feature
What is being added/finished:
- Checking if a registered account already exists
What is being fixed:
- 

## Commit 6: Fix register email check feature README.md
What is being added/finished:
- 
What is being fixed:
- Update README.md to include commit 5 changes

## Commit 7: Add login feature
What is being added/finished:
- Login feature
- Send secrets file if login successful
- Login input validation
What is being fixed:
- 

## Commit 8: Fix README.md structure & database info
What is being added/finished:
- 
What is being fixed:
- Project structure description on README.md file
- Database info on README.md file

## Commit 9: Fix email validation input on login page
What is being added/finished:
- 
What is being fixed:
- Added email validation input on login page

## Commit 10: Add password strength detection for registering
What is being added/finished:
- A conditional where a password must be a minimum of 8 characters long to ensure security.
What is being fixed:
- 

---

## License

This project is intended for learning and personal practice.
