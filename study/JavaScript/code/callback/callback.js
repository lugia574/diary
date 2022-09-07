function cal(mode) {
  var funcs = {
    plus: function (left, right) {
      return left + right;
    },
    minus: function (left, right) {
      return left - right;
    },
  };
  return funcs[mode];
}
console.log(cal("plus")(2, 1));
console.log(cal("minus")(2, 1));

function sortNumber(a, b) {
  // 위의 예제와 비교해서 a와 b의 순서를 바꾸면 정렬순서가 반대가 된다.
  return b - a;
}
var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
alert(numbers.sort(sortNumber)); // array, [20,10,9,8,7,6,5,4,3,2,1]

var arrClosure = [];
for (var i = 0; i < 5; i++) {
  arrClosure[i] = (function (id) {
    return function () {
      return id;
    };
  })(i);
}
for (var index in arrClosure) {
  console.log(arrClosure[index]());
}
