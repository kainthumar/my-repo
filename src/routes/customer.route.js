const express = require('express')
const router = express.Router()
const customerController =   require('../controllers/customer.controller');
// Retrieve all employees
router.get('/', customerController.findAll);
// Create a new employee
router.post('/', customerController.create);
// Retrieve a single employee with id
router.get('/:id', customerController.findById);
// Update a employee with id
router.put('/:id', customerController.update);
// Delete a employee with id
router.delete('/:id', customerController.delete);
module.exports = router