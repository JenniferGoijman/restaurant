const router = require('express').Router();
const UserController = require('../controllers/UserController.js');
const { authentication } = require('../middleware/authentication')

router.get('/', UserController.getAll);
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/logout', authentication, UserController.logout);
router.put('/', authentication, UserController.update);
router.delete('/', authentication, UserController.delete);

module.exports = router;