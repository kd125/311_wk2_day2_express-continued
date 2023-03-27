const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("public"));
app.use(express.json());

const { contacts } = require("./data/contacts");
const { vehicles } = require("./data/vehicles");
const { comments } = require("./data/comments");
const { products } = require("./data/products");

const port = process.env.PORT || 4001;

app.get("/contacts", (req, res) => {
  res.json(contacts);
});

app.get("/vehicles", (req, res) => {
  res.json(vehicles);
});

app.get("/comments", (req, res) => {
  res.json(comments);
});

app.get("/products", (req, res) => {
  res.json(products);
});

//-----------------------------------------

app.post("/contacts", (req, res) => {
  contacts.push({
    _id: contacts.length + 1,
    ...req.body,
  });
  res.json(_id, req.body);
});

app.post("/vehicles", (req, res) => {
  vehicles.push({
    _id: vehicles.length + 1,
    ...req.body,
  });
  res.json(_id, req.body);
});

app.post("/comments", (req, res) => {
  comments.push({
    _id: comments.length + 1,
    ...req.body,
  });
  res.json(_id, req.body);
});

app.post("/products", (req, res) => {
  products.push({
    _id: products.length + 1,
    ...req.body,
  });
  res.json(_id, req.body);
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
