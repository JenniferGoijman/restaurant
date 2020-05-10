const router = require('express').Router();
const ProductController = require('../controllers/ProductController.js');

router.get('/', ProductController.getAll);
router.post('/', ProductController.insert);
router.put('/:product_id', ProductController.update);
router.delete('/:product_id', ProductController.delete);

module.exports = router;