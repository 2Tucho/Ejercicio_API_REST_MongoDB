const mongoose = require('mongoose');
require('../config/db_mongo') // Conexión a BBDD MongoDB

const objectSchema = {
    company_name: { 
        type: String, 
        required: true
    },
    CIF: { 
        type: String, 
        required: true
    },
    address: { 
        type: String, 
        required: true 
    },
    url_web: { 
        type: String, 
        required: true 
    }
};
// Crear el esquema
const providerSchema = mongoose.Schema(objectSchema);


// Crear el modelo --> Colección
const Provider = mongoose.model('Provider', providerSchema);


//Provider.find({}).then((data) => console.log(data))

/* Provider.create({
    "company_name": "Teatro Marquina",
    "CIF": "B40236882",
    "address": "Calle de Prim 11",
    "url_web": "https://www.tortillasmarquina.com"
  }).then((data) => console.log(data)) */

module.exports = Provider;