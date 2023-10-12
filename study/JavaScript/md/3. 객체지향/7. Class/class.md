# Class

## 1. Class 생성

```js
function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

let kim = new Person("kim", 10, 10);
```

생성자 함수는 이렇게 만들어 진다

class 를 이용하면 이렇게 된다

```js
class Pesron {}

let kim = new Person();
```

## 2. class의 constructor

생성자 함수는 객체의 초기상태를 세팅하고 리턴한다

class에서 객체 상태를 세팅하려면

```js
class Pesron {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
}
```

이럼 된다

`constructor` 함수는 클래스에서 객체 세팅에 꼭 필요한 함수이며, 무조건 명칭 그대로 써야한다

```js
let kim = new Person("kim", 10, 10);
```

이러면 Person 클래스가 실행되면서 무조건 constructor 함수도 실행되면서 객체 세팅이 완료된다.

## 3. class에서 객체의 method 구현하기

```js
class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return "prototype : " + (this.first + this.second);
  }
}

var kim = new Person("kim", 10, 20);

kim.sum = function () {
  return "this : " + (this.first + this.second);
};

var lee = new Person("lee", 10, 10);

console.log("kim.sum()", kim.sum()); // kim.sum() this : 30
console.log("lee.sum()", lee.sum()); // lee.sum() prototype : 20
```

이럼 됨

## 3-1 class 객체와 생성자 함수의 차이점

```js
const User = function (name, age) {
  this.name = name;
  this.age = age;
  this.showName = function () {
    console.log(this.name);
  };
};

const mike = new User("Mike", 33);

class User2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showName() {
    console.log(this.name);
  }
}

const tom = new User2("Tom", 333);
```

이라고 할때 mike 와 tom 객체를 부르면

showName 함수까지 전부 보여주는 mike 객체와 다르게

클래스로 생성한 tom 은 매개변수만 보여주고 showName 함수는 프로토 안에 들어감

생성자 함수도 클래스 생성처럼 하려면

```js
User.prototype.showName = function () {
  console.log(this.name);
};
```

이럼 됨

또한 개발자가 잘못 작성해서 실행하는 경우 생성자 함수의 경우 undefined 만 뱉고 그대로 실행됨

하지만 클래스 생성의 경우 에러를 뱉음

이를 통해 클래스 부분에 잘못했을때 바로 알수 있음

## 4. class 상속

```js
class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return this.first + this.second;
  }
}

class PersonPlus extends Person {
  avg() {
    return (this.first + this.second) / 2;
  }
}

var kim = new PersonPlus("kim", 10, 20);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
```

드디어 자바와 같이 extends 을 이용해 상속을 한다

## 5. super

    서브(자식) 클래스에서 상위 클래스를 호출할 때 사용함

부모 클래스에게 상속받아 자식 클래스를 만들었는데, 자식 클래스에 속성을 추가하려고 한다.

그럼 이렇게 된다

```js
class Person {
  // 부모클래스
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return this.first + this.second;
  }
}

class PersonPlus extends Person {
  // 자식 클래스. 부모클래스를 상속함
  constructor(name, first, second, third) {
    // 속성을 추가하기 위해 constructor를 다시 써야함
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
  }
  sum() {
    return this.first + this.second + this.third;
  }
  avg() {
    return (this.first + this.second + this.third) / 3;
  }
}

var kim = new PersonPlus("kim", 10, 20, 50);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
```

이러면 에러뜸

```
ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
```

대충 supuer 쓰래

돌아간다 해도 문제임 상속을 한 이유가 없음

ㄹㅇ 코드중복 오짐

이때 필요한게 `super`

super의 기술적 의미

상속된(자식) class에 요소 추가 시 새로 추가되는 parameter를 정의하려면

기존(부모)-class constructor를 다시 정의해 주어야 한다.

이 과정에서 생기는 중복되는 코드가 발생해, error발생 확률 증가, 메모리 낭비 등 매우 비효율적인 낭비가 생긴다.

이러한 부분을 super로 해결할 수 있다.

```js
class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return this.first + this.second;
  }
}

// 상속
class PersonPlus extends Person {
  constructor(name, first, second, third) {
    super(name, first, second); // super로 부모 클래스 생성자 호출
    this.third = third;
  }
  sum() {
    return super.sum() + this.third; // super로 부모 클래스 메소드 호출
  }
  avg() {
    return (this.first + this.second + this.third) / 3;
  }
}

var kim = new PersonPlus("kim", 10, 20, 30);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
```

1. super(): 부모-class의 생성자(constructor)를 참조한다.

2. super.method() : 부모-class의 prototype-method를 참조한다.

## 레퍼런스

- https://www.youtube.com/watch?v=OpvtD7ELMQo&list=PLZKTXPmaJk8JZ2NAC538UzhY_UNqMdZB4&index=15
