const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql');


const server = express()
server.use(bodyParser.json());
const cors = require('cors')
server.use(cors());


//Establish Database Connection

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'onlinecropsmarket'
});

connection.connect(function (error) {
  if (error) {
    console.log("error connecting to database");
  } else {
    console.log("the database is connected");
  }
});

//Establish The Port
server.listen(8011, function check(error) {
  if (error) {
    console.log("Error");
  }
  else {
    console.log("started");
  }
});



//signup
server.post("/api/signup/add", (req, res) => {
  let details = {
    name: req.body.name,

    email: req.body.email,
    password: req.body.password,

  };

  let sql = "INSERT INTO signup SET ?";
  connection.query(sql, details, (error) => {
    if (error) {
      res.send({ status: false, message: "signup created failed" });
    }
    else {
      res.send({ status: true, message: "signup created sucessful" });

    }
  });
});
//View the Record
server.get("/api/signup", (req, res) => {

  var sql = "SELECT * FROM signup ";
  connection.query(sql, function (error, result) {
    if (error) {
      console.log("error connecting to db");
    }
    else {
      res.send({ status: true, data: result });
    }
  });
});
//Search Record
server.get("/api/signup/:id", (req, res) => {
  var id = req.params.id;

  var sql = "SELECT * FROM signup WHERE id=" + id;
  connection.query(sql, function (error, result) {
    if (error) {
      console.log("error connecting to db");
    }
    else {
      res.send({ status: true, data: result });
    }
  });
});
//Update the Records
server.put("/api/signup/update/:id", (req, res) => {
  let sql =
    "UPDATE signup SET name='" +
    req.body.name +
    "',email='" +
    req.body.email +
    "',Password='" +
    req.body.password +
    "'WHERE id=" + req.params.id;
  let a = connection.query(sql, (error, result) => {
    if (error) {
      res.send({ status: false, message: "error connecting to db" });
    }
    else {
      res.send({ status: true, message: "Student updated succesfully" });
    }
  });
});
//Delete Record
server.delete("/api/signup/delete/:id", (req, res) => {


  let sql = "DELETE FROM signup WHERE id=" + req.params.id + "";

  let a = connection.query(sql, (error, result) => {
    if (error) {
      res.send({ status: false, message: "data delete failed" });
    }
    else {
      res.send({ status: true, message: "data delete sucessful" });
    }
  });
});


///
///
//user///

server.post("/api/user/add", (req, res) => {
  let details = {
    name: req.body.name,

    email: req.body.email,
    password: req.body.password,

  };

  let sql = "INSERT INTO user SET ?";
  connection.query(sql, details, (error) => {
    if (error) {
      res.send({ status: false, message: "user signup created failed" });
    }
    else {
      res.send({ status: true, message: "user signup created sucessful" });

    }
  });
});
//View the Record
server.get("/api/user", (req, res) => {

  var sql = "SELECT * FROM user ";
  connection.query(sql, function (error, result) {
    if (error) {
      console.log("error connecting to userdb");
    }
    else {
      res.send({ status: true, data: result });
    }
  });
});
//Search Record
server.get("/api/user/:id", (req, res) => {
  var id = req.params.id;

  var sql = "SELECT * FROM user WHERE id=" + id;
  connection.query(sql, function (error, result) {
    if (error) {
      console.log("error connecting to db");
    }
    else {
      res.send({ status: true, data: result });
    }
  });
});
//Update the Records
server.put("/api/user/update/:id", (req, res) => {
  let sql =
    "UPDATE user SET name='" +
    req.body.name +
    "',email='" +
    req.body.email +
    "',Password='" +
    req.body.password +
    "'WHERE id=" + req.params.id;
  let a = connection.query(sql, (error, result) => {
    if (error) {
      res.send({ status: false, message: "error connecting to userdb" });
    }
    else {
      res.send({ status: true, message: "user updated succesfully" });
    }
  });
});
//Delete Record
server.delete("/api/user/delete/:id", (req, res) => {


  let sql = "DELETE FROM user WHERE id=" + req.params.id + "";

  let a = connection.query(sql, (error, result) => {
    if (error) {
      res.send({ status: false, message: "user data delete failed" });
    }
    else {
      res.send({ status: true, message: "user data delete sucessful" });
    }
  });
});

///

///
//connection.query(sql, details, (error) => {
//    if (error) {
//        res.send({ status: false, message: "signup created failed" });
//    }
//    else {
//        res.send({ status: true, message: "signup created sucessful" });
//    }
//});
//
//http://localhost:3000/sellers
//http://localhost:3000/products
//http://localhost:3000/users
//http://localhost:3000/cart
//http://localhost:3000/orders


//user


server.post("/api/user/add", (req, res) => {
  let details = {


    email: req.body.email,
    name:req.body.name,
    password: req.body.password,

  };

  let sql = "INSERT INTO user SET ?";
  connection.query(sql, details, (error) => {
    if (error) {
      res.send({ status: false, message: "user  failed" });
    }
    else {
      res.send({ status: true, message: "user  sucessful" });

    }
  });
});
//View the Record
server.get("/api/user", (req, res) => {

  var sql = "SELECT * FROM user ";
  connection.query(sql, function (error, result) {
    if (error) {
      console.log("error connecting to user");
    }
    else {
      res.send({ status: true, data: result });
    }
  });
});
//Search Record
server.get("/api/user/:id", (req, res) => {
  var id = req.params.id;

  var sql = "SELECT * FROM user WHERE id=" + id;
  connection.query(sql, function (error, result) {
    if (error) {
      console.log("error connecting to db");
    }
    else {
      res.send({ status: true, data: result });
    }
  });
});
//Update the Records
server.put("/api/user/update/:id", (req, res) => {
  let sql =
    "UPDATE user SET email='" +
    req.body.email +
    "',Password='" +
    req.body.password +
    "',name='" +
    req.body.name +
    "'WHERE id=" + req.params.id;
  let a = connection.query(sql, (error, result) => {
    if (error) {
      res.send({ status: false, message: "error connecting to login" });
    }
    else {
      res.send({ status: true, message: "login updated succesfully" });
    }
  });
});
//Delete Record
server.delete("/api/login/user/:id", (req, res) => {


  let sql = "DELETE FROM user WHERE id=" + req.params.id + "";

  let a = connection.query(sql, (error, result) => {
    if (error) {
      res.send({ status: false, message: "user data delete failed" });
    }
    else {
      res.send({ status: true, message: "user data delete sucessful" });
    }
  });
});




///
///product
server.post("/api/product/add", (req, res) => {
  let details = {
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    color: req.body.color,
    image: req.body.image,
    description: req.body.description,
    quantity: req.body.quantity,
    productId: req.body.productId,
    userId:req.body.userId,

  };

  let sql = "INSERT INTO product SET ?";
  connection.query(sql, details, (error) => {
    if (error) {
      res.send({ status: false, message: "product created failed" });
    }
    else {
      res.send({ status: true, message: "product created sucessful" });

    }
  });
});
//View the Record
server.get("/api/product", (req, res) => {

  var sql = "SELECT * FROM product ";
  connection.query(sql, function (error, result) {
    if (error) {
      console.log("error connecting to db");
    }
    else {
      res.send({ status: true, data: result });
    }
  });
});
//Search Record
server.get("/api/product/:id", (req, res) => {
  var id = req.params.id;

  var sql = "SELECT * FROM product WHERE id=" + id;
  connection.query(sql, function (error, result) {
    if (error) {
      console.log("error connecting to product");
    }
    else {
      res.send({ status: true, data: result });
    }
  });
});
//Update the Records
server.put("/api/product/update/:id", (req, res) => {
  let sql =
    "UPDATE product SET name='" +
    req.body.name +
    "',price='" +
    req.body.price +
    "',category='" +
    req.body.category +
    "',color='" +
    req.body.color +
    "',image='" +
    req.body.image +
    "',description='" +
    req.body.description +
    "',quantity='" +
    req.body.quantity +
    "',productId='" +
    req.body.productId +
    "',userId='"+
    req.body.userId+
    "'WHERE id=" + req.params.id;
  let a = connection.query(sql, (error, result) => {
    if (error) {
      res.send({ status: false, message: "product connecting to db" });
    }
    else {
      res.send({ status: true, message: "product updated succesfully" });
    }
  });
});
//Delete Record
server.delete("/api/product/delete/:id", (req, res) => {


  let sql = "DELETE FROM product WHERE id=" + req.params.id + "";

  let a = connection.query(sql, (error, result) => {
    if (error) {
      res.send({ status: false, message: "product data delete failed" });
    }
    else {
      res.send({ status: true, message: "product data delete sucessful" });
    }
  });
});

///
///
//cart


server.post("/api/cart/add", (req, res) => {
  let details = {
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    color: req.body.color,
    image: req.body.image,
    description: req.body.description,
    quantity: req.body.quantity,
    productId: req.body.productId,
    userId:req.body.userId,

  };

  let sql = "INSERT INTO cart SET ?";
  connection.query(sql, details, (error) => {
    if (error) {
      res.send({ status: false, message: "cart created failed" });
    }
    else {
      res.send({ status: true, message: "cart created sucessful" });

    }
  });
});
//View the Record
server.get("/api/cart", (req, res) => {

  var sql = "SELECT * FROM cart ";
  connection.query(sql, function (error, result) {
    if (error) {
      console.log("error connecting to db");
    }
    else {
      res.send({ status: true, data: result });
    }
  });
});
//Search Record
server.get("/api/cart/:id", (req, res) => {
  var id = req.params.id;

  var sql = "SELECT * FROM cart WHERE id=" + id;
  connection.query(sql, function (error, result) {
    if (error) {
      console.log("error connecting to cart");
    }
    else {
      res.send({ status: true, data: result });
    }
  });
});
//Update the Records
server.put("/api/cartt/update/:id", (req, res) => {
  let sql =
    "UPDATE cart SET name='" +
    req.body.name +
    "',price='" +
    req.body.price +
    "',category='" +
    req.body.category +
    "',color='" +
    req.body.color +
    "',image='" +
    req.body.image +
    "',description='" +
    req.body.description +
    "',quantity='" +
    req.body.quantity +
    "',productId='" +
    req.body.productId +
    "',userId='"+
    req.body.userId+
    "'WHERE id=" + req.params.id;
  let a = connection.query(sql, (error, result) => {
    if (error) {
      res.send({ status: false, message: "cart connecting to db" });
    }
    else {
      res.send({ status: true, message: "cart updated succesfully" });
    }
  });
});
//Delete Record
server.delete("/api/cart/delete/:id", (req, res) => {


  let sql = "DELETE FROM cart WHERE id=" + req.params.id + "";

  let a = connection.query(sql, (error, result) => {
    if (error) {
      res.send({ status: false, message: "cart data delete failed" });
    }
    else {
      res.send({ status: true, message: "cart data delete sucessful" });
    }
  });
});

//
//
//
// priceSummary
server.post("/api/pricesummary/add", (req, res) => {
  let details = {
    
    price: req.body.price,
    discount: req.body.discount,
    tax: req.body.tax,
    delivery: req.body.delivery,
    total: req.body.total,
    

  };

  let sql = "INSERT INTO pricesummary SET ?";
  connection.query(sql, details, (error) => {
    if (error) {
      res.send({ status: false, message: "pricesummary created failed" });
    }
    else {
      res.send({ status: true, message: "pricesummary created sucessful" });

    }
  });
});
//View the Record
server.get("/api/pricesummary", (req, res) => {

  var sql = "SELECT * FROM pricesummary ";
  connection.query(sql, function (error, result) {
    if (error) {
      console.log("error connecting to db");
    }
    else {
      res.send({ status: true, data: result });
    }
  });
});
//Search Record
server.get("/api/pricesummary/:id", (req, res) => {
  var id = req.params.id;

  var sql = "SELECT * FROM pricesummary WHERE id=" + id;
  connection.query(sql, function (error, result) {
    if (error) {
      console.log("error connecting to db");
    }
    else {
      res.send({ status: true, data: result });
    }
  });
});
//Update the Records
server.put("/api/pricesummary/update/:id", (req, res) => {
  let sql =
    "UPDATE pricesummary SET price='" +
    req.body.price +
    "',discount='" +
    req.body.discount +
    "',tax='" +
    req.body.tax +
    "',delivery='" +
    req.body.delivery +
    "',total='" +
    req.body.total +
    "'WHERE id=" + req.params.id;
  let a = connection.query(sql, (error, result) => {
    if (error) {
      res.send({ status: false, message: "pricesummary connecting to db" });
    }
    else {
      res.send({ status: true, message: "pricesummary updated succesfully" });
    }
  });
});
//Delete Record
server.delete("/api/pricesummary/delete/:id", (req, res) => {


  let sql = "DELETE FROM pricesummary WHERE id=" + req.params.id + "";

  let a = connection.query(sql, (error, result) => {
    if (error) {
      res.send({ status: false, message: "pricesummary data delete failed" });
    }
    else {
      res.send({ status: true, message: "pricesummary data delete sucessful" });
    }
  });
});




///
//
//order
//
server.post("/api/order/add", (req, res) => {
  let details = {
    email: req.body.email,
    address: req.body.address,
    contact: req.body.contact,
    
    

  };

  let sql = "INSERT INTO `order` SET ?";
  connection.query(sql, details, (error) => {
    if (error) {
      res.send({ status: false, message: "order created failed" });
    }
    else {
      res.send({ status: true, message: "order created sucessful" });

    }
  });
});
//View the Record
server.get("/api/order", (req, res) => {

  var sql = "SELECT * FROM `order` ";
  connection.query(sql, function (error, result) {
    if (error) {
      console.log("error connecting to order");
    }
    else {
      res.send({ status: true, data: result });
    }
  });
});
//Search Record
server.get("/api/order/:id", (req, res) => {
  var id = req.params.id;

  var sql = "SELECT * FROM `order` WHERE id=" + id;
  connection.query(sql, function (error, result) {
    if (error) {
      console.log("error connecting to db");
    }
    else {
      res.send({ status: true, data: result });
    }
  });
});
//Update the Records
server.put("/api/order/update/:id", (req, res) => {
  let sql =
    "UPDATE `order` SET email='" +
    req.body.email +
    "',address='" +
    req.body.address +
    "',contact='" +
    req.body.contact +
    "'WHERE id=" + req.params.id;
  let a = connection.query(sql, (error, result) => {
    if (error) {
      res.send({ status: false, message: "order connecting to db" });
    }
    else {
      res.send({ status: true, message: "order updated succesfully" });
    }
  });
});
//Delete Record
server.delete("/api/order/delete/:id", (req, res) => {


  let sql = "DELETE FROM `order` WHERE id=" + req.params.id + "";

  let a = connection.query(sql, (error, result) => {
    if (error) {
      res.send({ status: false, message: "order data delete failed" });
    }
    else {
      res.send({ status: true, message: "order data delete sucessful" });
    }
  });
});
