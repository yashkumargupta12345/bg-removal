# Background Removal Tool

![Project Demo](https://i.imgur.com/demo-image.png)

A full-stack application for removing image backgrounds using AI. Built with **React (Vite)** frontend and **Express** backend, integrated with **Clerk authentication**, **Razorpay payments**, and **ClipDrop API**.

## 🚀 Features
- 🔐 **Secure Authentication**: User sign-up/sign-in with Clerk
- 💳 **Credit System**: Purchase credits via Razorpay for background removal
- ✨ **AI-Powered Removal**: Instant background removal using ClipDrop API
- 📱 **Responsive Design**: Works on mobile, tablet and desktop
- 📊 **Credit Management**: Track remaining credits
- 🔄 **Before/After Comparison**: Slider to compare original and processed images
- 📝 **Transaction History**: Record of all purchases

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

### Backend
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

### Services
![Clerk](https://img.shields.io/badge/Clerk-000000?style=for-the-badge&logo=clerk&logoColor=white)
![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=3399FF)
![ClipDrop](https://img.shields.io/badge/ClipDrop-00C4CC?style=for-the-badge&logo=clipdrop&logoColor=white)

## 📂 Project Structure
\`\`\`
.bg-removal/
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       └── pages/
└── server/
    ├── controllers/
    ├── middlewares/
    ├── models/
    └── routes/
\`\`\`

## 📦 Getting Started

### Prerequisites
- Node.js (v18+)
- npm
- MongoDB
- Clerk, Razorpay accounts, ClipDrop API key

### Installation

\`\`\`bash
git clone https://github.com/yourusername/bg-removal.git
cd bg-removal
\`\`\`

**Setup server**
\`\`\`bash
cd server
npm install
\`\`\`

Create `.env` with:
\`\`\`
MONGODB_URI=
CLERK_WEBHOOK_SECRET=
CLIPDROP_API=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
CURRENCY=INR
\`\`\`

Start server:
\`\`\`bash
npm run server
\`\`\`

**Setup client**
\`\`\`bash
cd ../client
npm install
\`\`\`

Create `.env` with:
\`\`\`
VITE_CLERK_PUBLISHABLE_KEY=
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=
\`\`\`

Start client:
\`\`\`bash
npm run dev
\`\`\`

Access: `http://localhost:3000`

## 📖 API Documentation

### Base URL
\`\`\`
http://localhost:4000
\`\`\`

### Endpoints

**Process Clerk Webhooks**
\`\`\`http
POST /api/user/webhooks
\`\`\`

**Get User Credits**
\`\`\`http
GET /api/user/credits
\`\`\`

**Initiate Razorpay Payment**
\`\`\`http
POST /api/user/pay-razor
\`\`\`

**Verify Razorpay Payment**
\`\`\`http
POST /api/user/verify-razor
\`\`\`

**Remove Background**
\`\`\`http
POST /api/image/remove-bg
\`\`\`

## 📄 License
Licensed under the MIT License.

---

**Happy Coding! 🚀**
