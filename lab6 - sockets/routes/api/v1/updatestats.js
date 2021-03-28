const express = require('express');
const router = express.Router();
const controller = require('../../../controllers/api/v1/updatestats');

router.put('/:id', controller.updateTeam);

module.exports = router;