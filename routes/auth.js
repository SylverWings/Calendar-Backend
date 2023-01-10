/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/
const { Router } = require('express');
const router = Router();
const authController = require("../controllers/authController");
const verifyToken = require('../middlewares/verifyToken');

router.post('/register', authController.register);
router.post('/', authController.login);
router.get('/renew', verifyToken, authController.renew);

module.exports = router