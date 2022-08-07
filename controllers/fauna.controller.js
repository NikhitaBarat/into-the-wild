const FaunaModel = require('../models/flaura.model'); 

// base route /api/plants/

// @desc fetch all the plant at that location
// @route GET /
const getPlants = async (req, res) => {
    try {
        const data = await FaunaModel.find({})
        res.status(200).send(data)
    }catch(error){
        res.send(error);
    }
}
// @desc create plant data
// @route POST /create
const createPlant = async (req, res) => {
    const data = req.body
    try{
        const resp = await FaunaModel.create(data)
        res.status(201).send(resp)
    }catch(error){
        res.send(error);
    }
}

// @desc fetch single plant data
// @route GET /one/:id

const getSinglePlant = async (req, res) => {
    const id = req.params.id;
    try{
        const data = await FaunaModel.findById(id)
        res.status(200).send(data)
    }catch(error){
        res.send(error);
    }
}

// @desc delete plant data
// @route DELETE /:id
const deletePlant = async (req, res) => {
    const id = req.params.id;

    try{
        const data = await FaunaModel.findByIdAndDelete(id)
        res.send(data)    
    }catch(error){
        res.send(error);
    }
}

// @desc update plant details
// @route PUT /:id

const updatePlant = async (req, res) => {
    const data = req.body
    try{
        const resp = await FaunaModel.findByIdAndUpdate(data)
        res.send(resp)
    }catch(error){
        res.send(error);
    }
}

module.exports = {
    getPlants,
    getSinglePlant,
    createPlant,
    deletePlant,
    updatePlant
}