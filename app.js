const express = require('express');
const bodyParser = require('body-parser');
const orderRoute = require('./routes/orderRoute.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/orders', orderRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
