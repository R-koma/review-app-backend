const express = require("express");
const app = express();
const authRoute = require("./routes/auth");

const PORT = 5000;
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGOURL)
  .then(() => console.log("DBと接続中・・・"))
  .catch((err) => {
    console.log(err);
  });

app.use("/api/auth", authRoute);

app.listen(PORT, () => console.log("サーバーが起動しました"));
