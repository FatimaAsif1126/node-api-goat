function check(n) {
  var value = parseInt(n, 10);
  if (value === NaN) {
    return "not a number";
  }
  return "ok";
}
module.exports = check;