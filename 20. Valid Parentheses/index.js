/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stacks = [];
  const arr = s.split("");
  const keys = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  while (arr.length) {
    const target = arr.shift();

    if (["(", "{", "["].includes(target)) {
      stacks.push(target);
    } else {
      const v = stacks?.pop();

      if (keys[v] !== target) {
        return false;
      }
    }
  }

  return !stacks.length;
};
