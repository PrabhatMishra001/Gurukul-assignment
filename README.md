# Authentication System

A full-stack authentication system with Node.js backend and HTML/CSS/JavaScript frontend.

## Features

- User registration and login
- JWT-based authentication
- MongoDB Atlas database integration
- Secure password hashing
- Form validation
- Responsive design

## Project Structure

```
├── backend/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
    ├── login.html
    ├── signup.html
    ├── login.js
    ├── signup.js
    └── style.css
```

## Setup Instructions

1. Clone the repository
2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```
3. Create a `.env` file in the backend directory with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
4. Start the backend server:
   ```
   npm run dev
   ```
5. Open the frontend HTML files in a browser

## API Endpoints

- POST `/api/auth/signup` - Register new user
- POST `/api/auth/login` - User login
- GET `/api/auth/profile` - Get user profile (protected route)

## Technologies Used

- Backend:
  - Node.js
  - Express.js
  - MongoDB Atlas
  - JWT
  - Bcrypt

- Frontend:
  - HTML5
  - CSS3
  - JavaScript (ES6+)
