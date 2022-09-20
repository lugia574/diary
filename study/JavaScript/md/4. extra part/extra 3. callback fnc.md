# callback function

js 는 재밋게도 함수를 객체에 담을 수 있음

```js
const fnc = function (num, num2) {
  return num + num2;
};

console.log(fnc(3, 4));
```

클래스로 이루어진 자바는 인스턴스화 해서 써야함

```java
public class Sample {
    int sum(int a, int b) {  // a, b 는 매개변수
        return a+b;
    }

    public static void main(String[] args) {
        Sample sample = new Sample();
        int c = sample.sum(3, 4);  // 3, 4는 인수

        System.out.println(c);  // 7 출력
    }
}
```

---

이렇게 객체에 함수를 담을 수 있는 걸 이용해서

함수를 담은 객체를 리턴으로 출력할 수 있음

```js
function example() {
  const fnc = function (num, num2) {
    return num + num2;
  };
  return fnc;
}

const f1 = example();

console.log(f1(3, 4));
```

이런식으로 가능함

```js
const fnc = function () {
  console.log("example");
};
function example2(fn) {
  fn();
}

example2(fnc);
```

이처럼

    다른 함수의 인자로써 넘겨진 후 특정 이벤트에 의해 호출되는 함수

를 콜백 함수라고 그럼

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
