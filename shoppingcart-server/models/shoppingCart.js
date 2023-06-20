const carts = [];

class ShoppingCart {
    constructor(username,product,quantity){
        this.username = username;
    }
    static getShoppingCart(){
        return carts;
    }
    static addToShoppingCart(product){
        carts.push(product);
    }
}
module.exports = ShoppingCart;