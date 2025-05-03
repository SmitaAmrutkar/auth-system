const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);

// Example of a protected route
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ message: 'This is a protected profile route', userId: req.user.id });
});

module.exports = router;
