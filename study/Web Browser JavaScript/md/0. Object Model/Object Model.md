# Object Model

[출처: Object Model](https://opentutorials.org/module/904/6622)

[출처: [JavaScript] 자바스크립트 window 객체 이해하기](https://bigtop.tistory.com/48)

[출처: 모던 자바스크립트 딥다이브](https://poiemaweb.com/js-dom)

## 1. 객체화란 무엇인가?

Object Model 이란 것은

    브라우저가 우리가 자바스크립트로 제어할 수 있도록 브라우저의 여러 구성 요소들을 객체로 만들어서 제공 해주는 것

이를 이용해 뤱브라우저 or 문서를 제어할 수 있게 된다.

이 객체들은 서로 계층적인 관계로 구조화되어 있다.

## 2. Core, BOM, DOM

[objectModel](/study/Web%20Browser%20JavaScript/pic/ObjectModel.png)

브라우저는 위의 그림과 같은 구조의 객체 모델을 가지고 있다.

### widonw

`window` 객체는 크게 2가지의 의미를 가진다.

1. 전역객체로써 window

   브라우저 안의 모든 요소들이 소속된 객체로, 최상위에 있기 때문에 어디서든 접근이 가능하다고 해서 '전역 객체'라고도 부른다.

   우리가 작성하는 코드들은 대부분 다 이 window 객체의 프로퍼티다.

   ```js
   var myName = "Bigtop";

   function getMyName() {
     return myName;
   }

   console.log(window.myName); // Bigtop
   console.log(window.getMyName()); // Bigtop
   ```

   이렇게, 우리가 `var` 키워드로 변수를 선언하거나 함수를 선언하면, 다 이 window객체의 프로퍼티가 된다.

    <details>
    <summary>var 말고 let, const 를 하게 되면</summary>
    <div markdown="1">

   물론 const, let 으로 선언하면 window.myName는 undefined 됨 ㅋㅋㅋ

   이유는 var는 Global에 저장되지만 const, let은 script 에 저장되서

   마찬가지로 fnc 역시 `const getMyName = () => return myName;` 하면 못찾아서 오류 남 ㅋ

   이처럼 블록 스코프이기 때문에

   window 객체 내부의 블록에서 선언된 것으로 평가되어 전역 객체의 프로퍼티로 활용되기는 어렵다.
   </div>
   </details>

   전역 객체로 페이지 내에 있는 모든 객체를 다 포함하고 있기 때문에 window는 그냥 생략이 가능한 특징이 있다.

2. 브라우저의 창으로써 window

   일반적으로 우리가 열고 있는 브라우저의 창(browser window)을 의미하고, 이 창을 제어하는 다양한 메서드를 제공한다.

   window.close(), window.open() 메서드를 활용하면, 창을 열거나 닫을 수 있고,

   window.innerWidth, window.innerHeight 같은 프로퍼티에 접근하면 창의 너비와 높이 등을 확인할 수도 있다.

### JS Core

JavaScript 언어 자체에 정의되어 있는 객체들.

### DOM

Document Object Model.

    웹페이지의 내용을 제어한다.

    window의 프로퍼티인 document 프로퍼터에 할당된 Document 객체가 이러한 작업을 담당한다.

Document 객체의 프로퍼티는 문서 내의 주요 엘리먼트에 접근할 수 있는 객체를 제공한다.

또한 특정한 엘러먼트의 객체를 획득할 수 있는 메소드도 제공한다.

### BOM

Browser Object Model.

    웹페이지의 내용을 제외한 브라우저의 각종 요소들을 객체화시킨 것이다.

    전역객체 Window의 프로퍼티에 속한 객체들이 이에 속한다.
