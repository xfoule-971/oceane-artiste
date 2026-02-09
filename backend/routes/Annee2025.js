const express = require('express');
const router = express.Router();
const pool = require('../db/db');

/**
 * @swagger
 * tags:
 *   - name: Année 2025
 *     description: Gestion des oeuvres de 2025
 */

/**
 * @swagger
 * /annee2025:
 *   get:
 *     summary: Récupérer tous les oeuvres
 *     tags: [Année 2025]
 *     responses:
 *       200:
 *         description: Liste des oeuvres
 *       500:
 *         description: Erreur serveur
 */
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

/**
 * @swagger
 * /annee2025/{id}:
 *   get:
 *     summary: Récupérer une oeuvre par ID
 *     tags: [Année 2025]
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
// GET /api/annee_2025:id
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM annee_2025 WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Oeuvre non trouvée' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;