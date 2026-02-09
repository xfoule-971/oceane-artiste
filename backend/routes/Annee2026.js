const express = require('express');
const router = express.Router();
const pool = require('../db/db');

/**
 * @swagger
 * tags:
 *   - name: Année 2026
 *     description: Gestion des oeuvres de 2026
 */

/**
 * @swagger
 * /annee2026:
 *   get:
 *     summary: Récupérer tous les oeuvres
 *     tags: [Année 2026]
 *     responses:
 *       200:
 *         description: Liste des oeuvres
 *       500:
 *         description: Erreur serveur
 */
// GET /api/annee2026
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM annee_2026'
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * @swagger
 * /annee2026/{id}:
 *   get:
 *     summary: Récupérer une oeuvre par ID
 *     tags: [Année 2026]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Oeuvre trouvée
 *       404:
 *         description: Oeuvre non trouvé
 *       400:
 *         description: ID invalide
 */
// GET /api/annee_2026/:id
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM annee_2026 WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Oeuvre non trouvée' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;