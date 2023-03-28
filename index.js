const express = require("express");
const bodyParser = require("body-parser");

const contactsRoute = require("./routes/contacts");
const vehiclesRoute = require("./routes/vehicles");
const commentsRoute = require("./routes/comments");
const productsRoute = require("./routes/products");
const app = express();
app.use(express.static("public"));
app.use(express.json());

app.use(contactsRoute);
app.use(vehiclesRoute);
app.use(commentsRoute);
app.use(productsRoute);

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
