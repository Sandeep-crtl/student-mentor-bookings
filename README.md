# 🎓 Student-Mentor Booking Platform

A full-stack web application that connects **students** with **mentors** for personalized learning.  
Students can browse mentors, add favorites, book sessions, and manage their learning journey.  
Admins can manage teachers, view bookings, and monitor users.

---

## ✨ Features

### 👨‍🎓 Student
- 🔐 Secure **Login / Signup** (JWT authentication + password hashing with bcrypt).
- 📚 Browse mentors with **subject, duration, and price** details.
- ❤️ Add mentors to **favorites**.
- 🛒 Add sessions to **cart** before booking.
- 📖 View booking history.

### 👩‍🏫 Mentor
- 📄 Displayed with **profile image, subject expertise, duration, and cost**.
- ✅ Easy to add/update mentors from admin panel.

### 🛠 Admin
- 👥 View all registered **users**.
- 📖 Manage all **bookings**.
- ➕ Add / update **teachers** dynamically.
- 📊 Dashboard to track platform activities.

---

## 🏗 Tech Stack

### Frontend
- **HTML5, CSS3, JavaScript **
- **FontAwesome & Google Fonts** for icons and styling
- LocalStorage for quick cart/favorites

### Backend
- **Node.js + Express.js**
- **MongoDB + Mongoose** for database
- **JWT Authentication** for secure login
- **bcrypt.js** for password hashing
- **CORS** enabled API

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Sandeep-crtl/student-mentor-booking.git
cd student-mentor-booking

2️⃣ Setup Backend
cd Backend
npm install


Create a .env file in Backend/:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000


Run server:

node server.js


Server runs at 👉 http://localhost:5000

3️⃣ Setup Frontend

Open Frontend/index.html in browser OR host via Live Server.

📂 Project Structure
student-mentor-booking/
│── Backend/         # Node.js + Express backend
│   ├── server.js    # Main API server
│   ├── models/      # Mongoose schemas
│   ├── routes/      # API routes
│   └── .env         # Secrets (not pushed to repo)
│
│── Frontend/        # HTML, CSS, JS frontend
│   ├── index.html   # Home page
│   ├── Teachers.html# Mentor listing
│   ├── style.css    # Styling
│   └── script.js    # Frontend logic
│
└── README.md        # Documentation

📸 Screenshots

(Add screenshots of your project UI here for better presentation)

🤝 Contributing

Fork the repo 🍴

Create a new branch (feature-xyz)

Commit changes (git commit -m "Added xyz feature")

Push branch & create PR ✅

🛡 Security

Passwords stored encrypted with bcrypt.

Authentication handled with JWT tokens.

Sensitive credentials kept in .env.

📬 Contact

👨‍💻 Author: Sandeep Bhukya
🔗 GitHub: Sandeep-crtl
