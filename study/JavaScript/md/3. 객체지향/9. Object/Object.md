# Object

## 1. Object 란?

Object 객체는 객체의 가장 기본적인 형태를 가지고 있는 객체이다.

다시 말해서 아무것도 상속받지 않는 순수한 객체다.

자바스크립트에서는 값을 저장하는 기본적인 단위로 Object를 사용한다.

동시에 **자바스크립트의 모든 객체는 Object 객체를 상속 받는데**,

그런 이유로 **모든 객체는 Object 객체의 프로퍼티**를 가지고 있다.

## 2. Object API 사용법

[MDN JavaScript Reference Object](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object) 여기 들가면 Object 에 대해 나와 있는데

`object.prototype.__~~` 라고 적혀 있는 것과

`object.~~` 라고 적혀 있는게 있다.

prototype에 속해있는 toString의 경우

arr.toString()으로 호출할 수 있습니다.

이는 모든 객체가 Object를 암시적으로 상속받고 있기 때문에

Object객체의 prototype에 속해있는 toString() 메서드를 새롭게 만든 배열 객체에서도 호출하여 사용할 수 있는 것입니다.

하지만 keys() 메서드의 경우

prototype에 속해있지 않고 메서드로서 존재합니다.

우리가 객체를 상속할 때 하위 객체의 prototype에 new를 통해 상위 객체의 prototype 정보를 복사하여 할당해줍니다.

즉 prototype에 속해있지 않은 keys의 경우 해당 메서드가 다른 객체의 prototype에 할당되지 않아 arr.keys(arr)로 호출이 불가능한 것입니다.

그렇기에 keys() 는

```js
Object.keys();
```

이렇게 써야한다~

## 3. Object 확장

또한 Object 객체를 확장하면 모든 객체가 접근할 수 있는 API를 만들 수 있다. 아래는 Object 객체를 확장한 사례다.

```js
Object.prototype.contain = function (neddle) {
  for (var name in this) {
    if (this[name] === neddle) {
      return true;
    }
  }
  return false;
};
var o = { name: "egoing", city: "seoul" };
console.log(o.contain("egoing"));
var a = ["egoing", "leezche", "grapittie"];
console.log(a.contain("leezche"));
```

## 4. Object 확장의 위험

그런데 Object 객체는 확장하지 않는 것이 바람직하다. 왜냐하면 모든 객체에 영향을 주기 때문이다.

```js
for (var name in o) {
  console.log(name);
}
```

```
name
contain
```

확장한 프로퍼티인 contain이 포함되어 있다.

객체가 기본적으로 가지고 있을 것으로 예상하고 있는 객체 외에 다른 객체를 가지고 있는 것은 개발자들에게 혼란을 준다.

이 문제를 회피하기 위해서는 프로퍼티의 해당 객체의 소속인지를 체크해볼 수 있는 hasOwnProperty를 사용하면 된다.

```js
for (var name in o) {
  if (o.hasOwnProperty(name)) console.log(name);
}
```

hasOwnProperty는 인자로 전달된 속성의 이름이 객체의 속성인지 여부를 판단한다.

만약 prototype으로 상속 받은 객체라면 false가 된다.
