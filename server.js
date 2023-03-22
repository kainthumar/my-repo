const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 3306;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
const customerRoutes = require('./src/routes/customer.route.js')
app.use('/api/v1/customer', customerRoutes)

const laptopRoutes = require('./src/routes/laptop.route.js')
app.use('/api/v1/laptop', laptopRoutes)
const orderRoutes = require('./src/routes/order.route.js')
app.use('/api/v1/order', orderRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
