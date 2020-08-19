const sheduleQuery = require('../query/shedules.query');


const add = async function(data) {
    let query = {
        time : data.time
    }
    let shedule = await sheduleQuery.find(query);
    if(shedule.length>0) {
        return ({'msg':'slot already exist'});
    }
    let sheduleDetails = await sheduleQuery.create(query);
    if(sheduleDetails) {
        return sheduleDetails;
    }

}

const update = async function(data) {
    let query = {
        _id : data._id,
        // userId : userId._id
    }
    let shedule = await sheduleQuery.find(query);
    if(shedule.length>0) {
        query = {
            userId : data.userId
        }
    let sheduleDetails = await sheduleQuery.update({_id: data._id},query);
    if(sheduleDetails) {
        return sheduleDetails;
    }
}

}


const findById = async function(data) {
    let query = {
        _id : data.id
    }
    let sheduleDetails = await sheduleQuery.find(query);
    if(sheduleDetails) {
        return sheduleDetails;
    }

}

const find = async function(data) {
    let query = {
       
    }
    let sheduleDetails = await sheduleQuery.find(query);
    if(sheduleDetails) {
        return sheduleDetails;
    }

}






module.exports = {
    add,
    findById,
    find,
    update
}