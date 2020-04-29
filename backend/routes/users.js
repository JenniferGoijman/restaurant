const router = require('express').Router();
const UserController = require('../controllers/UserController.js');
const { authentication } = require('../middleware/authentication')

router.post('/register', UserController.register);
router.post('/login', UserController.login);

module.exports = router;