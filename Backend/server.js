// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config(); // ✅ Loads .env for local development

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔹 MongoDB Connection (uses ENV)
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.log("❌ MongoDB Error:", err));

// 🔹 User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: String
});
const User = mongoose.model("User", userSchema);

// 🔹 Serve frontend (if you build React/HTML frontend inside "Frontend")
app.use(express.static(path.join(__dirname, "Frontend/build")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Frontend", "build", "index.html"));
});

// 🔹 Register API
app.post("/api/register", async (req, res) => {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        res.json({ success: true, message: "User registered successfully" });
    } catch (err) {
        res.json({ success: false, message: "User already exists" });
    }
});

// 🔹 Login API
app.post("/api/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) return res.json({ success: false, message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ success: false, message: "Invalid password" });

    // ✅ Use ENV secret for JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ success: true, token, username: user.username });
});

// 🔹 Start Server (Render provides PORT)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
