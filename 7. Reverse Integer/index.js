/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const result = parseInt(x.toString().split("").reverse().join(""));

  if (Math.abs(result) < 2 ** 31) {
    return x.toString()[0] === "-" ? `-${result}` : result;
  }

  return 0;
};
