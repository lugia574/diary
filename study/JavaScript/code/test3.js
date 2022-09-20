function example() {
  const fnc = function (num, num2) {
    return num + num2;
  };
  return fnc;
}

const f1 = example();

console.log("켜요요오옹", f1(3, 4));

const fnc = function () {
  console.log("하하하하하");
};
function example2(fn) {
  fn();
}

example2(fnc);
