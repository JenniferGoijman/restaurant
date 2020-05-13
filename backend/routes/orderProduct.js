const router = require('express').Router();
const OrderProductController = require('../controllers/OrderProductController.js');

router.get('/', OrderProductController.getAll);
router.post('/', OrderProductController.insert);
router.put('/:order_product_id', OrderProductController.update);
router.delete('/:order_product_id', OrderProductController.delete);

module.exports = router;