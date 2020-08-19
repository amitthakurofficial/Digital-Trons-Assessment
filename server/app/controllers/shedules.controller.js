const sheduleService = require('../services/shedules.service');
const httpStatus = require('http-status');


const add = async function (req,res) {
    let sheduleDetails = await sheduleService.add(req.body);
    try {
        if (sheduleDetails) {
            return res
                .status(httpStatus.OK)
                .send(sheduleDetails)
        }
    }
    catch {
        return res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send(err.message)
    }
}

const update = async function (req,res) {
    let sheduleDetails = await sheduleService.update(req.body);
    try {
        if (sheduleDetails) {
            return res
                .status(httpStatus.OK)
                .send(sheduleDetails)
        }
    }
    catch {
        return res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send(err.message)
    }
}


const findById = async function (req,res) {
    let sheduleDetails = await sheduleService.findById(req.body);
    try {
        if (sheduleDetails) {
            return res
                .status(httpStatus.OK)
                .send(sheduleDetails)
        }
    }
    catch {
        return res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send(err.message)
    }
}


const find = async function (req,res) {
    let sheduleDetails = await sheduleService.find(req.body);
    try {
        if (sheduleDetails) {
            return res
                .status(httpStatus.OK)
                .send(sheduleDetails)
        }
    }
    catch {
        return res
            .status(httpStatus.INTERNAL_SERVER_ERROR)
            .send(err.message)
    }
}

module.exports = {
    find,
    add,
    findById,
    update
}