const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productsRoutes = require('./Routes/Products.js');
const errorController = require('./utils/errorController.js');
const app = express();

//  database connection
require('./DatabaseConfig/mongoose.js');
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());

app.use('/api', productsRoutes);
app.use(errorController);
//  fix before production
const port = 5000 || process.env.PORT;

app.listen(port, (req, res) => {
  console.log(`SERVER RUNNING ON ${port} 😊`);
});
