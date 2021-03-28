const express = require('express');
const router = express.Router();
const controller = require('../../../controllers/api/v1/renders');

router.get('/', controller.getAll);

module.exports = router;