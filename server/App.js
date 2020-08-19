const express = require('express');
const app = express();
const mongoDb = require('./config/databasecon')
const appRoutes = require('./app/appRoute/app.route')
const port = 3000;


const start = async function() {
    try {
        let startMongoDb = await mongoDb.connect();
        let serverStart = await startServer();
        return;
    } catch (err) {
        console.log('Try it error', err);
    }
}
const startServer = async function() {
    console.log('Server is running on port:', port);
    return await app.listen(port);
}

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api',appRoutes);



module.exports = {
    start: start
};