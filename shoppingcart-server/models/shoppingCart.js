const Product = require("./product");
const carts = [];

class CartItem{
    constructor(id,name,quantity,price,total){
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.total = total;
    }
}

class ShoppingCart {
    constructor(username,id,name,price,quantity){
        this.username = username;

        this.items = [id && new CartItem(id,name,quantity,price,quantity*price)];
    }
    static getShoppingCart(username){
        const cart = carts.find(cart => cart.username == username);
        return cart ? cart.items : [];
    }
    static addToShoppingCart(productid,username){
        let userCart = carts.find(cart => cart.username == username);
        console.log(productid);
        let product = Product.findById(productid);
        if(product.stock <= 0){
            return userCart ? userCart.items : [];
        }
        if(!userCart){
            userCart = new ShoppingCart(username,product.id,product.name,product.price,1);
            carts.push(userCart);
            return userCart.items;
        }
        let productIndex = userCart.items.findIndex(item => item.id == productid);
        if(productIndex > -1){
            if(product.stock >= userCart.items[productIndex].quantity){
                userCart.items[productIndex].quantity++;
                userCart.items[productIndex].total = userCart.items[productIndex].quantity * userCart.items[productIndex].price;
                carts.splice(carts.findIndex(cart=>cart.username == userCart.username), 1, userCart);
            }
            return userCart.items;
        }
        userCart.items = [...userCart.items,new CartItem(product.id,product.name,1,product.price,product.price) ]
        carts.splice(carts.findIndex(cart=>cart.username == userCart.username), 1, userCart);
        return userCart.items;
    }
}
module.exports = ShoppingCart
