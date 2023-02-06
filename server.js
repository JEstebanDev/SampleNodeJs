const express = require("express");
const mongoose = require("mongoose");
const Router = require("./router").default;
require("dotenv").config({ path: ".env" });
const app = express();

app.use(express.json());
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DV_MONGO);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error"));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000...");
});
