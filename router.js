const express = require("express");
const userModel = require("./model");
const app = express();

app.get("/list", async (request, response) => {
  const listUser = await userModel.find({});
  try {
    response.send(listUser);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/add-user", async (request, response) => {
  const user = new userModel(request.body);
  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
