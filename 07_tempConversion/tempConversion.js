const convertToCelsius = function (f) {
  let temp = (f - 32) * (5 / 9);
  if (temp % 1 != 0) {
    return Math.round(temp * 1e1) / 1e1;
  } else return temp;
};

const convertToFahrenheit = function (c) {
  let temp = c * (9 / 5) + 32;
  if (temp % 1 != 0) {
    return Math.round(temp * 1e1) / 1e1;
  } else return temp;
};

convertToCelsius(72);
convertToFahrenheit(100);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
