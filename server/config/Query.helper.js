const _ = require('lodash');

const recordExist = function (record, schemaName) {
  if (!record || _.isEmpty(record)) {
    throw new Error('No Record found for: ' + schemaName);
  }
  return record;
}

module.exports = {
  recordExist: recordExist
}
