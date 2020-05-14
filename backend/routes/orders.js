const router = require('express').Router();
const OrderController = require('../controllers/OrderController.js');

router.get('/', OrderController.getAll);
router.post('/', OrderController.insert);
router.put('/:order_id', OrderController.update);
router.delete('/order_id', OrderController.delete);

module.exports = router;