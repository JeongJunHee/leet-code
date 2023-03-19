/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let isNegative = false;
  let index = 0;
  let result = Array.from(new Array(numRows), () => "");

  if (numRows === 1) {
    return s;
  }

  for (let i = 0; i < s.length; i++) {
    result[index] += s[i];

    isNegative ? index-- : index++;

    if (index === numRows - 1) {
      isNegative = true;
    } else if (index === 0) {
      isNegative = false;
    }
  }

  return result.join("");
};
