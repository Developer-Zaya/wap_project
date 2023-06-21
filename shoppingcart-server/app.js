const express = require('express');
const productRouter = require('./routes/product');
const userRouter = require('./routes/users');
const shoppingCartRouter = require('./routes/shoppingCart');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use("/cart",shoppingCartRouter);

app.use((req, res, next) => {
    res.status(404).json({ error: req.url + ' API not supported!' ,status:404});
});

app.use((err, req, res, next) => {
    console.log(err.message);
    if (err.message === 'NOT Found') {
        res.status(404).json({ error: err.message ,status:404});
    } else {
        res.status(500).json({ error: 'Something is wrong! Try later',status:500 });
    }
});

app.listen(3000, () => console.log('listening to 3000...'));