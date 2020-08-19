const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sheduleRoute = require('../routes/shedules.route')
const userRoute = require('../routes/user.route')
const router = express.Router();

router.use(bodyParser.urlencoded({
    extended: true
}));

router.use(bodyParser.json());

router.use(function(error, req, res, next) {
    if (error) {
        res.send('Invalid Json');
    } else {
        next()
    }
})


router.use('/shedule', sheduleRoute);
router.use('/user' , userRoute);

module.exports = router;