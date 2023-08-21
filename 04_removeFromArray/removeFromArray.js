const removeFromArray = function (arr, ...args) {
  const newArr = arr.filter((element) => !args.includes(element));
  return newArr;
};
removeFromArray([1, 2, 3, 4, 5, 6], 2, 4);

// Do not edit below this line
module.exports = removeFromArray;
