# JavaScript 동작원리

[모던 자바스크립트 딥다이브: 브라우저 동작 원리](https://poiemaweb.com/js-browser)

[JavaScript 동작원리](https://www.youtube.com/watch?v=v67LloZ1ieI)

[JavaScript 비동기 핵심 Event Loop 정리](https://medium.com/sjk5766/javascript-%EB%B9%84%EB%8F%99%EA%B8%B0-%ED%95%B5%EC%8B%AC-event-loop-%EC%A0%95%EB%A6%AC-422eb29231a8)

## 1. 비동기 처리에 대한 고찰

내가 만약 이런 코드를 만든다고 하자

```
1+1 값 출력
1초 취고
2+2 값 출력
```

python 은 이렇게 구현한다

```py
print(1+1)
time.sleep(1)
print(2+2)
```

js 로 이걸 구현할려면 이렇게 된다.

```js
console.log(1 + 1);
setTimeout(() => {}, 1000);
console.log(2 + 2);
```

하지만 결과는 다르게 나온다

1초 쉬지도 않고 2, 4 를 뱉어버린다.

이유는 `setTimeout()` 은 `비동기` 처리되기 때문이다.

하지만 정말 비동기 처리하는 것일까?

만약` console.log(2+2)` 코드가 사실 천개, 만개가 있다고 치다

그럼 그 천개의 코드가 실행하는 도중에 1초가 지나면 setTimeout 코드가 실행될까?

답은 아니다.

비동기처리는 각 작업을 동시에 처리는 하는 것인데

그 말대로라면 비동기처리로 따로 빠진 코드는 알아서 실행되고 중간에 나와야 맞다

근데 안된다. 왤까. js는 비동기처리를 지원하지 않는 것인가?

이제부터 알아보자.

## 2. 브라우저 동작 원리 (Event Loop)

js 는 `단일 스레드`로 구성되어 있다.

단일 순간에 `하나`의 작업만 할 수 있다는 소리다.

하나? 뭐냐? 그럼 비동기 처리 안하는거네?

맞다. js 는 비동기 처리를 할 수 없다.

해당 기능은 브라우저 엔진을 통해 구현된다.

브라우저는 Web APIs, Event Table, Callback Queue, Event Loop 등으로 구성되며

자바스크립트 코드가 실행될 때 브라우저와의 동작은 아래 그림으로 표현할 수 있다.

![이벤트 루프](/study/JavaScript/pic/EventLoop.png)

위의 코드를 다시 상기해보자

`console.log(1 + 1);` 이 먼저 콜스택에 올라와 실행된다.

이후 나오는 `setTimeout(() => {}, 1000);` 는 콜스택에 와서 비동기처리 짬 맞고

webAPIs 로 가서 대기한다

`console.log(2 + 2;` 콜스택에 올라와 실행된다.

`setTimeout(() => {}, 1000);` 는 webAPIs 에서 1초 후에

큐로 간다

큐에서 대기하고 콜스택이 비어있다는 걸 확인하고

setTimeout() 에서 실행할 함수를 콜스택에 올리고 콜스택에서 실행된다.

해당 원리를 `Event Loop` 라고 부른다

그리고 Event Loop의 특징은

    Call Stack이 비어있을 경우, Callback queue에서 함수를 꺼내 Call Stack에 추가한다.

여기서 알수 있는건

setTimeout의 delay인자가 delay ms 후에 실행 되는 것을 보장하지 않는다.

정확히는 delay ms 후에 Callback Queue에 들어가는 것을 보장한다.

## 3. ES6 Job Queue

ES6/ES2015 에서 소개된 `Job Queue`는 Callback Queue와 다른 Queue이며

Promise를 사용할 경우 `Job Queue`를 사용하게 됨

promise를 사용할 때

callback 함수 역할을 하는 .then 을 사용하게 되고,

이런 thenable한 함수들은 Job Queue에 추가된다.

```js
console.log("fisrt");

setTimeout(function () {
  console.log("setTimeout - second");
}, 0);

const example = new Promise(function (resolve, reject) {
  resolve();
});

example
  .then(function (resolve) {
    console.log("promise - third");
  })
  .then(function (resolve) {
    console.log("promise - four");
  });

console.log("five");
```

해당 코드가 있다면 어떻게 출력 될까?

```
fisrt
five
promise - third
promise - four
setTimeout - second
```

일반 코드가 먼저 실행되고

그 다음에 promise 코드들 마지막에 setTimeout 코드가 실행됐다.

Job Queue의 우선순위가 Callback Queue보다 높다.

---

- 나중에 읽어보자

  - [[기술면접] JavaScript 런타임 작동방식, 비동기와 이벤트 루프](https://velog.io/@ahsy92/%EA%B8%B0%EC%88%A0%EB%A9%B4%EC%A0%91-JavaScript-%EB%9F%B0%ED%83%80%EC%9E%84-%EC%9E%91%EB%8F%99%EB%B0%A9%EC%8B%9D-%EB%B9%84%EB%8F%99%EA%B8%B0%EC%99%80-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84)

  - [[기술면접] 싱글스레드와 멀티스레드](https://velog.io/@ahsy92/%EA%B8%B0%EC%88%A0%EB%A9%B4%EC%A0%91-%EC%8B%B1%EA%B8%80%EC%8A%A4%EB%A0%88%EB%93%9C%EC%99%80-%EB%A9%80%ED%8B%B0%EC%8A%A4%EB%A0%88%EB%93%9C)
