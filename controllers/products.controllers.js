const Product = require('../models/products.model');
const Provider = require("../models/provider.model");

// CREATE
const createProduct = async (req, res) => {
    try {
        let companyName = req.body.provider; // ---> Cafeter'ia la Cibelina
        console.log(companyName)
        const provider = await Provider.find({ company_name: companyName });
        console.log(provider)
        const provider_id = provider[0]._id.toString(); //Está trayendo el id del publisher para reconocerlo y crear el juego
        console.log(provider_id)

        const data = {
            "title": req.body.title,
            "price": req.body.price,
            "description": req.body.description,
            "provider": provider_id
        };
        console.log(data)

        let answer = await new Product(data).save();
        console.log("MI ANSWER: " + answer)
        res.status(201).json({ message: `producto creado: ${req.body.title}`, "producto": { answer } });

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
};

// READ
const getAllProducts = async (req, res) => {
    try {
        const products = await Product
            .find()
            .populate('provider', '-_id -__v')
            .select('-_id -__v');
        res.status(200).json(products);
        console.log(products)
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
};

module.exports = {
    getAllProducts,
    createProduct
}