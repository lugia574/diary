o1 = { val1: 1, val2: 2, val3: 3 };
o2 = { v1: 10, v2: 50, v3: 100, v4: 25 };
function sum() {
  console.log(arguments[0]);

  var _sum = 0;
  for (key in arguments[0]) {
    console.log(arguments[0][key]);
    _sum += arguments[0][key];
  }
  return _sum;
}
console.log("o1 실행", sum(o1));
console.log("o2 실행", sum(o2));
