 # ShopHub – E-commerce Platform

 A modern web-based platform for managing products, shopping carts, orders, and payments. ShopHub enables users to browse products, add items to their cart, checkout with multiple payment options, and track their orders.

 ---

 ## Roles and Features

 ### User
 - **Product Browsing**: View products with images, descriptions, and prices
 - **Cart Management**: Add, remove, and update quantities of products in the cart
 - **Checkout**: Enter address, select payment method (Card, UPI, Cash on Delivery)
 - **Order Tracking**: View past orders and order details
 - **Profile Management**: View and update user profile information

 ### Admin (future scope)
 - **Product Management**: Add, update, or remove products
 - **Order Management**: View and manage all orders
 - **User Management**: View registered users

 ---

 ## Tech Stack

 ### Frontend
 - **Framework**: React (with Vite)
 - **Styling**: CSS Modules
 - **Icons**: Lucide React
 - **State Management**: React Context API
 - **Testing**: Jest, React Testing Library

 ### Backend
 - **Framework**: Node.js (Express)
 - **Database**: SQLite (via sqlite3)
 - **Authentication**: Session-based (future scope)
 - **Testing**: Jest

 ---

 ## Architecture Design

 ### Client-Server Architecture

 ShopHub follows a classic client-server architecture:

 - **Frontend**: React SPA served by Vite
 - **Backend**: RESTful API with Express
 - **Database**: SQLite for persistent storage

 ### Frontend Folder Structure

 ```
 frontend/
 ├── public/
 │   └── images/           # Product images
 ├── src/
 │   ├── components/      # UI components (CartItem, ProductCard, Navbar, etc.)
 │   ├── context/         # React Context for global state
 │   ├── pages/           # Page components (Home, Cart, Checkout, Orders, etc.)
 │   ├── patterns/        # Design patterns (e.g., payment strategies)
 │   ├── utils/           # Utility functions
 │   └── tests/           # Test files
 ├── index.html
 ├── package.json
 └── vite.config.js
 ```

 ### Backend Folder Structure

 ```
 backend/
 ├── src/
 │   ├── controllers/     # Route controllers (cart, orders, products)
 │   ├── routes/          # Express route definitions
 │   ├── db.js            # Database connection
 │   └── server.js        # Express app entry point
 ├── database/
 │   └── shop.db          # SQLite database file
 ├── package.json
 ```

 ---

 ## Design Patterns Used

 ### 1. **Strategy Pattern** (Payment Methods)
 - File: `frontend/src/patterns/paymentStrategies.js`
 - Enables flexible selection of payment method (Card, UPI, Cash on Delivery) at checkout
 - Easily extendable for new payment types

 ### 2. **Context API** (Global State)
 - File: `frontend/src/context/ShopContext.jsx`
 - Centralizes cart, user, and product state management

 ---

 ## API Endpoints

 | Endpoint         | Method | Purpose                |
 |------------------|--------|------------------------|
 | `/products`      | GET    | List all products      |
 | `/cart`          | GET    | Get current cart       |
 | `/cart`          | POST   | Add item to cart       |
 | `/cart/:id`      | DELETE | Remove item from cart  |
 | `/orders`        | GET    | List user orders       |
 | `/orders`        | POST   | Place new order        |

 ---


## How to Run Tests

### Frontend
Tests are written using Jest and React Testing Library. Example test files are in `src/tests/`.

To run all frontend tests:
```bash
cd frontend
npm test
```

### Backend
Tests are written using Jest and Supertest. Example test files are in `backend/tests/`.

To run all backend tests:
```bash
cd backend
npm test
```

---

## How to Run Locally

 ### Prerequisites
 - **Node.js** (v18 or higher)
 - **npm**
 - **Git**

 ### 1. Clone the Repository
 ```bash
 git clone git@github.com:Arnav-Oruganty/shophub.git
 cd shophub
 ```

 ### 2. Backend Setup
 ```bash
 cd backend
 npm install
 npm start
 ```

 ### 3. Frontend Setup
 ```bash
 cd ../frontend
 npm install
 npm run dev
 ```

 ### 4. Add Local Product Images
 - Place images in `frontend/public/` and reference them in your product objects as `/imageName.jpg`

 ---

 ## Contributors
 - Rakshith Srinivasan IMT2023544
 - Arnav Oruganty IMT2023078
 - Ankith Kini IMT2023075
 - Pranav Sandeep IMT2023058
