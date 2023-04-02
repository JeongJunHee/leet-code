/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let target = strs[0];
  let prefix = "";

  for (let i = 0; i < target.length; i++) {
    if (strs.every((source) => source?.[i] === target[i])) {
      prefix += target[i];
    } else {
      break;
    }
  }

  return prefix;
};
