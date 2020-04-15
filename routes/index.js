const router = require('express').Router();
const controller = require('../controllers');

router.post('/user', (req, res) => {
    controller.createUser(req, res);
});

router.get('/login', (req, res) => {
    controller.login(req, res);
});

module.exports = router;
