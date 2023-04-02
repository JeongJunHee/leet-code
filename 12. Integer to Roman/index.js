/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const keys = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let roman = "";

  for (let i = 0; i < values.length; i++) {
    const quotient = parseInt(num / values[i]);

    if (quotient) {
      roman += keys[i].repeat(quotient);
      num %= values[i];
    }
  }

  return roman;
};
