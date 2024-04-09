const mongoose = require('mongoose');
require('../config/db_mongo') // Conexión a BBDD MongoDB

const objectSchema = {
    /* id: { 
        type: Number, 
        required: true,
    }, */
    title: { 
        type: String
    },
    price: { 
        type: Number
    },
    description: { 
        type: String
    },
    provider:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provider'
    }
};
// Crear el esquema
const productSchema = mongoose.Schema(objectSchema);


// Crear el modelo --> Colección
const Product = mongoose.model('Product', productSchema);

module.exports = Product;