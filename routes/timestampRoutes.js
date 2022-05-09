const express = require('express');
const timestampController = require('../controllers/timestampController');

const router = express.Router();

router
    .route(['/', '/:input'])
    .get(timestampController.inputCheck, timestampController.getTimestamp);

module.exports = router;
