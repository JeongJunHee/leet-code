/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let result = 0;
  let left = 0;
  let right = height.length - 1;

  while (left <= right) {
    let width = right - left;

    if (height[left] <= height[right]) {
      result = Math.max(result, width * height[left]);
      left++;
    } else {
      result = Math.max(result, width * height[right]);
      right--;
    }
  }

  return result;
};
