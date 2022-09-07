# Scope (유효 범위)

## 1. 지역변수 와 전역변수

```js
let vscope = "global";
function fscope() {
  alert(vscope);
}
fscope();
```

코드를 실행하면 "global" 이 출력된다

여기에 코드를 추가해보자

```js
let vscope = "global";
function fscope() {
  let vscope = "local";
  alert("함수안 " + vscope);
}
fscope();
alert("함수밖 " + vscope);
```

이러면

```
"함수안 local"
"함수박 global"
```

이렇게 출력될 것이다

변수를 부르면 해당 변수는 가장 가까운 위치의 변수를 찾는다

function 안 alert 는 "local" 을 담은 변수가 가장 가깝기 때문에 해당 변수를 출력했다

하지만 function 밖 alert 는 "local" 가 아닌 "global" 을 담은 변수를 출력했는데

이유는 function 안 변수의 유효범위가 function 안까지이기 때문이다

그렇기에 함수밖에서 변수를 찾으면 function 내에의 변수는 아예 없는 것이기 때문에

function 밖에서 선언한 "global" 변수를 출력한다

function 밖에서 선언한 것을 `전역변수` 안에서 선언한 것은 `지역변수` 라고 한다

이렇게 전역변수, 지역변수에 따라 접근할 수 있는 범위가 달라진다

그럼

```js
let vscope = "global";
function fscope() {
  vscope = "local";
  alert("함수안" + vscope);
}
fscope();
alert("함수밖" + vscope);
```

이렇게 하면 어떻게 될까

```
"함수안 local"
"함수박 local"
```

이렇게 된다

function 안에서 변수 선언(const, let, var...)을 하지 않으면

vscope는 자연스럽게 이전에 선언한 변수를 찾아간다

그래서 전역변수 vscope 의 값을 local 로 덮어 씌어버린거다

---

될 수 있으면 전역변수는 사용을 지양하는게 좋다

하난 코드의 양이 많아지거나 다른 사람과의 작업 통합 하는 과정 등에 따라 변수의 중복이 거의 무조건 일어난다.

이때 전역변수로 해당 변수들을 controll 하고 있다면 뭔 ㅈㄹ 이 날지 모른다

함수의 핵심은 로직의 재활용이라는 점을 상기하자.

## 2. 유효범위의 효용

### 지역변수의 사용

```js
function a() {
  var i = 0;
}
for (var i = 0; i < 5; i++) {
  a();
  document.write(i);
}
```

실행결과

```
01234
```

### 전역변수의 사용

**본 예제는 무한반복을 발생시킨다**

```js
function a() {
  i = 0;
}
for (i = 0; i < 5; i++) {
  a();
  document.write(i);
}
```

## 3. 전역변수의 사용

불가피하게 전역변수를 사용해야 하는 경우는 하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리하는 방법을 사용한다

```js
let MYAPP = {};
MYAPP.calculator = {
  left: null,
  right: null,
};
MYAPP.coordinate = {
  left: null,
  right: null,
};

MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;
function sum() {
  return MYAPP.calculator.left + MYAPP.calculator.right;
}
document.write(sum());
```

이런식으로 할 수 있음

근데 나는 ㄹㅇ 전역함수를 1도 쓰기 싫다

그럼 익명함수를 쓸수 있음

```js
(function () {
  var MYAPP = {};
  MYAPP.calculator = {
    left: null,
    right: null,
  };
  MYAPP.coordinate = {
    left: null,
    right: null,
  };
  MYAPP.calculator.left = 10;
  MYAPP.calculator.right = 20;
  function sum() {
    return MYAPP.calculator.left + MYAPP.calculator.right;
  }
  document.write(sum());
})();
```

이러면 function 을 만들고 바로 실행한거라 지역변수가 됨

위와 같은 방법은 자바스크립트에서 로직을 모듈화하는 일반적인 방법임

## 4. 유효범위의 대상 (함수)

**자바스크립트의 지역변수는 함수에서만 유효하다.**

뭔소리냐면

```js
for (let i = 0; i < 1; i++) {
  let name = "coding everybody";
}
alert(name); // coding everybody
```

이럼 name 변수값을 그대로~ 출력함

완전 미친새끼임

java였음 존재하지 않는 변수라고 무조건 에러각이였음

이걸 알아야함

js 는 ㄹㅇ 함수에만 지역변수가 있는거임

    JavaScript에서는 함수의 { }  중괄호 안에서 선언된 것만 지역변수라는 것이고

    for문이나 if문에서 선언된 변수는 지역변수의 의미를 가지 않는다.

## 5. 정적 유효범위

자바스크립트는 함수가 선언된 시점에서의 유효범위를 갖는다.

이러한 유효범위의 방식을 정적 유효범위(static scoping), 혹은 렉시컬(lexical scoping)이라고 한다.

```js
var i = 5;

function a() {
  var i = 10;
  b();
}

function b() {
  document.write(i);
}

a();
```

실행결과는 5 임

function a 에서 function b를 실행한거지만 function b 가 선언된 시점인 전역변수 i 를 찾아가게 됨

---

해당 유효 범위에 대한 좀 더 자세한 이야기는

extra 파트의 var, let, const 를 찾아보자

[extra 2. var, let, const](https://github.com/lugia574/diary/blob/main/study/JavaScript/md/4.%20extra%20part/extra%202.%20var%2C%20let%2C%20const%20.md)
