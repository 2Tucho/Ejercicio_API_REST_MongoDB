const Provider = require('../models/provider.model');

// CREATE
const createProvider = async (req, res) => {
    console.log(req.body);

    try{
        const data = req.body;
        let answer = await new Provider(data).save();
        res.status(201).json({message: `proveedor actualizado: ${req.body.company_name}`, "provider":{answer}});

    }catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
};

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
};

// UPDATE
const updateProvider = async (req, res) => {
    try {
        const company = req.body.CIF;
        const newData = req.body;
        await Provider.updateOne({CIF:company}, newData)
        res.status(200).json({message: `proveedor actualizado: ${company}`, provider:{newData}});
    } 
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }
}

// DELETE
const deleteProvider = async (req, res) => {
    try {
        const company_CIF = req.body.CIF;

        const deletion = await Provider.deleteOne({CIF:company_CIF});
        console.log(deletion)
        console.log(company_CIF)
        res.status(200).send("Producto borrado!. Has borrado:"+company_CIF);
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({ msj: `ERROR: ${error.stack}` });
    }

}


module.exports = {
    createProvider,
    getAllProviders,
    updateProvider,
    deleteProvider
}