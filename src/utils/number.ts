export function randomNumber(coefficient = 100) {
  return Math.round(Math.random() * coefficient);
}

/**
 * 四舍五入，解决js中的toFixed不准确的问题
 * @param number
 * @param m
 */
export function toFixed(number: number, m = 0) {
  // if (typeof number !== "number") {
  //   throw new Error("number不是数字");
  // }
  let result: number | string =
    Math.round(Math.pow(10, m) * number) / Math.pow(10, m);
  result = String(result);
  if (result.indexOf(".") == -1) {
    if (m != 0) {
      result += ".";
      result += new Array(m + 1).join("0");
    }
  } else {
    const arr = result.split(".");
    if (arr[1].length < m) {
      arr[1] += new Array(m - arr[1].length + 1).join("0");
    }
    result = arr.join(".");
  }
  return result;
}
