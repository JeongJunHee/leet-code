/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let result;
  let arr = nums.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = arr.length - 1; k >= j + 1; k--) {
        if (
          !result ||
          Math.abs(arr[i] + arr[j] + arr[k] - target) <
            Math.abs(result - target)
        ) {
          result = arr[i] + arr[j] + arr[k];
        }
      }
    }
  }

  return result;
};
