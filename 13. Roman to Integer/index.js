/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbols = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  const roman = s.split("");

  let result = 0;
  let symbol = "";

  while (roman.length) {
    symbol = roman.shift();

    if ("CXI".includes(symbol) && symbols[`${symbol}${roman?.[0]}`]) {
      symbol += roman.shift() || "";
    }

    result += symbols[symbol];

    symbol = "";
  }

  return result;
};
