const express = require('express');
const path = require('path')
const options = {
    "caseSensitive": false,
    "strict": false
};
const router = express.Router(options);
router.get('/user', (req, res, next) => {
    res.sendFile(path.join(__dirname, "../view/user.html"));
});
module.exports = router;