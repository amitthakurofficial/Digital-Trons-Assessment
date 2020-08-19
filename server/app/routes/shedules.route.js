const express = require('express');
const router = express.Router();
const sheduleController = require('../controllers/shedules.controller');

router.post('/add',sheduleController.add);
router.get('/get' , sheduleController.find);
router.post('/update',sheduleController.update);


module.exports = router;