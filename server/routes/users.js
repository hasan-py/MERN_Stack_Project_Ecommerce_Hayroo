const express = require('express');
const router = express.Router();
const usersController = require('../controller/users');

router.get('/all-user', usersController.getAllUser);
router.post('/signle-user', usersController.getSingleUser);

router.post('/add-user', usersController.postAddUser);
router.post('/edit-user', usersController.postEditUser);
router.post('/delete-user', usersController.getDeleteUser);

module.exports = router;