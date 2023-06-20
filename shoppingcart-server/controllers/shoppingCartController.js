const ShoppingCart = require("../models/shoppingCart");
const User = require("../models/users");
const Product = require('../models/product');

exports.getShoppingCarts = (req, res) => {
  res.status(200).json(ShoppingCart.getShoppingCart());
};

exports.addToCart = (req, res) => {
  const products = req.body;
  if (!products) {
    res.status(403).json({ error: "Please include products" });
  }

  const user = User.auth(req.body.user);

  if (!user) {
    res.status(401).json({ error: "Invalid user" });
    return;
  }

  if (!user.cart) {
    user.cart = new ShoppingCart(user.username);
  }

  const product = Product.findById(products.product)
  
  const cart = user.cart.addToShoppingCart(product);
  console.log(user.cart)
  

  res.status(200).json(cart);
};