const router = require('express').Router();
const CategoryController = require('../controllers/CategoryController.js');

router.get('/', CategoryController.getAll);
router.post('/', CategoryController.insert);
router.put('/:category_id', CategoryController.update);
router.delete('/:category_id', CategoryController.delete);

module.exports = router;