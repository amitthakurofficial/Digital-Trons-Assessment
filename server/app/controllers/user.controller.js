const userService = require('../services/user.service');
const httpStatus = require('http-status');


const add = async function (req,res) {
    let userDetails = await userService.add(req.body);
    try {
        if (userDetails) {
            return res
                .status(httpStatus.OK)
                .send(userDetails)
        }
    }
    catch {
        return res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send(err.message)
    }
}


const findById = async function (req,res) {
    let userDetails = await userService.findById(req.params);
    try {
        if (userDetails) {
            return res
                .status(httpStatus.OK)
                .send(userDetails)
        }
    }
    catch {
        return res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send(err.message)
    }
}


const update = async function (req,res) {
    let userDetails = await userService.update(req.body);
    try {
        if (userDetails) {
            return res
                .status(httpStatus.OK)
                .send(userDetails)
        }
    }
    catch {
        return res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send(err.message)
    }
}

module.exports = {
    update,
    add,
    findById
}