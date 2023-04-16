/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = new Set();
  const keys = {};
  const arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (!keys[nums[i]] || keys[nums[i]] < 3) {
      arr.push(nums[i]);
      keys[nums[i]] = keys[nums[i]] ? keys[nums[i]] + 1 : 1;
    }
  }

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = arr.length - 1; k >= j + 1; k--) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          result.add(`${arr[i]},${arr[j]},${arr[k]}`);
          break;
        }

        if (Math.abs(arr[i] + arr[j]) > Math.abs(arr[k])) {
          break;
        }
      }
    }
  }

  return Array.from(result).map((v) => v.split(","));
};
