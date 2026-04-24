const express = require('express');
const router = express.Router();
const { getAllPhilosophers } = require('./controller');

router.get('/all', getAllPhilosophers);

module.exports = router;