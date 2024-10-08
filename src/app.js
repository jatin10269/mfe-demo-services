const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const productsRouter = require("./product/product.router");
const userRouter = require("./user/user.router")
const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);
app.use("/login",userRouter);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
