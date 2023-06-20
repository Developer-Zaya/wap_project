const ShoppingCart = require("../models/shoppingCart");

exports.getShoppingCarts =(req, res)=>{
    res.status(200).json(ShoppingCart.getShoppingCart());
}
exports.addToCart =(req,res)=>{
    const { products } = res.body;
    if(!products){
        res.status(403).json({error:"please include products"})
    }
    res.status(200).json(ShoppingCart.addToShoppingCart(products));
}