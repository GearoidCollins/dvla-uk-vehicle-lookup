module.exports = function valid({ data }) {
  if (!data) {
    throw new Error('Invalid request data');
  }
  if (/no\svehicle/i.test(data)) {
    throw new Error('Invalid Vehicle registration');
  }
  if (/exceeded\sthe\slimit/i.test(data)) {
    throw new Error('Exceeded the request limit - reg lookups');
  }
  if (/restricted/i.test(data)) {
    throw new Error('Third-party request limit reached');
  }
  return data;
};
