module.exports = function valid({ data }) {
  if (!data) {
    throw new Error('Invalid request data');
  }
  if (/no\svehicle/i.test(data)) {
    throw new Error('Invalid Vehicle regristration');
  }
  if (/restricted/i.test(data)) {
    throw new Error('Third-party request limit reached');
  }
  return data;
};
