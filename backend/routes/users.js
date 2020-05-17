const router = require('express').Router();
const UserController = require('../controllers/UserController.js');
const { authentication } = require('../middleware/authentication')

router.get('/', UserController.getAll);
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/logout', authentication, UserController.logout);
router.put('/:_id', UserController.update);
router.delete('/:_id', authentication, UserController.delete);

module.exports = router;