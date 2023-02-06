require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");

const app = express();

// app.method(path, handler)
// app.use("/", (req, res, next) => {
//   res.send("Hello world");
// });
const usersRoutes = require("./routes/users");

const middlewareLogRequest = require("./middleware/log");
const upload = require("./middleware/multer");

// Middleware
app.use(middlewareLogRequest);
app.use(express.json());
app.use("/assets", express.static("public/images"));

app.use("/users", usersRoutes);

// PATH Middleware Multer
// upload.single(key)
app.use("/upload", upload.single("photo"), (req, res) => {
  res.json({
    message: "UPLOAD success",
  });
});

app.use((err, req, res, next) => {
  res.json({
    message: err.message,
  });
});

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`server running on ${PORT}`);
});
