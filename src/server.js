const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const dbConnect = require("./config/db.js");
require("dotenv").config();
const mediaRouter = require("./routes/media");
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/media", mediaRouter);
app.use("/user", userRouter);
app.use("/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("Welcome to augmentic");
});

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`Server is running on port ${PORT}`);
});
