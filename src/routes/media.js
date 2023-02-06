const express = require("express");
const Media = require("../model/media");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    let allMediaUrl = await Media.find();
    res.status(200).send(allMediaUrl);
  } catch (el) {
    res.status(404).send(er.message);
  }
});

app.put("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let media = await Media.findByIdAndUpdate(
      id,
      { ...req.body.score },
      { new: true }
    );
    res.status(200).send(media);
  } catch (er) {
    res.status(404).send(er.message);
  }
});

app.post("/", async (req, res) => {
  let media = new Media({ ...req.body });
  await media.save();
  res.status(200).send(media);
});

module.exports = app;
