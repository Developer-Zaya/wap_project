const ShoppingCart = require("../models/shoppingCart");
const User = require("../models/users");
exports.getShoppingCarts =(req, res)=>{
    res.status(200).json(ShoppingCart.getShoppingCart());
}
exports.addToCart =(req,res)=>{
    const { product } = res.body;
    if(!product){
        res.status(403).json({error:"please include products"})
    }
    const user = User.auth(req.get("auth"));
    const cart = ShoppingCart.addToShoppingCart(product,user.username);
    res.status(200).json(cart);
}