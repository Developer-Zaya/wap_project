class Product {

    constructor(id, title, price, img,stack) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.img = img;
        this.stack = stack;
    }

    save() {
        this.id = Math.random().toString();
        products.push(this);
        return this;
    }

    update() {
        const index = products.findIndex(p => p.id === this.id);
        if (index > -1) {
            products.splice(index, 1, this);
            return this;
        } else {
            throw new Error('NOT Found');
        }

    }

    static fetchAll() {
        return products;
    }

    static findById(productId) {
        const index = products.findIndex(p => p.id === productId);
        if (index > -1) {
            return products[index];
        } else {
            throw new Error('NOT Found');
        }
    }

    static deleteById(productId) {
        const index = products.findIndex(p => p.id === productId);
        if (index > -1) {
            products = products.filter(p => p.id !== productId);
        } else {
            throw new Error('NOT Found');
        }
    }

}

const products = [new Product(1, "React", 9.99, "react.png",8),new Product(2, "Nodejs", 19.99, "node.png",2),new Product(3, "Angular", 29.99, "angular.png",8)];

module.exports = Product;