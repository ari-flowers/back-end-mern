const express = require('express')
const router = express.Router()
const Plant = require('../models/plant.js')

// ======================================================
//       ROUTERS
// ======================================================
//CREATE ROUTE
router.post('/', async (req, res) => {
  try{
    const newPlant = await Plant.create(req.body)
    res.status(200).json(newPlant)
  } catch(err) {
      res.status(400).json({
        error: err.message
      })
  }
})

//INDEX ROUTE
router.get('/', async (req, res) => {
  try {
    const foundPlants = await Plant.find();
    res.status(200).json(foundPlants)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

// SHOW ROUTE
router.get('/:id', async (req, res) =>{
  try {
    res.status(200).json({ message: req.params.id })
  }catch(err){
    res.status(400).json({
      error: err.message
    })
  }
})

// //UPDATE ROUTE
router.put('/:id', async (req, res) => {
  try {
    const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true })
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})
// //DELETE ROUTE
router.delete('/:id', async (req, res) => {
  try {
    const deletedPlant = await Plant.findByIdAndRemove(req.params.id)
    res.status(200).json(deletedPlant)
  } catch(err) {
    res.status(400).json({ error: err.message })
  }
})

module.exports = router
