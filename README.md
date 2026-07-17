# 🍽️ FoodNest

> **A Multi-Tenant Restaurant Marketplace & Ordering Platform built with the MERN Stack**

FoodNest is a cloud-based, multi-tenant restaurant marketplace where restaurants, hotels, cafes, and home-based food businesses can register, manage their menus, receive orders, and grow their business. Customers can discover nearby restaurants, place individual or group orders, and choose from multiple payment options.

This project is developed as a **Final Year Project (FYP)** with a strong focus on **Clean Architecture**, scalability, maintainability, and real-world software engineering practices while keeping the implementation simple and understandable for students.

---

## 📖 Table of Contents

- Overview
- Features
- System Roles
- Architecture
- Technology Stack
- Project Structure
- Multi-Tenant Design
- Group Ordering
- Payment Workflow
- Recommendation System
- Future Enhancements
- Installation
- Environment Variables
- Screenshots
- Contributing
- License

---

# 🚀 Overview

Unlike traditional restaurant management systems, **FoodNest** is designed as a **Software-as-a-Service (SaaS)** platform where multiple independent restaurants operate within a single application.

Each restaurant manages its own:

- Menu
- Orders
- Discounts
- Customers
- Reports

while administrators manage the entire marketplace.

---

# ✨ Key Features

## 👤 Customer

- User Registration & Login
- JWT Authentication
- Browse Restaurants
- Search Food
- Search Restaurants
- Nearby Restaurants
- Special Offers
- Frequently Ordered Items
- Add to Cart
- Place Order
- Group Ordering
- Split Payments
- Cash on Delivery
- Online Payment
- Upload Payment Proof (Optional)
- Order History
- Favorite Restaurants
- Reviews & Ratings
- Customer Dashboard

---

## 🍔 Restaurant Owner

- Restaurant Registration
- Pending Approval Workflow
- Restaurant Dashboard
- Menu Management
- Category Management
- Inventory Status
- Order Management
- Discount Management
- Sales Reports
- Payment Verification
- Restaurant Profile Management

---

## 👑 Super Admin

- Dashboard
- Restaurant Approval
- User Management
- Restaurant Management
- Analytics
- Reports
- Categories
- Platform Settings

---

# 🏢 Multi-Tenant Architecture

FoodNest follows a **shared database with tenant isolation** approach.

```
Platform
│
├── Restaurant A
│   ├── Menu
│   ├── Orders
│   ├── Customers
│   └── Discounts
│
├── Restaurant B
│   ├── Menu
│   ├── Orders
│   └── Customers
│
└── Restaurant C
```

Every restaurant only accesses its own data while sharing the same application.

---

# 👥 Group Ordering

FoodNest introduces a collaborative ordering system.

### Workflow

```
Customer A

↓

Creates Group Order

↓

Generates Invitation Link

↓

Shares Link

↓

Friends Join

↓

Everyone Adds Food

↓

Host Locks Order

↓

Payment

↓

Restaurant Receives Order
```

### Payment Options

### Option 1

Pay Entire Bill

The host pays for everyone.

---

### Option 2

Split Payment

Two modes are available:

### Split Equally

```
Total Bill = $100

4 Members

Each Pays = $25
```

---

### Self Payment

Each participant only pays for the items they added.

Example

```
John

Burger

Drink

$12

Ali

Pizza

$18

Sara

Fries

$5
```

The system generates separate payment requests.

The restaurant starts preparing the order only after all required payments are verified.

---

# 💳 Payment Methods

Customers can choose:

- Cash on Delivery
- EasyPaisa
- JazzCash
- Bank Transfer

For online payments:

1. Customer transfers money
2. Enters transaction reference
3. Optionally uploads payment screenshot
4. Restaurant verifies payment
5. Order status changes to Confirmed

---

# 🎯 Recommendation System

Customers receive personalized recommendations including:

- Nearby Restaurants
- Restaurants with Active Offers
- Frequently Ordered Foods
- Recently Ordered Items
- Top Rated Restaurants
- Popular Restaurants

---

# 🔍 Smart Search

Searching for a food item (e.g., Burger) displays all restaurants offering that item.

Results can be sorted by:

- Nearest
- Lowest Price
- Highest Rated
- Most Ordered
- Best Discount

---

# 🏷️ Discount Management

Restaurants can create promotional campaigns.

Example:

```
20% OFF

Category

Burgers

Start Date

10 July

End Date

20 July

Status

Active
```

---

# 📊 Dashboards

## Customer Dashboard

- Active Orders
- Order History
- Favorite Restaurants
- Saved Addresses
- Profile

---

## Restaurant Dashboard

- Daily Revenue
- Orders
- Pending Orders
- Popular Menu Items
- Sales Statistics

---

## Admin Dashboard

- Total Restaurants
- Pending Approvals
- Customers
- Revenue
- Active Orders
- Reports

---

# 🧱 Architecture

The project follows a lightweight **Clean Architecture**.

```
Client (React)

↓

API (Express)

↓

Controllers

↓

Services

↓

Repositories

↓

MongoDB
```

The architecture emphasizes separation of concerns while remaining simple enough for students to understand and extend.

---

# ⚙️ Technology Stack

## Frontend

- React.js
- React Router
- Redux Toolkit
- Axios
- Material UI

---

## Backend

- Node.js
- Express.js
- JWT Authentication
- Multer
- Cloudinary

---

## Database

- MongoDB
- Mongoose

---

## Development Tools

- Git
- GitHub
- VS Code
- Postman
- npm

---

# 📂 Project Structure

```
FoodNest
│
├── client
│   ├── public
│   ├── src
│   ├── components
│   ├── pages
│   ├── hooks
│   ├── services
│   ├── redux
│   ├── layouts
│   └── utils
│
├── server
│   ├── src
│   │
│   ├── config
│   ├── routes
│   ├── controllers
│   ├── services
│   ├── repositories
│   ├── models
│   ├── middlewares
│   ├── validators
│   ├── utils
│   └── app.js
│
└── README.md
```

---

# 🔐 Authentication

- JWT Authentication
- Role-Based Authorization
- Password Hashing
- Protected Routes

---

# 👥 User Roles

```
Super Admin

↓

Restaurant Owner

↓

Customer
```

---

# 📦 Installation

Clone repository

```bash
git clone https://github.com/yourusername/foodnest.git
```

Install backend dependencies

```bash
cd server
npm install
```

Install frontend dependencies

```bash
cd ../client
npm install
```

Run backend

```bash
npm run dev
```

Run frontend

```bash
npm start
```

---

# 🌍 Environment Variables

Backend

```env
PORT=5000

MONGO_URI=

JWT_SECRET=

CLOUDINARY_NAME=

CLOUDINARY_KEY=

CLOUDINARY_SECRET=
```

---

# 🚧 Future Enhancements

- Mobile Application
- Push Notifications
- Real-Time Order Tracking
- AI-Based Food Recommendation
- Integrated Payment Gateway
- Loyalty Program
- Restaurant Subscription Plans
- Delivery Rider Module
- Live Chat
- QR Code Ordering

---

# 🎓 Educational Goals

FoodNest demonstrates the implementation of:

- MERN Stack Development
- Clean Architecture
- RESTful API Design
- JWT Authentication
- Role-Based Authorization
- Multi-Tenant SaaS Architecture
- MongoDB Data Modeling
- Collaborative Group Ordering
- Dashboard Development
- Real-World Software Engineering Practices

---

# 🤝 Contributing

Contributions, suggestions, and improvements are welcome. Feel free to fork the repository, create a feature branch, and submit a pull request.

---

# 📄 License

This project is developed for educational purposes as a Final Year Project.

---

## 👨‍💻 Author

**Abdul Hameed**

Senior Software Engineer | MERN & .NET Developer

---

⭐ If you found this project useful, consider giving it a star!
