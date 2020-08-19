const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/add',userController.add);
router.get('/get/:id' , userController.findById);
router.post('/update',userController.update);


module.exports = router;