# 📊 CRUD Dashboard Project

## 📌 Overview

This is a full-stack CRUD (Create, Read, Update, Delete) dashboard application built using **Node.js, Express, HTML, CSS, and JavaScript**.
It allows users to manage tasks/items through a simple and interactive dashboard.

---

## 🚀 Features

* ➕ Add new items
* 📄 View all items
* ✏️ Update existing items
* ❌ Delete items
* 🔄 Real-time UI updates
* ⚠️ Input validation
* 🎨 Clean and responsive UI
* 🚪 Logout functionality

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript (Fetch API)

### Backend

* Node.js
* Express.js

### Database

* Temporary in-memory storage (Array)
  *(MySQL integration can be added later)*

---

## 📁 Project Structure

```
project/
│
├── backend/
│   ├── controllers/
│   │   └── itemController.js
│   ├── routes/
│   │   ├── itemRoutes.js
│   │   └── authRoutes.js
│   ├── config/
│   │   └── db.js
│   └── server.js
│
├── frontend/
│   ├── login.html
│   ├── register.html
│   └── dashboard.html
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/crud-dashboard-project.git
cd crud-dashboard-project
```

---

### 2️⃣ Install Dependencies

```
cd backend
npm install
```

---

### 3️⃣ Run Backend Server

```
node server.js
```

Server will run on:

```
http://localhost:5000
```

---

### 4️⃣ Run Frontend

Open:

```
frontend/dashboard.html
```

---

## 🔗 API Endpoints

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/items     | Get all items |
| POST   | /api/items     | Create item   |
| PUT    | /api/items/:id | Update item   |
| DELETE | /api/items/:id | Delete item   |

---

## 📸 Screenshots (Optional)

Add screenshots of your project UI here.

---

## 🎯 Future Improvements

* 🔐 JWT Authentication
* 🗄️ MySQL Database Integration
* ⚛️ React Frontend
* 🌐 Deployment

---

## 👨‍💻 Author

**Thippesh**

---

## ⭐ Conclusion

This project demonstrates a complete full-stack CRUD application with frontend-backend integration and is a strong foundation for building scalable web applications.

---
