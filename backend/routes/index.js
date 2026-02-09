const express = require('express');
const router = express.Router();

router.use('/annee2023', require('./annee2023'));
router.use('/annee2024', require('./annee2024'));
router.use('/annee2025', require('./annee2025'));
router.use('/annee2026', require('./annee2026'));
router.use('/contact', require('./contact'));

module.exports = router;