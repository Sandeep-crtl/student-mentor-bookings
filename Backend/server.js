const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔹 MongoDB Connection
mongoose.connect("mongodb+srv://nayaksandeep424:RPchyksJVneIy4uC@cluster0.7qjxksp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.log(err));

// 🔹 User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: String
});

const User = mongoose.model("User", userSchema);


app.use(express.static(path.join(__dirname, 'Frontend/build')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Frontend', 'build', 'index.html'));
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

    // Generate token
    const token = jwt.sign({ id: user._id }, "secretKey", { expiresIn: "1h" });
    res.json({ success: true, token, username: user.username });
});

// 🔹 Start Server
app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));



