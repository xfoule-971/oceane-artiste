const express = require('express');
const nodemailer = require('nodemailer');
const pool = require('../db/db');
const router = express.Router();

// Transporteur Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { nom, prénom, email, demande,message } = req.body;

    if (!prénom || !nom || !email || !demande || !message) {
      return res.status(400).json({ success: false, error: 'Tous les champs sont obligatoires' });
    }

    // Configurer l'email
    const mailOptions = {
        from: '"Formulaire de contact" <${process.env.EMAIL_USER}>',
        to: 'oceane.foule971@gmail.com', // Le destinataire
        replyTo: email,  // reponse directe
        subject: 'Nouveau message : ${demande}',
        text: "Nouveau message reçu via le formulaire de contact",
    };

    // Envoyer le mail
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Message envoyé avec succès' });
  } catch (err) {
    console.error('Erreur envoi mail:', err);
    res.status(500).json({ success: false, error: 'Erreur lors de l’envoi du message' });
  }
});

module.exports = router;
