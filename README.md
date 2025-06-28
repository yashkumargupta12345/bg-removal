# Background Removal Tool

A full-stack application for removing image backgrounds using AI. Built with **React (Vite)** frontend and **Express** backend, integrated with **Clerk authentication**, **Razorpay payments**, and **ClipDrop API**.

## 🌐 Live Website
[![Live Site](https://img.shields.io/badge/Live%20Site-BG%20Removal-blue)](http://bg-removal-siyi.vercel.app)



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
```markdown
## Project Structure (Plain Text Version)
.bg-removal/
|-- .gitignore
|-- client/
|   |-- .env
|   |-- eslint.config.js
|   |-- index.html
|   |-- package.json
|   |-- README.md
|   |-- vercel.json
|   |-- vite.config.js
|   |-- public/
|   |   |-- bg_layer.png
|   |   |-- favicon.svg
|   |   |-- slide_icon.svg
|   |   |-- vite.svg
|   |-- src/
|       |-- App.jsx
|       |-- index.css
|       |-- main.jsx
|       |-- assets/
|       |-- components/
|       |   |-- BgSlider.jsx
|       |   |-- Footer.jsx
|       |   |-- Header.jsx
|       |   |-- Navbar.jsx
|       |   |-- Steps.jsx
|       |   |-- Testimonials.jsx
|       |   |-- Upload.jsx
|       |-- context/
|       |   |-- AppContext.jsx
|       |-- pages/
|           |-- BuyCredit.jsx
|           |-- Home.jsx
|           |-- Result.jsx
|-- server/
    |-- .env
    |-- package.json
    |-- server.js
    |-- vercel.json
    |-- configs/
    |   |-- mongodb.js
    |-- controllers/
    |   |-- ImageController.js
    |   |-- UserController.js
    |-- middlewares/
    |   |-- auth.js
    |   |-- multer.js
    |-- models/
    |   |-- transactionModel.js
    |   |-- userModel.js
    |-- routes/
        |-- imageRoutes.js
        |-- userRoutes.js
```

## 📦 Getting Started

### Prerequisites
- Node.js (v18+)
- npm
- MongoDB
- Clerk, Razorpay accounts, ClipDrop API key

### Installation

```bash
git clone https://github.com/yourusername/bg-removal.git
cd bg-removal
```

**Setup server**
```bash
cd server
npm install
```

Create `.env` with:
```
MONGODB_URI=
CLERK_WEBHOOK_SECRET=
CLIPDROP_API=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
CURRENCY=INR
```

Start server:
```bash
npm run server
```

**Setup client**
```bash
cd ../client
npm install
```

Create `.env` with:
```
VITE_CLERK_PUBLISHABLE_KEY=
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=
```

Start client:
```bash
npm run dev
```

Access: `http://localhost:5173`

## 📖 API Documentation

### Base URL
```
http://localhost:4000
```

### Endpoints

**Process Clerk Webhooks**
```http
POST /api/user/webhooks
Method: POST
Description: Handles Clerk user events (create, update, delete)
Request Body:
{
  "data": {
    "id": "clerk_12345",
    "email_addresses": [{"email_address": "user@example.com"}],
    "first_name": "John",
    "last_name": "Doe",
    "image_url": "https://example.com/photo.jpg"
  },
  "type": "user.created"
}
```


**Get User Credits**
```http
GET /api/user/credits
Method: GET
Authentication: Required (JWT token)
Response
{
  "success": true,
  "credits": 5
}
```



**Initiate Razorpay Payment**
```http
POST /api/user/pay-razor
Method: POST
Authentication: Required
Request Body:
{
  "planId": "Basic"
}

Response
{
  "success": true,
  "order": {
    "amount": 1000,
    "currency": "INR",
    "id": "order_ABC123",
    "receipt": "receipt_id"
  }
}
```



**Verify Razorpay Payment**
```http
POST /api/user/verify-razor
Method: POST
Request Body:
{
  "razorpay_order_id": "order_ABC123",
  "razorpay_payment_id": "pay_XYZ987",
  "razorpay_signature": "signature_here"
}

Response
{
  "success": true,
  "message": "Credits Added"
}
```



**Remove Background**
```http
POST /api/image/remove-bg
Method: POST
Authentication: Required
Form Data: image (file upload)

Response
{
  "success": true,
  "resultImage": "data:image/png;base64,...",
  "creditBalance": 4,
  "message": "Background Removed"
}
```

![deepseek_mermaid_20250625_f5a514](https://github.com/user-attachments/assets/dffab25f-9628-4de1-92b8-82046e4f58d2)



## 📄 License
Licensed under the MIT License.

---

**Happy Coding! 🚀**
