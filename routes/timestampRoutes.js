const express = require('express');
const timestampController = require('../controllers/timestampController');

const router = express.Router();

router.route('/').get(timestampController.getCurrentTimestamp);

router.route('/:input').get(timestampController.getInputTimestamp);

module.exports = router;
