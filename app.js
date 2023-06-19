const express = require('express');
const app = express();
const productRouter = require('./route/product');
const userRouter = require('./route/user');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use(productRouter);
app.use('/mycss', express.static(path.join(__dirname,'src','css')))
app.use('/js', express.static(path.join(__dirname,'src','js')))
app.use('/image', express.static(path.join(__dirname,'src','image')))
app.use("*",(req, res, next) => {
    res.sendFile(path.join(__dirname, "/view/404.html"));

})
app.listen(3000, () => {
    console.log('Your Server is running on 3000');
});