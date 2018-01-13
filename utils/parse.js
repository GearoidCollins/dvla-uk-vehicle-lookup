const cheerio = require('cheerio');
const _camelCase = require('lodash.camelcase');

module.exports = function parse(body) {
  const $ = cheerio.load(body);

  return $('.certLabel')
    .toArray()
    .reduce(
      (carData, item) =>
        Object.assign(carData, {
          [_camelCase($(item)
            .text()
            .replace(/₂/g, ''))]: $(item)
            .next()
            .text()
            .trim(),
        }),
      {}
    );
};
