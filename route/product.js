const express = require('express');
const path = require('path')
const options = {
    "caseSensitive": false,
    "strict": false
};
const router = express.Router(options);
router.get('/product', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../view/product.html"));
});
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../view/main.html"));
});
module.exports = router;
