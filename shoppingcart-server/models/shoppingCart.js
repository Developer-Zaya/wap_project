class ShoppingCart {
    constructor(username) {
        this.username = username;
        this.products = [];
    }

    getShoppingCart() {
        return this.products;
    }

    addToShoppingCart(product) {
        const proIndex = this.products.findIndex(p => p.product.id === product.id);
        if (proIndex >= 0) {
            this.products[proIndex].quantity += 1;
        } else {
            this.products.push({
                'product': product,
                'quantity': 1
            });
        }
        return this.products
    }
}

module.exports = ShoppingCart;