/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];

  const result = [];

  const keys = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const dfs = (index, path) => {
    if (path.length === digits.length) {
      result.push(path);
      return;
    }

    for (let i = index; i < digits.length; i++) {
      for (let j = 0; j < keys[digits[i]].length; j++) {
        dfs(i + 1, path + keys[digits[i]][j]);
      }
    }
  };

  dfs(0, "");

  return result;
};
