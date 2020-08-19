const userQuery = require('../query/user.query');


const add = async function(data) {
    let query = {
       firstName : data.firstName,
       lastName : data.lastName,
       mobileNumber : data.mobileNumber
    }
    // let user = await userQuery.find(query);
    // if(user.length>0) {
    //     return ({'msg':'user already exist'});
    // }
    let userDetails = await userQuery.create(query);
    if(userDetails) {
        return userDetails;
    }

}


const findById = async function(data) {
    let query = {
        _id : data.id
    }
    let userDetails = await userQuery.find(query);
    if(userDetails) {
        return userDetails;
    }

}

const update = async function(data) {
    console.log(data);
    let query = {
       firstName : data[0].firstName,
       lastName : data[0].lastName,
       mobileNumber : data[0].mobileNumber
    }
    let userDetails = await userQuery.update({_id:data[0]._id},query);
    if(userDetails) {
        return userDetails;
    }

}





module.exports = {
    add,
    findById,
    update
}