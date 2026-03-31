## 🔐 User Authentication & Authorization API

A Node.js backend application implementing User Authentication and Authorization using JWT (Bearer Token). Built with Express.js, MongoDB (Mongoose), and follows the MVC architecture.

## 🚀 Features

User Registration (with password hashing)
User Login with JWT Token generation
Protected routes using Bearer Token
Fetch authenticated user data
Error handling and validation
MVC folder structure

## 🛠️ Tech Stack

Node.js
Express.js
MongoDB (Mongoose)
JWT (JSON Web Token)
bcryptjs
dotenv
Postman (API Testing)

## 📡 API Endpoints

🔹 Register User -> POST /api/user/register
🔹 Login User -> POST /api/user/login
🔹 Get User (Protected Route) -> GET /api/user/me

## 🔒 Authentication Flow

User registers with email & password
Password is hashed using bcrypt
User logs in → receives JWT token
Token is sent in Authorization header
Middleware verifies token and grants access

## 🌍 Deployment

Push project to GitHub
Deploy using Render
Add environment variables in Render dashboard

## Render

Render deployed URL : https://jwt-auth-mvc-node-api.onrender.com/
