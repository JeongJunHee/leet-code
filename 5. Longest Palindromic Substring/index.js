/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let len = s.length;

  while (len) {
    for (let i = 0; i <= s.length - len; i++) {
      let target = s.slice(i, len + i);
      let matched = 0;
      let start = 0;
      let end = len - 1;

      while (start <= end && target[start] === target[end]) {
        start++;
        end--;
        matched++;
      }

      if (Math.ceil(len / 2) === matched) {
        return target;
      }
    }

    len--;
  }
};
