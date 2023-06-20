const ShoppingCart = require("../models/shoppingCart");
const User = require("../models/users");

exports.getShoppingCarts =(req, res)=>{
    res.status(200).json(ShoppingCart.getShoppingCart());
}
exports.addToCart =(req,res)=>{
    
    const products = req.body;
    if(!products){
        res.status(403).json({error:"please include products"})
    }
    const user = User.auth(req.body.user);
    
    if (!user.cart){
        const newCart = new ShoppingCart(user.username);
        user.cart = newCart;
        console.log(user)
    }
    console.log(user.cart.product,products)
    pro = user.cart.addToShoppingCart(products)
    
    res.status(200).json({ message: "Products added to the shopping cart" });
    
}