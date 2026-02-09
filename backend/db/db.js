require('dotenv').config();

const mysql = require('mysql2/promise');

// Crée un pool de connexions
const pool = mysql.createPool({
  host: process.env.DB_HOST,      // localhost
  user: process.env.DB_USER,      // artiste971
  password: process.env.DB_PASSWORD, // mdp
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306
});

// Test de connexion
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Base de données connectée avec succès !");
    connection.release();
  } catch (err) {
    console.error("Erreur de connexion à la base :", err.message);
    process.exit(1);
  }
})();

module.exports = pool;