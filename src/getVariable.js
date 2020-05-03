const getVariable = (source) => {
  const [, variable] = source.match(/(_x\d*)/);
  return variable;
};

module.exports = { getVariable };
