/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let result = 0;
  let len = new Set(s).size;

  while (len) {
    for (let i = 0; i <= s.length - len; i++) {
      let target = s.slice(i, len + i);

      if (target.length === new Set(target).size) {
        result = target.length;
      }

      if (result) {
        return result;
      }
    }

    len--;
  }

  return result;
};
