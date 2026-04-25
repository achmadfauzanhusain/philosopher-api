const express = require('express');
const router = express.Router();
const { getAllNichePhilosophers, getDetailNichePhilosopher } = require('./controller');

router.get('/all', getAllNichePhilosophers);
router.get('/:id', getDetailNichePhilosopher);

module.exports = router;