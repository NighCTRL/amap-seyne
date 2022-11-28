//imports
const cors = require('cors')
const express = require('express');
const json = require('express').json;
require('dotenv').config();

const corsOptions = {
  credentials: true,
  origin: 'https://amaplaseynesurmer.fr'
}


// routes import
const producteursRoutes = require('./routes/producteurs')
const connexionRoutes = require('./routes/connexion')
const editProducteurRoutes = require('./routes/editProducteur')

const app = express()

//middlewares
app.use(cors(corsOptions));
app.use(json())

//routes
app.use(producteursRoutes);
app.use(connexionRoutes);
app.use(editProducteurRoutes);

const port = process.env.port || 5000;

app.listen(port,() => {
  console.log(`listening on port ${port}`)
})



