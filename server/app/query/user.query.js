const user = require('../models/user.model')
const QueryHelper = require('../../config/Query.helper')


const create = function(data) {
    let userDetails = user.create(data);
    if(userDetails) {
        return userDetails;
    }
    else {
        return _.partial(QueryHelper.recordExist, _, 'user');
    }
}

const find = function(data) {
    let userDetails = user.find(data);
    if(userDetails) {
        return userDetails;
    }
    else {
        return _.partial(QueryHelper.recordExist, _, 'user');
    }

}

const update = function(_id , data) {
    let userDetails = user.findByIdAndUpdate(_id ,data, {new:true});
    if(userDetails) {
        return userDetails;
    }
    else {
        return _.partial(QueryHelper.recordExist, _, 'user');
    }

}


module.exports = {
    create,
    find,
    update
}