const carts = [];

class ShoppingCart {
    constructor(username){
        this.username = username;
        this.product = {}
    }
    static getShoppingCart(){
        return carts;
    }
    static addToShoppingCart(product){
        console.log("pro",product)
        this.product.push(product);
        return this.product
    }
}
module.exports = ShoppingCart;