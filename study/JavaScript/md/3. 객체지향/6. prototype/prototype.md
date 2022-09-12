# prototype

## prototype 이란?

말 그대로 원형. 객체의 원형.

객체를 상속하기 위해 사용하는데

원래 js 는 java 와 달리 클래스 라는 개념이 없었다. (ES6 이후에 생김)

그래서 기존 객체를 복사하여 새로운 객체를 생성하는데

이 기존 객체의 원형이 프로토타입 되시겠다.

코드를 보자

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

결과는 `true` 가 나온다

o 는 Sub를 받았고 그 Sub는 Super를 받았고 그 Super는 Ultra를 받았다

Sub에 적히지 않은 ultrarProp 값을 출력할 수 있었던거다.

이게 가능했던 이유는 prototype을 사용하였기에 그렇다

<details>
<summary>그럼 의문이 생긴다</summary>
<div markdown="1">

굳이 prototype을 쓰지 않고 this를 써서 상속을 하면 안되는가?

한번 해보자

```js
function ConstructorUltra() {
  // this = {}
  this.Ultra = true;
  // retrun this
}

let ConstructorSuper = new ConstructorUltra();

console.log(ConstructorSuper.Ultra); // true

let ConstructorSub = new ConstructorSuper();

console.log(ConstructorSub.Ultra); // ❌ ERROR : ConstructorSuper is not a constructor ❌
```

안된다~~~

흠 객체가 곧 함수고 함수는 다 생성자 함수로 할 수 있지 않나 싶은데 안되네

아마 함수가 곧 객체지만

모든 객체가 함수는 아니다

객체가 좀 더 큰 범위의 개념인것.

this 는 분명히 객체지만 함수형태는 아니다

그렇지 아닐까?

자바 같은 경우는 걍 클래스라서 그런지 extend 갈기면 잘만 되더만 [링크](https://github.com/lugia574/diary/blob/main/study/java/code/practice.java)

</div>
</details>
