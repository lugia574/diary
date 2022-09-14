# function call

## 1. apply 소개

함수를 호출하는 가장 기본적인 방법은 이거다

```js
function basic() {
  // 어쩌구 저쩌구
}

basic();
```

js 는 함수를 특별한 방법으로 호출하는 것을 제공하는데

앞서 말했듯 함수는 객체라고 했다.

위의 코드에서 함수 basic Function이라는 객체의 인스턴스다.

따라서 basic 객체 Function이 가지고 있는 메소드들을 상속하고 있다.

지금 이야기하려는 메소드는 Function.apply과 Function.call이다.

이 메소드들을 이용해서 함수를 호출해보자.

```js
function fncSum(arg1, arg2) {
  return arg1 + arg2;
}
alert(fncSum.apply(null, [1, 2])); // 3
```

마찬가지로 fncSum 역시 function 객체의 인스턴스이다.

그렇기에 apply 메소드를 호출 할 수 있다

apply 메소드는 두개의 인자를 가질 수 있는데, 첫번째 인자는 함수(sum)가 실행될 맥락이다.

맥락의 의미는 다음 예제를 통해서 살펴보자.

두번째 인자는 배열인데, 이 배열의 담겨있는 원소가 함수(sum)의 인자로 순차적으로 대입된다.

Function.call은 사용법이 거의 비슷하다 여기서는 언급하지 않는다.

## 2. apply 사용

```js
o1 = { val1: 1, val2: 2, val3: 3 };
o2 = { v1: 10, v2: 50, v3: 100, v4: 25 };
function sum() {
  var _sum = 0;
  for (name in this) {
    _sum += this[name];
  }
  return _sum;
}
alert(sum.apply(o1)); // 6
alert(sum.apply(o2)); // 185
```

존나 난해하게 말하네 치워 ㅅㅂ

<details>
<summary>번외</summary>
<div markdown="1">

이전에 배운 arguments를 이용해서 위 코드를 구현 하면

```js
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
```

이렇게 됨

이걸 하면서 느낀게 내가 object 를 다루는데 굉장히 허접하다라는 걸 느낌

</div>
</details>

---

개같아서 코딩애플 찾아서 보고

[js 객체지향 프로그래밍 객체와 함수](https://opentutorials.org/module/4047/24628) 에서 찾아봄

## call, apply, bind

    함수 호출 방식과 관계없이 this를 지정할 수 있음

[출처: 자바스크립트 중급 강좌 #13 call, apply, bind](https://www.youtube.com/watch?v=KfuyXQLFNW4)

### call

    call 메소드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있음

```js
const mike = {
  name: "Mike",
};

const tom = {
  name: "Tom",
};

function showThisName() {
  console.log(this.name);
}
```

```js
showThisNam.call(mike); // Mike
```

이를 응용하면

```js
function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(mike, 2022, "아기");

console.log(mike); // {name: 'Mike', birthYear: 2022, occupation: '아기'}
```

이렇게 됨

```js
var kim = { name: "kim", first: 10, second: 20 };
var lee = { name: "lee", first: 10, second: 10 };
function sum(prefix) {
  return prefix + (this.first + this.second);
}
// sum();
console.log("sum.call(kim)", sum.call(kim, "=> "));
console.log("lee.call(kim)", sum.call(lee, ": "));
```

이렇게도 가능

### apply

    함수 매개변수를 처리하는 방법을 제외하면 call 과 완전히 같음

    call 은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만,

    apply는 매개변수를 `배열`로 받음

```js
update.apply(mike, [2022, "아기"]);

console.log(mike); // {name: 'Mike', birthYear: 2022, occupation: '아기'}
```

apply 는 배열 요소를 함수 매개 변수로 사용할 때 유용함

```js
const nums = [3, 4, 6, 10, 1, 8];
```

일때

```js
console.log(Math.min(...nums)); // 1
console.log(Math.max(...nums)); // 10
```

이런 방식도 가능하지만

apply 를 이용하면

```js
console.log(Math.min.apply(null, nums)); // 1
console.log(Math.max.apply(null, nums)); // 10
```

### bind

    함수의 this 값을 영구히 바꿀 수 있음

```js
const mike = {
  name: "Mike",
};

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

const updateMike = update.bind(mike);

updateMike(1980, "똥쟁이");

console.log(mike); // {name: 'Mike', birthYear: 1980, occupation: '똥쟁이'}
```

```js
var kim = { name: "kim", first: 10, second: 20 };
var lee = { name: "lee", first: 10, second: 10 };
function sum(prefix) {
  return prefix + (this.first + this.second);
}
// sum();
console.log("sum.call(kim)", sum.call(kim, "=> ")); //apply
console.log("lee.call(kim)", sum.call(lee, ": "));
var kimSum = sum.bind(kim, "-> ");
console.log("kimSum()", kimSum());
```

이렇게도 가능함

### 예제

```js
const user = {
  name: "Mike",
  showName: function () {
    console.log(`안녕, ${this.name}`);
  },
};

user.showName(); // 안녕, Mike
// 메소드는 맨 앞에 있는데가 this 인거임

let fn = user.showName;

fn(); // 안녕,
// 안녕, 만 호출됨 이유는 fn에 할당되면서 this를 잃어 버림

fn.call(user); // 안녕, Mike
fn.aplly(user); // 안녕, Mike

let boundFn = fn.bind(user);

boundFn(); // 안녕, Mike
```

※ 참고로 화살표함수는 해당 기능을 사용 할 수 없음

[mdn 화살표 함수 ](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

```js
const showThisName = () => {
  console.log(this.name);
};
showThisNam.call(mike); // ❌❌❌❌❌
```

- this나 super에 대한 바인딩이 없고, methods 로 사용될 수 없습니다.

- new.target키워드가 없습니다.

- 일반적으로 스코프를 지정할 때 사용하는 call, apply, bind methods를 이용할 수 없습니다.

- 생성자(Constructor)로 사용할 수 없습니다.

- yield를 화살표 함수 내부에서 사용할 수 없습니다.
