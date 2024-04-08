const express = require('express')
const app = express()
const port = 3000

// Middlewares
const error404 = require('./middlewares/error404');
const morgan = require('./middlewares/morgan');

// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

// Rutas
const providersApiRoutes = require("./routes/providers.routes")

app.use(express.json()); // Habilito recepción de JSON en servidor

// Rutas
//API
app.use('/api/providers', providersApiRoutes)

// Para rutas no existentes
app.use('*',error404);

// http://localhost:3000
const server = app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
  });
  