const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use("/books",router);


mongoose.connect("mongodb+srv://admin:lzd844UzawNWp9DT@cluster0.2yzrsnm.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Connected To DB"))
  .then(() => {
    app.listen(5000);
  }).catch((err) => console.log(err));



// lzd844UzawNWp9DT
