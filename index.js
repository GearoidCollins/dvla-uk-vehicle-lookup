const axios = require('axios');

const config = require('./config');
const parse = require('./utils/parse');
const valid = require('./utils/valid');

module.exports = function vehicleDetails(reg) {
  const regno = reg.replace(/\s/g, '');

  if (!config.validation.reg.test(regno)) {
    return Promise.reject(new Error('Invalid vehicle registration'));
  }

  return axios
    .get(config.API, {
      params: { regno },
    })
    .then(valid)
    .then(parse);
};
