# closure

클로저(closure)는 내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것을 가르킨다.

클로저는 자바스크립트를 이용한 고난이도의 테크닉을 구사하는데 필수적인 개념으로 활용된다.

## 1. 외부함수와 내부함수

```js
function outter() {
  var title = "coding everybody";
  function inner() {
    console.log(title);
  }
  inner();
}
outter();
```

이럴때 내부함수인 inner 에서 title은 값은 외부 함수인 outter 안에 있는

title 변수(외부함수 지역변수) 값을 찾아간다

이를 클로저 라고 함

## 2. 클로저란?

흥미로운것은 외부함수의 실행이 끝나서 외부함수가 소멸된 이후에도 내부함수가 외부함수의 변수에 접근 할 수 있다는 점임

```js
function outter() {
  var title = "coding everybody";
  return function () {
    alert(title);
  };
}
inner = outter();
inner();
```

함수 outter 실행 리턴 값을 inner 라는 변수에 담음

그니까 inner 는

```js
 function () {
    alert(title);
  };
```

이거라는 소리임

이때 title 값은 outter 함수의 지역변수인 title 값을 가져옴

이는 이전에 배웠던 함수가 위치하는 시점에서 값을 찾아가는 원리와 같은듯?

    클로저란 내부함수가 외부함수의 지역변수에 접근 할 수 있고,

    외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않는 특성을 의미

라고 함

## 3. private variable

이를 이용해 private 변수를 쓸 수 있음

```js
function factory_movie(title) {
  return {
    get_title: function () {
      return title;
    },
    set_title: function (_title) {
      title = _title;
    },
  };
}
ghost = factory_movie("Ghost in the shell");
matrix = factory_movie("Matrix");

console.log(ghost.get_title());
console.log(matrix.get_title());
```

이렇게 할 시 ghost 와 matrix 는 각각 다른 title 값을 가진 objeat 를 가짐

```js
ghost.set_title("공각기동대");
matrix.set_title("매트릭스");
```

만약 각각의 title 값을 바꾸기 위해서는 `set_title` 을 이용 하는 것 외에는 방법이 없음

```js
console.log(ghost.get_title()); // 공각기동대
console.log(matrix.get_title()); // 매트릭스
```

## 4. 클로저의 응용

```js
var arr = [];
for (var i = 0; i < 5; i++) {
  arr[i] = function () {
    return i;
  };
}
for (var index in arr) {
  console.log(arr[index]());
}
```

이렇게 하면 해당 값은

```
5
5
5
5
5
```

이렇게 됨

이를 해결하려면

```js
var arr = [];
for (var i = 0; i < 5; i++) {
  arr[i] = (function (id) {
    return function () {
      return id;
    };
  })(i);
}
for (var index in arr) {
  console.log(arr[index]());
}
```

이렇게 외부변수를 이용할 수 있게 해야지 가능함

근데

```js
(function (매개변수) {
  // 어쩌구 저쩌구
})(파라미터);
```

이건 첨 보네;
