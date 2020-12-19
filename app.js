const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const router = require("./routes/blogRoutes");

const app = express();
app.use(express.json()); //middleware
app.use("/blogList", router);
//multer
app.use(express.static(path.join(__dirname, "public")));

app.listen(
  process.env.PORT,
  console.log(`App started at port ${process.env.PORT}`)
);
