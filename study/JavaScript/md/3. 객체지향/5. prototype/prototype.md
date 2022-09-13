# prototype

## prototype 의 필요성

말 그대로 원형. 객체의 원형. 또는 유전자.

객체를 상속하기 위해 사용하는데

원래 js 는 java 와 달리 클래스 라는 개념이 없었다. (ES6 이후에 생김)

그래서 기존 객체를 복사하여 새로운 객체를 생성하는데

우리가 만든적도 없는 `prototype` 이라는 Object 자료를 Constructor에 만들어 버린다

```js
function Constructor() {
  this.q = `Q`;
  this.w = "W";
}

Constructor.prototype.e = "E";

var testOne = new Constructor();

testOne.e; // 'E'
```

Constructor 생성자로 만들어진 testOne 으로 e 를 찾자

Constructor 에 만들어진 prototype 까지 가서 e 을 가져오는거임

이를 이용해 상속에 이용했다.

코드를 보자

```js
function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.sum = function () {
    return this.first + this.second;
  };
}

var kim = new Person("Kim", 10, 20);
var lee = new Person("lee", 10, 10);
console.log("kim.sum() : ", kim.sum());
console.log("lee.sum() : ", lee.sum());
```

이런 생성자 구현 로직이 있다고 치자

생성자를 생성할때마다 각 객체마다 `this.sum` 이라는 함수를 가지게 된다

이는 메모리 낭비를 초래한다 >> 생산성을 떨어트림

그렇기에 `Person` 생성자를 이용해서 만들어진 모든 객체는 `공통적`으로 사용하는 함수 만들어주자

그렇게 해서 만들어진게 `prototype`임

## prototype

`prototype` 을 이용해서 아까의 코드를 구현해보자

```js
function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

Person.prototype.sum = function () {
  return this.first + this.second;
};

var kim = new Person("Kim", 10, 20);
var lee = new Person("lee", 10, 10);
console.log("kim.sum() : ", kim.sum());
console.log("lee.sum() : ", lee.sum());
```

이렇게 하면 sum function 은 여러번 생성되지 않고 prototype 에 생성되고

그걸 이용하려면 prototype 에서 불러다가 쓰는 형태가 된다

또한 만약 내가 kim 이 sum을 바꾸고 싶으면

```js
kim.sum = function () {
  return `this : ` + (this.first + this.second);
};
```

이러면 kim 은 sum 정의 된걸 보고 해당 로직을 이행하고

lee 같은 경우 sum이 정의되지 않았으니까 `Person`의 `prototype` 으로 가 sum 을 실행하게 된다.

이 순서가

1. 해당 객체를 직접 가지고 있으면 그거 출력

2. 없으면 부모로 올라가서 찾음

3. 그래도 없음 더 올라가

이를 `prototype chain` 이라 부름

## prototype chain

```js
function Ultra() {}
Ultra.prototype.ultraProp = true;

function Super() {}
Super.prototype = new Ultra();

function Sub() {}
Sub.prototype = new Super();

var o = new Sub();
console.log(o.ultraProp);
```

보면 o 는 ultraProp 가 없는데

Sub의 prototype에 Super 생성자의 객체를 담고 그 Super 객체의 prototype은 Ultra 생성자의 객체를 담고

그 Ultra 객체의 prototype에 ultraProp 값이 true 이니까 해당 값을 출력하게 된거임

대표적인 예는 우리가 배열, 객체 등을 사용할때 볼 수 있음

```js
let arr = [2, 1, 6];

arr.sort();

console.log(arr); // [1,2,6]
```

여기서 arr에 sort 라는 함수를 지정한적이 없는데 sort 가 돌아가고 있음

해당 코드를 풀어쓰면 이럼

```js
let arr = new Array(2, 1, 6);

arr.sort();

console.log(arr); // [1,2,6]
```

Array 생성자로 만들어지기 때문에 이게 가능했던거임

이걸 이제까지 생략하고 썼던거임

그니까 sort 를 찾는다는 거는

arr 에 없으니까 부모 객체로 가서 해당 sort 를 찾는거임

그렇기에

```js
Array.prototype;
```

pop, slice, sort, toString, length 등 다양한 함수들을 볼 수 있음
