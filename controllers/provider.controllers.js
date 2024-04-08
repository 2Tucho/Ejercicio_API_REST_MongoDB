const Provider = require('../models/provider.model');

// READ
const getAllProviders = async (req, res) => {
    try {
        let products = await Provider.find({}); //{}
        res.status(200).json(products); 
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

module.exports = {
    //createProvider,
    getAllProviders
    //editProvider,
    //deleteProvider
}