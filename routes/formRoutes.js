const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.get('/', formController.submitForm); // Show the form
router.post('/submit', formController.submitForm); // Handle form submission
router.get('/data', formController.getFormData); // New route for fetching data
module.exports = router;
 