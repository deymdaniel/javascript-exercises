const sumAll = function (first, second) {
  if (
    first < 0 ||
    second < 0 ||
    Number(first) !== first ||
    Number(second) !== second
  ) {
    return "ERROR";
  } else if (first > second) {
    return ((first - second + 1) * (second + first)) / 2;
  } else if (second > first) {
    return ((second - first + 1) * (first + second)) / 2;
  }
};
sumAll(5, 1);

// Do not edit below this line
module.exports = sumAll;
