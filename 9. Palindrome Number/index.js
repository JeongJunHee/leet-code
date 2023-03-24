/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let ntos = x.toString();
  let s = 0;
  let e = ntos.length - 1;

  while (s <= e) {
    if (ntos[s] !== ntos[e]) {
      return false;
    }

    s++;
    e--;
  }

  return true;
};
