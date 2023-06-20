const express = require('express');
const shoppingCartController = require("../controllers/shoppingCartController")
const middleware = require("../middleware/authMiddleware")

const router = express.Router();

middleware(router);

router.get("/",shoppingCartController.getShoppingCarts);

router.post("/",shoppingCartController.addToCart);

module.exports= router;