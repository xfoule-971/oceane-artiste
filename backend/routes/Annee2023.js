const express = require('express');
const router = express.Router();
const pool = require('../db/db');

/**
 * @swagger
 * tags:
 *   - name: Année 2023
 *     description: Gestion des oeuvres de 2023
 */

/**
 * @swagger
 * /annee2023:
 *   get:
 *     summary: Récupérer tous les oeuvres
 *     tags: [Année 2023]
 *     responses:
 *       200:
 *         description: Liste des oeuvres
 *       500:
 *         description: Erreur serveur
 */
// GET /api/annee2023
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT * FROM annee_2023'
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * @swagger
 * /annee2023/{id}:
 *   get:
 *     summary: Récupérer une oeuvre par ID
 *     tags: [Année 2023]
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
// GET /api/annee_2023/:id
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM annee_2023 WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Oeuvre non trouvée' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;