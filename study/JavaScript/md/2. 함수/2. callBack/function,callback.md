# 값으로서의 함수와 콜백

## 1. 함수의 용도 1

JavaScript에서는 함수도 객체다.

거의 모든 언어가 함수를 가지고 있는데

JavaScript의 함수가 다른 언어의 함수와 다른 점은 함수가 값이 될 수 있다는 점이다.

```js
a = {
  b: function () {},
};
```

함수는 객체의 값으로 포함될 수 있다

이렇게 객체의 속성 값으로 담겨진 함수를 메소드(method)라고 부른다

함수는 값이기 때문에 다른 함수의 인자로 전달 될수도 있다

```js
function cal(func, num) {
  return func(num);
}
function increase(num) {
  return num + 1;
}
function decrease(num) {
  return num - 1;
}
alert(cal(increase, 1));
alert(cal(decrease, 1));
```

## 2. 함수의 용도 2

함수는 함수의 리턴 값으로도 사용할 수 있음

```js
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
alert(cal("plus")(2, 1));
alert(cal("minus")(2, 1));
```

이러면 cal 함수에 plus 밸류, minus 밸류의 함수가 실행 되는거임

당연히 배열값으로도 활용 할 수 있음

```js
var process = [
  function (input) {
    return input + 10;
  },
  function (input) {
    return input * input;
  },
  function (input) {
    return input / 2;
  },
];
var input = 1;
for (var i = 0; i < process.length; i++) {
  input = process[i](input);
}
alert(input);
```

for 문으로 process를 돌리니

```
1 + 10 // 11
11 * 11 // 121
121 / 2 // 60.5
```

이렇게 됨

## 3. 콜백이란

    어떠한 함수가 수신하는 인자가 함수인 경우

    그니까 함수에 파라미터로 들어가는 함수

js 는 재밋게도 함수를 객체에 담을 수 있음

```js
const fnc = function (num, num2) {
  return num + num2;
};

console.log(fnc(3, 4));
```

이렇게 객체에 함수를 담을 수 있는 걸 이용해서

함수를 담은 객체를 리턴으로 출력할 수 있음

```js
// 1
function example() {
  const fnc = function (num, num2) {
    return num + num2;
  };
  return fnc;
}

const f1 = example();

console.log(f1(3, 4));

// 2
const fnc2 = function () {
  console.log("example");
};
function example2(fn) {
  fn2();
}

example2(fnc2);
```

이처럼 용도는 순차적으로 실행하고 싶을때 씀

[Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 를 예로 들어보자

filter() 는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.

    arr.filter(callback(element[, index[, array]])[, thisArg])

여기서 `callback` 는

각 요소를 시험할 함수. true를 반환하면 요소를 유지하고, false를 반환하면 버림.

매개 변수 element(처리할 현재 요소)는 필수고 index, array 는 옵션

이를 이용하면

```js
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const callbackFnc = function (element) {
  if (element.length > 6) {
    return true;
  }
};

const result = words.filter(callbackFnc);
const result2 = words.filter((word) => word.length > 6); // 짧게 하면 이렇게 가능함

console.log(result);
console.log(result2);
```

eventListener, setTimeout 함수도 콜백함수임

```js
addEventListener("click", function () {
  // 클릭을 누르면 이 func 을 실행해주세연
});

setTimeout(function () {
  // 1000s/m 가 지나면 이 func 을 실행해 주세연~
}, 1000);
```

```js
var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(numbers.sort()); // [1, 10, 2, 20, 3, 4, 5, 6, 7, 8, 9]
```

해당 배열을 [sort](https://opentutorials.org/course/50/109) 한다고 치자

그럼 희한하게 정렬이 된다

이유는 암시적으로 원소를 문자로 형변환 하기 때문에 10이 1뒤에 온다.

그니까 1 나오고 1있는 10 나오고 그담에 2 나오고 2 있는 20 나오고 이러거라는 뜻

이것을 고치기 위해서는 옵션을 추가해야한다

```js
function sortNumber(a, b) {
  // 비교 대상인 a와 b가 인자로 전달된다.
  //alert('a :'+a+', b:'+b);
  // a에서 b를 뺀 결과가 음수면 a가 b보다 작고, 0이면 같다.
  // sort메소드는 return 값이 음수,양수,0인지에 따라서 순서를 정한다.
  return a - b;
}
```

이것을 적용 하면 이렇게 된다.

```js
function sortNumber(a, b) {
  // 위의 예제와 비교해서 a와 b의 순서를 바꾸면 정렬순서가 반대가 된다.
  return a - b;
}
var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
alert(numbers.sort(sortNumber)); // array, [1,2,3,4,5,6,7,8,9,10,20]
```

값으로 사용될 수 있는 특성을 이용하면 함수의 인자로 함수로 전달할 수 있다.

값으로 전달된 함수는 호출될 수 있기 때문에 이를 이용하면 함수의 동작을 완전히 바꿀 수 있다.

인자로 전달된 함수 sortNumber의 구현에 따라서 sort의 동작방법이 완전히 바뀌게 된다.

## 4. 비동기 처리

콜백은 비동기처리에서도 유용하게 사용된다.

시간이 오래걸리는 작업이 있을 때 이 작업이 완료된 후에 처리해야 할 일을 콜백으로 지정하면 해당 작업이 끝났을 때 미리 등록한 작업을 실행하도록 할 수 있다.

---

## 5. 심화

콜백함수의 단점은

길어지면 존나 난해해짐

가령 DB에서 값을 가져올때

```js
db.collection("post"),
  findOne(A, function () {
    db.collection("post"),
      findOne(B, function () {
        db.collection("post"),
          findOne(C, function () {
            // ~~
          });
      });
  });
```

이같이 DB에서 A를 뽑고 B를 뽑고~ C를 뽑고~

이를 `콜백 지옥`이라고 한다

존나 보기 싫고 당사자에 알아먹어도 다른사람은 뭐가 어떻게 된건지 알아 먹기 힘들다

이런 방식은 지양하는 것이 옳다.

이렇게 하지말고 걍 하나씩 하던가

`promise(then)` 을 이용하는 방법도 있음

아님 `async, await` 를 써도 되고

자세한 내용은 [여기서 보도록 하자](https://github.com/lugia574/diary/blob/main/study/JavaScript/md/4.%20extra%20part/extra%203.%20JavaScript%20Promise.md#2-promise)
