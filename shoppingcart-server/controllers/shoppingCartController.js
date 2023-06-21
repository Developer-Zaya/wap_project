const ShoppingCart = require("../models/shoppingCart");
const User = require("../models/users");
exports.getShoppingCarts =(req, res)=>{
    const user = User.auth(req.get("auth"));
    res.status(200).json(ShoppingCart.getShoppingCart(user.username));
}
exports.addToCart =(req,res)=>{
    console.log(req.body)
    const { productid } = req.body;
    if(!productid){
        res.status(403).json({error:"please include products"})
    }
    console.log(productid);
    const user = User.auth(req.get("auth"));
    const cart = ShoppingCart.addToShoppingCart(productid,user.username);
    res.status(200).json(cart);
}
