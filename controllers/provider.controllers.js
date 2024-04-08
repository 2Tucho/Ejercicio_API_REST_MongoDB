const Provider = require('../models/provider.model');

// CREATE
const createProvider = async (req, res) => {
    console.log(req.body);

    try{
        const data = req.body;
        let answer = await new Provider(data).save();
        res.status(201).json({"message": `proveedor actualizado: ${req.body.company_name}`, "provider":{answer}});

    }catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

// READ
const getAllProviders = async (req, res) => {
    try {
        let providers = await Provider.find({}); //{}
        res.status(200).json(providers); 
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

module.exports = {
    createProvider,
    getAllProviders
    //editProvider,
    //deleteProvider
}