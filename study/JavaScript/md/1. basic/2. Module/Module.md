# Module

코드가 커지면 그 과정에서 코드의 재활용성을 높이고, 유지보수를 쉽게 할 수 있는 다양한 기법들이 사용된다.

그 중의 하나가 코드를 여러개의 파일로 분리하는 것이다. 이를 통해서 얻을 수 있는 효과는 아래와 같다.

- 자주 사용되는 코드를 별도의 파일로 만들어서 필요할 때마다 재활용할 수 있다.
- 코드를 개선하면 이를 사용하고 있는 모든 애플리케이션의 동작이 개선된다.
- 코드 수정 시에 필요한 로직을 빠르게 찾을 수 있다.
- 필요한 로직만을 로드해서 메모리의 낭비를 줄일 수 있다.
- 한번 다운로드된 모듈은 웹브라우저에 의해서 저장되기 때문에 동일한 로직을 로드 할 때 시간과 네트워크 트래픽을 절약 할 수 있다. (브라우저에서만 해당)

## 1. 모듈이란?

순수한 자바스크립트에서는 모듈(module)이라는 개념이 분명하게 존재하지는 않음

하지만 자바스크립트가 구동되는 호스트 환경(자바스크립트가 구동되는 환경을 의미)에 따라서 서로 다른 모듈화 방법이 제공함

이 수업에서는 자바스크립트의 대표적인 호스트 환경인 웹브라우저에서 로직을 모듈화하는 방법에 대해서 알아볼 것

## 2. 모듈화

모듈이 없는 앱이랑 모듈화가 된 앱이랑 비교해서 어떻게 다른지 보자

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <script>
      function welcome() {
        return "Hello world";
      }
      alert(welcome());
    </script>
  </body>
</html>
```

이런 코드가 있다고 치고

해당 welcome function이 코드양이 존나 많고 이 코드를 여러 html 파일에서 쓴다고 가정하자

그럼 이렇게 할 수 있다.

`main.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <script src="greeting.js"></script>
  </head>
  <body>
    <script>
      alert(welcome());
    </script>
  </body>
</html>
```

`greeting.js`

```js
function welcome() {
  return "Hello world";
}
```

이런식으로 기능을 분리해서 별도로 관리, 사용 할 수 있다.

여기서 좀 더 가자면

해당 js 로드 파일들이 많아지면 웹이 무거워진다

특히 js 파일 중에 막 API 를 사용해서 존나 요청을 때린다고 가정하자

그러면 if 조건절로 특정 요소가 있을때만 로드 하게 하거나

만약 react 라면 `useEffect` 를 사용해서 해당 기능을 controll 할 수 있음

## 3. Node.js에서의 모듈의 로드

`node.circle.js (로드될 대상)`

```js
var PI = Math.PI;

exports.area = function (r) {
  return PI * r * r;
};

exports.circumference = function (r) {
  return 2 * PI * r;
};
```

`node.demo.js (로드의 주체)`

```js
var circle = require("./node.circle.js");
console.log("The area of a circle of radius 4 is " + circle.area(4));
```

## 4. 라이브러리란?

라이브러리는 모듈과 비슷한 개념이다.

모듈이 프로그램을 구성하는 작은 부품으로서의 로직을 의미한다면

라이브러리는 자주 사용되는 로직을 재사용하기 편리하도록 잘 정리한 일련의 코드들의 집합을 의미

## 5. 라이브러리 사용

라이브러리인 jQuery를 사용하는 방법을 알아보자

jQuery 홈페이지에서 파일을 다운로드 받는다.

http://jquery.com/

jQuery 메뉴얼을 이용해서 사용법을 파악한다.

http://api.jquery.com/

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
  </head>
  <body>
    <ul id="list">
      <li>empty</li>
      <li>empty</li>
      <li>empty</li>
      <li>empty</li>
    </ul>
    <input id="execute_btn" type="button" value="execute" />
    <script type="text/javascript">
      $("#execute_btn").click(function () {
        $("#list li").text("coding everybody");
      });
    </script>
  </body>
</html>
```

만약 jQuery를 안쓰면

```html
<!DOCTYPE html>
<html>
  <body>
    <ul id="list">
      <li>empty</li>
      <li>empty</li>
      <li>empty</li>
      <li>empty</li>
    </ul>
    <input id="execute_btn" type="button" value="execute" />
    <script type="text/javascript">
      function addEvent(target, eventType, eventHandler, useCapture) {
        if (target.addEventListener) {
          // W3C DOM
          target.addEventListener(
            eventType,
            eventHandler,
            useCapture ? useCapture : false
          );
        } else if (target.attachEvent) {
          // IE DOM
          var r = target.attachEvent("on" + eventType, eventHandler);
        }
      }
      function clickHandler(event) {
        var nav = document.getElementById("list");
        for (var i = 0; i < nav.childNodes.length; i++) {
          var child = nav.childNodes[i];
          if (child.nodeType == 3) continue;
          child.innerText = "Coding everybody";
        }
      }
      addEvent(document.getElementById("execute_btn"), "click", clickHandler);
    </script>
  </body>
</html>
```

이렇게 길어진다

jQuery는 존나 간편하다

---

1. 자바스크립트 API 문서

[ECMAScript (표준문서)](http://www.ecma-international.org/publications/standards/Ecma-262.htm)

[자바스크립트 사전 (생활코딩)](http://opentutorials.org/course/50)

[자바스크립트 레퍼런스 (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

[jscript 레퍼런스 (MSDN)](<http://msdn.microsoft.com/ko-kr/library/vstudio/z688wt03(v=vs.100).aspx>)

2. 호스트 환경의 API 문서

[웹브라우저 API](https://developer.mozilla.org/en-US/docs/Web/API)

[Node.js API](http://nodejs.org/api/)

[Google Apps Script API](https://developers.google.com/apps-script/)
