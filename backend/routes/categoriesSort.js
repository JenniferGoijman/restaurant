const router = require('express').Router();
const CategorySortController = require('../controllers/CategorySortController.js');

router.get('/', CategorySortController.getAll);
router.post('/', CategorySortController.insert);
router.put('/:categorySort_id', CategorySortController.update);
router.delete('/:categorySort_id', CategorySortController.delete);

module.exports = router;