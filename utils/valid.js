module.exports = function valid({ data }) {
  if (!data) {
    return new Error('Invalid request data');
  }
  if (/no\svehicle/i.test(data)) {
    return new Error('Invalid Vehicle regristration');
  }
  if (/restricted/i.test(data)) {
    return new Error('Third-party request limit reached');
  }
  return data;
};
