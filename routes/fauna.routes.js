const express = require('express');
const router = express.Router()
const {
    getPlants,
    getSinglePlant,
    createPlant,
    deletePlant,
    updatePlant
} = require('../controllers/fauna.controller');

router.get('/', getPlants)

router.get('/one/:id', getSinglePlant)

router.post('/create', createPlant)

router.delete('/:id', deletePlant)

router.patch('/:id', updatePlant)

module.exports = router 