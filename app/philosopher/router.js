const express = require('express');
const router = express.Router();
const { getAllPhilosophers, getDetailPhilosopher } = require('./controller');

router.get('/all', getAllPhilosophers);
router.get('/:id', getDetailPhilosopher);

module.exports = router;