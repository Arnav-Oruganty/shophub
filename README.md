# ShopHub – E-commerce Platform

A modern, lightweight web-based platform for browsing products, managing carts, placing orders, and viewing order history.  
Built using **React + Vite** on the frontend and **Express + SQLite** on the backend.

> **Note:** Admin functionality is planned for the future and is *not implemented yet*.  
> Backend currently has **no test suite** (frontend tests only).

---

## ⭐ Features

### 👤 User
- **Browse Products** – View items with images, pricing, and details.  
- **Shopping Cart** – Add/remove items, update quantities, auto-recalculated totals.
- **Checkout** – Enter address and pay using Card, UPI, or Cash on Delivery.
- **Order Placement** – Place orders and clear cart.
- **Order History** – View previous orders.
- **Profile Page** – View user details.

### 🛠️ Admin (Future Scope)
- Add/edit/delete products  
- View/manage all orders  
- Manage users  

---

## 🧱 Tech Stack

### 🎨 Frontend
- **React (Vite)**
- **React Context API** – Global state (products/cart/user)
- **CSS Modules**
- **Lucide React** – Icons
- **Vitest + Testing Library** – Unit & UI tests

### ⚙️ Backend
- **Node.js + Express**
- **SQLite (sqlite3 package)**
- **CORS enabled**
- **REST API**
---

## 🧩 Architecture Overview

The platform follows a clean **client–server architecture**, with:

| Layer | Description |
|-------|-------------|
| **Frontend** | SPA built with React served by Vite |
| **Backend** | Express REST API |
| **Database** | SQLite used for persistence |

---

## 📁 Folder Structure

### **Frontend Structure**
```
frontend/
├── public/               # Images and static assets
├── src/
│   ├── components/       # UI components (Navbar, ProductCard...)
│   ├── context/          # ShopContext (global state)
│   ├── pages/            # Home, Cart, Checkout, Orders, Profile
│   ├── patterns/         # Strategy Pattern for payment methods
│   ├── utils/            # Utility functions (calculateTotal, etc.)
│   ├── tests/            # Vitest test files
│   └── main.jsx          # App entry
├── package.json
└── vite.config.js
```

### **Backend Structure**
```
backend/
├── src/
│   ├── controllers/      # Business logic for products, cart, orders
│   ├── routes/           # Express routes
│   ├── db.js             # SQLite connection + init
│   └── server.js         # Express server setup
├── database/
│   └── shop.db           # SQLite file
└── package.json
```

---

## 🧠 Design Patterns Used

### 1. **Strategy Pattern – Payment Methods**
File: `frontend/src/patterns/paymentStrategies.js`

- Allows multiple payment types (Card/UPI/COD)
- Each payment handler follows a common interface
- Easy to extend with new payment gateways

### 2. **Context API – Global App State**
File: `frontend/src/context/ShopContext.jsx`

Manages:
- Products
- Cart
- User state
- Orders

Acts as an internal “Redux-like” state manager, lightweight and clean.

---

## 🔌 API Endpoints (Backend)

| Endpoint | Method | Purpose |
|----------|--------|----------|
| `/products` | GET | Get all products |
| `/orders/:username` | GET | Get user-specific orders |
| `/orders` | POST | Create a new order |

> Backend supports **basic product and order management**  
> Cart is managed on the frontend.

---

## 🧪 Testing

### Frontend Tests (Vitest)
Located in:  
```
frontend/src/tests/
```

Includes tests for:
- ProductCard
- Login Page
- Register Page
- Cart Page
- Orders Page
- Profile Page
- Payment Strategy Pattern
- Utility functions

### Backend Tests
⚠️ **Not implemented yet**

---

## ▶️ Running Locally

### 1. Clone Repo
```bash
git clone git@github.com:Arnav-Oruganty/shophub.git
cd shophub
```

---

## 2️⃣ Backend Setup
```bash
cd backend
npm install
npm start
```

Express server starts at:

```
http://localhost:3000
```

---

## 3️⃣ Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🖼 Adding Product Images
Place images inside:

```
frontend/public/
```

Refer to them as:

```
/myimage.jpg
```

---

## 👥 Contributors

- **Rakshith Srinivasan** (IMT2023544)  
- **Arnav Oruganty** (IMT2023078)  
- **Ankith Kini** (IMT2023075)  
- **Pranav Sandeep** (IMT2023058)

---

## 📄 License
MIT License (Free to modify & use)

