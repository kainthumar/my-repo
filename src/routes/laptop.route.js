const express = require('express')
const router = express.Router()
const laptopController =   require('../controllers/laptop.controller');
// Retrieve all employees
router.get('/', laptopController.findAll);
// Create a new employee
router.post('/', laptopController.create);
// Retrieve a single employee with id
router.get('/:id', laptopController.findById);
// Update a employee with id
router.put('/:id', laptopController.update);
// Delete a employee with id
router.delete('/:id', laptopController.delete);
module.exports = router