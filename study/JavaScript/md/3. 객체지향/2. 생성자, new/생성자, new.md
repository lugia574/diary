# 생성자와 new

## 1. 자바스크립의 객체 지향

자바스크립트의 객체지향의 다른 언어의 객체지향과는 좀 다름

이러한 객체지향을 `prototype - based` 프로그래밍 라고 부름

개체지향 언어에서 갖고 있는 문법을 비슷하게 사용하면서 함수형의 특성을 가지고 있는 미친놈임

## 2. 객체 생성

객체란 서로 연관된 변수와 함수를 그룹핑한 것이라 할 수 있다.

객체 내의 변수를 프로퍼티(property) 함수를 메소드(method)라고 부른다.

```js
var person = {};
person.name = "egoing";
person.introduce = function () {
  return "My name is " + this.name;
};
document.write(person.introduce());
```

이럴 경우 person은

```js
var person = {
  name: "egoing",
  introduce: function () {
    return "My name is " + this.name;
  },
};
```

이러한 형태가 되겟지

만약에 person의 형태를 그대로 가져가는데 이름이 다른 것을 만들고 싶다면

이런 코드를 똑같이 적어서 구현을 해야할 것이다.

굉장히 비효율적이다

## 3. 생성자, new

생성자(constructor)는 객체를 만드는 역할을 하는 함수다.

함수를 호출할 때 new을 붙이면 새로운 객체를 만든 후에 이를 리턴한다.

```js
function Person(name) {
  this.name = name;
  this.introduce = function () {
    return "My name is " + this.name;
  };
}
var p1 = new Person("egoing");
document.write(p1.introduce() + "<br />");

var p2 = new Person("leezche");
document.write(p2.introduce());
```

이같이 생성자 내에서 이 객체의 프로퍼티를 정의한다

이러한 작업을 초기화라고 한다.

이를 통해서 코드의 재사용성이 대폭 높아졌다.

코드를 통해서 알 수 있듯이 생성자 함수는 일반함수와 구분하기 위해서 첫글자를 대문자로 표시한다.

### 자바스크립트 생성자의 특징

일반적인 객체지향 언어에서 생성자는 클래스의 소속이다.

하지만 자바스크립트에서 객체를 만드는 주체는 함수다.

함수에 new를 붙이는 것을 통해서 객체를 만들 수 있다는 점은

자바스크립트에서 함수의 위상을 암시하는 단서이면서

또 자바스크립트가 추구하는 자유로움을 보여주는 사례라고 할 수 있다.
