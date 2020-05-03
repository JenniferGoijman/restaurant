const router = require('express').Router();
const CategoryController = require('../controllers/CategoryController.js');

router.get('/', CategoryController.getAll);
router.post('/', CategoryController.insert);

module.exports = router;