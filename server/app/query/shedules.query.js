const shedule = require('../models/shedules.model')
const QueryHelper = require('../../config/Query.helper')


const create = function(data) {
    let sheduleDetails = shedule.create(data);
    if(sheduleDetails) {
        return sheduleDetails;
    }
    else {
        return _.partial(QueryHelper.recordExist, _, 'shedule');
    }
}

const find = function(data) {
    let sheduleDetails = shedule.find(data);
    if(sheduleDetails) {
        return sheduleDetails;
    }
    else {
        return _.partial(QueryHelper.recordExist, _, 'shedule');
    }

}

const update = function(_id ,data) {
    let sheduleDetails = shedule.findByIdAndUpdate(_id ,data);
    if(sheduleDetails) {
        return sheduleDetails;
    }
    else {
        return _.partial(QueryHelper.recordExist, _, 'shedule');
    }

}


module.exports = {
    create,
    find,
    update
}