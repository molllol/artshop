const express = require("express");
const app = express();
const mongoose =  require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const stripeRoute = require("./routes/stripe");



dotenv.config();

mongoose.connect(
    process.env.MONGO_URL)
.then(()=>console.log("DB Connection Successful!"))
.catch((err) => {
    console.log(err);

});

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/checkout", stripeRoute);


app.listen(process.env.PORT || 5000, ()=> {
    console.log("Backend server is running!");
});