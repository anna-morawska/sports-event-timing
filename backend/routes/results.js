const express = require('express');
const router = express.Router();
const resultsController = require('../controllers/results');

router.post('/', resultsController.postResults);

module.exports = router;
