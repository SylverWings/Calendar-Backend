const { Router } = require('express');
const router = Router();
const eventController = require('../controllers/eventController');
const verifyToken = require('../middlewares/verifyToken');


router.get('/event', verifyToken, eventController.getAll)
router.post('/event', verifyToken, eventController.create)
router.put('/event/:id', verifyToken, eventController.update)
router.delete('/event/:id', verifyToken, eventController.delete)


module.exports = router