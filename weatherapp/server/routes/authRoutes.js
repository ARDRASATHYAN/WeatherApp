const express = require('express');
const AuthService = require('../services/authService');

const router = express.Router();

const authService = new AuthService();

// POST /signup
router.post('/signup', async (req, res) => {
  try {
    const { username, email,phone,password } = req.body;
    console.log('hehe',req.body);
    console.log('haha',username);
    const user = await authService.signup(username, email,phone, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// POST /login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

module.exports = router;