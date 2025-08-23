# 🎓 Student-Mentor Booking Platform

A modern and responsive **Student-Mentor Booking Web Application** where students can browse mentors, add them to favorites, book sessions, and track their learning journey.  
Admins can manage mentors, view bookings, and monitor users with an easy-to-use dashboard.  

This project is designed for **personalized mentoring** – connecting learners with experts seamlessly.  

---

## 🚀 Features
- 👨‍🎓 **Student Panel** – Login/Signup, browse mentors, favorites, cart, and bookings.
- 👩‍🏫 **Mentor Profiles** – Each mentor has subject expertise, session duration, and pricing.
- 🛒 **Cart System** – Add mentors to cart before booking.
- 📂 **Favorites** – Save preferred mentors for later.
- 🛠️ **Admin Dashboard** – Add mentors, manage bookings, and view user details.
- 📱 **Fully Responsive** – Works smoothly on desktop, tablet, and mobile.
- 🔐 **Authentication** – JWT-based secure login & signup.

---

## 🖼️ Project Preview
![Project Screenshot](https://github.com/user-attachments/assets/0e64853c-ec65-458a-8286-38b5ea6cd7e1)  
*(Replace this with your own screenshot of Student-Mentor Booking UI)*  

---

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Icons & Fonts:** Font Awesome, Google Fonts  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB with Mongoose  
- **Authentication:** JWT, bcrypt.js  
- **Deployment:** GitHub Pages / Vercel / Netlify  

---

## 📦 Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Sandeep-crtl/student-mentor-booking.git
2️⃣ Navigate into the project folder
cd student-mentor-booking
3️⃣ Setup Backend
cd Backend
npm install
Create a .env file in Backend/:

env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
Run server:

node server.js
Server runs at 👉 http://localhost:5000

4️⃣ Setup Frontend
Open Frontend/index.html in browser
OR

Use Live Server in VS Code for a smooth experience

📂 Folder Structure

student-mentor-booking/
│── Backend/         # Node.js + Express backend
│   ├── server.js    # Main API server
│   ├── models/      # Mongoose schemas
│   ├── routes/      # API routes
│   └── .env         # Environment variables
│
│── Frontend/        # HTML, CSS, JS frontend
│   ├── index.html   # Home page
│   ├── Teachers.html# Mentor listing
│   ├── style.css    # Styling
│   └── script.js    # Frontend logic
│
└── README.md        # Documentation
📜 How to Contribute
Fork this repository.

Create a new branch:

git checkout -b feature-branch
Make your changes and commit:


git commit -m "Add new feature"
Push to your branch:


git push origin feature-branch
Open a Pull Request. ✅

📧 Contact
👤 Sandeep Bhukya
📩 Email: nayaksandeep424@gmail.com
🐙 GitHub: @Sandeep-crtl
