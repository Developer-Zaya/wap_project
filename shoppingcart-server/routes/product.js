const express = require('express');
const productController = require('../controllers/productController');
const middleware = require("../middleware/authMiddleware");

const router = express.Router();

middleware(router);

router.get('/', productController.getProducts);

router.get('/:prodId', productController.getProductById);

router.post('/', productController.save);

router.put('/:prodId', productController.update);

router.delete('/:prodId', productController.deleteById);

module.exports = router;