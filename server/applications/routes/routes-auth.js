const router = require('express').Router();
const passport = require('passport');


// Autenticación con Discord
router.get('/discord', passport.authenticate('discord'));

// Callback de Discord
router.get('/discord/redirect', passport.authenticate('discord'), (req, res) => {
  res.redirect('http://localhost:5173/example');
});

// Autenticación con GitHub
router.get('/github', passport.authenticate('github'));

// Callback de GitHub
router.get('/github/redirect', passport.authenticate('github'), (req, res) => {
  res.redirect('http://localhost:5173/example');
});

// Autenticación con Google
router.get('/google', passport.authenticate('google'));

// Callback de Google
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('http://localhost:5173/example');
});

module.exports = router;