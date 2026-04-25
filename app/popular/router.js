const express = require('express');
const router = express.Router();
const { getAllPopularPhilosophers, getDetailPopularPhilosopher } = require('./controller');

router.get('/all', getAllPopularPhilosophers);
router.get('/:id', getDetailPopularPhilosopher);

module.exports = router;