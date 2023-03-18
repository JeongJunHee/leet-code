/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let signed = true;
  let index = 0;
  let result = Array.from(new Array(numRows), () => "");

  if (numRows === 1) {
    return s;
  }

  for (let i = 0; i < s.length; i++) {
    result[index] += s[i];

    signed ? index++ : index--;

    if (index === numRows - 1) {
      signed = false;
    } else if (index === 0) {
      signed = true;
    }
  }

  return result.join("");
};
