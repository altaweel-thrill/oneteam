const express = require("express");
const path = require("path");

const app = express();

// إعداد EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ملفات static
app.use(express.static(path.join(__dirname, "public")));

// Routes
const mainRoutes = require("./routes/main.routes");
app.use("/", mainRoutes);

// تشغيل السيرفر
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});