/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const result = new Set();
  const keys = {};
  const arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (!keys[nums[i]] || keys[nums[i]] < 4) {
      arr.push(nums[i]);
      keys[nums[i]] = keys[nums[i]] ? keys[nums[i]] + 1 : 1;
    }
  }

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 3; i++) {
    for (let j = i + 1; j < arr.length - 2; j++) {
      for (let k = j + 1; k < arr.length - 1; k++) {
        for (let l = arr.length - 1; l >= k + 1; l--) {
          if (arr[i] + arr[j] + arr[k] + arr[l] === target) {
            result.add(`${arr[i]},${arr[j]},${arr[k]},${arr[l]}`);
            break;
          }
        }
      }
    }
  }

  return Array.from(result).map((v) => v.split(","));
};
