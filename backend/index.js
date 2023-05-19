const express = require("express");
const cors = require("cors");
require("./DB/Config");
const User = require("./DB/Users");
const Product = require("./DB/Product");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (request, response) => {
  let user = new User(request.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  response.send(result);
});
app.post("/login", async (request, response) => {
  console.log(request.body);
  if (request.body.password && request.body.email) {
    let user = await User.findOne(request.body).select("-password");
    if (user) {
      response.send(user);
    } else {
      response.send({ result: "user not found" });
    }
  }
});
// add data for product with the help of postman.
app.post("/add-product", async (request, response) => {
  let product = new Product(request.body);
  let result = await product.save();
  response.send(result);
});

app.get("/product", async (request, response) => {
  let products = await Product.find();
  if (products.length > 0) {
    response.send(products);
  } else {
    response.send({ result: "no product found" });
  }
});

app.delete("/product/:id", async (request, response) => {
  // response.send(request.params)
  const result = await Product.deleteOne({ _id: request.params.id });
  response.send(result);
});
app.get("/product/:id", async (request, response) => {
  let result = await Product.findOne({ _id: request.params.id });
  if (result) {
    response.send(result);
  } else {
    response.send({ result: "No record found." });
  }
});

app.put("/product/:id", async (request, response) => {
  let result = await Product.updateOne(
    { _id: request.params.id },
    { $set: request.body }
  );
  response.send(result);
});
app.get("/search/:key", async (request, response) => {
  let result = await Product.find({
    $or: [
      { name: { $regex: request.params.key } },
      { price: { $regex: request.params.key } },
      { catogery: { $regex: request.params.key } },
      { company: { $regex: request.params.key } },
    ],
  });
  response.send(result);
});

app.listen(5000);

// cors issue in react after hitting the backend ;
