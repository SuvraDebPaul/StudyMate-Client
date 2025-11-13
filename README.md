# 🧑‍🎓 StudyMate — Find Your Perfect Study Partner

## 🚀 Project Overview

**StudyMate** is a **MERN Stack web platform** designed to help students connect and collaborate for better learning outcomes.  
It allows users to find study partners based on **subjects**, **learning preferences**, or **location proximity**, making education more interactive, engaging, and goal-oriented.

This project demonstrates **practical full-stack development** through:

- CRUD operations with MongoDB
- Firebase authentication
- Responsive and dynamic React frontend
- Node.js + Express backend API integration

---

## 🌐 Live Links

| Platform                  | URL                                                                 |
| ------------------------- | ------------------------------------------------------------------- |
| 🖥️ **Client (Frontend)**  | [Live Site URL](https://sdp-studymate.web.app)                      |
| ⚙️ **Server (Backend)**   | [Vercel API URL](https://study-mate-server-five.vercel.app)         |
| 💾 **Client GitHub Repo** | [GitHub - Client](https://github.com/SuvraDebPaul/StudyMate-Client) |
| 🧩 **Server GitHub Repo** | [GitHub - Server](https://github.com/SuvraDebPaul/StudyMate-Server) |

## ✨ Website Highlights

- 🔐 **Firebase Authentication** with Google Login & custom registration
- 🔍 **Search, Sort & Filter Partners** by subject or experience level
- 💬 **Partner Request System** with MongoDB `$inc` logic for request count
- 🌗 **Dark / Light Theme Toggle** using React state
- 🧭 **Private Routes & Dynamic Navbar** for authenticated users
- 🔄 **CRUD Operations** for partner profiles and connections
- 📱 **Fully Responsive Design** for all devices
- 🧃 **Toast Notifications** for all success/error actions

## 🧩 Project Structure

### 🖼️ **Client (React + Firebase + Tailwind)**

- React Router for SPA navigation
- Axios for data fetching
- Firebase Auth for login/register
- React Toastify for notifications
- DaisyUI for theme switching
- Swiper.js for Home Banner carousel
- Responsive Navbar & Footer

### ⚙️ **Server (Node.js + Express + MongoDB)**

- RESTful API endpoints for CRUD
- Environment variables using dotenv
- CORS policy enabled for frontend
- MongoDB CRUD with `$inc`, `$regex`, and filtering logic

---

## 📋 Core Features

### 🏠 Home Page (Public)

- Hero Banner with slider highlighting platform purpose
- Top Study Partners (highest rated profiles dynamically loaded)
- “How It Works” Section
- Testimonials Section

### 👤 Authentication

- Login / Register / Google Sign-In
- Password validation (Uppercase, Lowercase, 6+ chars)
- Toast notifications for success or failure

### 🧾 CRUD Pages

#### ➕ Create Partner Profile (Private)

- Form fields for Name, Subject, Study Mode, Experience, etc.
- Data stored in MongoDB with success toast

#### 🔍 Find Partners (Public)

- All profiles displayed in cards
- Search by subject & Sort by experience level
- View Profile → Private Route to see details

#### 🧠 My Connections (Private)

- Shows all sent partner requests
- Update & Delete operations with confirmation modal

### 🧭 Extra Features

- Prevent duplicate partner requests
- 404 page with “Back to Home” navigation
- Custom loading spinner during data fetch

---

## 🧱 Technologies Used

| Category            | Technology                                                                     |
| ------------------- | ------------------------------------------------------------------------------ |
| **Frontend**        | React.js, React Router, Axios, TailwindCSS, DaisyUI, Swiper.js, React Toastify |
| **Backend**         | Node.js, Express.js, MongoDB, dotenv, CORS                                     |
| **Authentication**  | Firebase Authentication (Email/Password + Google Login)                        |
| **Hosting**         | Netlify / Surge (Client), Vercel (Server)                                      |
| **Version Control** | Git & GitHub                                                                   |

---

## ⚙️ Installation & Setup

### 🔧 Prerequisites

- Node.js (v16 or above)
- MongoDB Atlas Account
- Firebase Project

### 🧩 Clone Repositories

```bash
# Clone Client
git clone https://github.com/SuvraDebPaul/StudyMate-Client

# Clone Server
git clone https://github.com/SuvraDebPaul/StudyMate-Server
```
