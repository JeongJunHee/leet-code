/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const str = s.match(/(\s{0,})([-|+]?)(\d{1,}\.?\d{0,})(?=[A-Za-z])?/)?.[0];

  if (s.startsWith(str)) {
    const result = parseInt(str.replaceAll(/\s/g, ""));

    if (-(2 ** 31) > result) {
      return str.replace(/\d{1,}/, 2 ** 31);
    }

    if (2 ** 31 - 1 < result) {
      return str.replace(/\d{1,}/, 2 ** 31 - 1);
    }

    return Math.floor(parseInt(str.replaceAll(/\s/g, "")));
  }

  return 0;
};
