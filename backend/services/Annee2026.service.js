const pool = require('../db/db'); // fichier db.js qui exporte le pool mysql2/promise

// Récupérer toutes les oeuvres de l'année 2026
const getAllArtisans = async () => {
    try {
        const [rows] = await pool.query('SELECT * FROM annee_2026');
        return rows;
    } catch (err) {
        throw new Error('Erreur lors de la récupération des oeuvres : ' + err.message);
    }
};

module.exports = {
    getAllArtisans,
};