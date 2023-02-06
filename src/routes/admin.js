const express = require("express");
const Admin = require("../model/Admin");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    let allAdmin = await Admin.find();
    res.status(200).send(allAdmin);
  } catch (er) {
    res.status(404).send(er.message);
  }
});

app.post("/", async (req, res) => {
  try {
    let admin = new Admin({ ...req.body });
    await admin.save();
    res.status(200).send(admin);
  } catch (er) {
    res.status(404).send(er.message);
  }
});

module.exports = app;
