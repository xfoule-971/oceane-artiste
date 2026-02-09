const express = require('express');
const router = express.Router();
const pool = require('../db/db');

// GET /api/annee2025
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM annee_2025'
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// GET /api/annee_2024/:id
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM annee_2024 WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Oeuvre non trouvée' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;