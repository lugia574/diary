# JavaScript Promise

[출처 : JavaScript Promise (callback & async)](https://www.youtube.com/playlist?list=PLuHgQVnccGMBVQ4ZcIRmcOeu8uktUAbxI)

[출처 : 자바스크립트 Promise 쉽게 이해하기](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)

[출처 : MDN promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## 1. callback function

콜백 함수에 대한 설명은 [여기서 보도록 하자](https://github.com/lugia574/diary/blob/main/study/JavaScript/md/2.%20%ED%95%A8%EC%88%98/2.%20callBack/function%2Ccallback.md#3-%EC%BD%9C%EB%B0%B1%EC%9D%B4%EB%9E%80)

## 2. Promise

프로그래밍을 하다 보면 `Synchronous(동기)`, `Asynchronous(비동기)` 를 만날 볼 수 있다

![동기, 비동기](/study/JavaScript/pic/synVSAsyn.jpg)

- `동기`는 서버에서 요청을 보냈을 때 응답이 돌아와야 다음 동작을 수행할 수 있다.

- `비동기`는 요청을 보냈을 때 응답 상태와 상관없이 다음 동작을 수행 할 수 있다.

대표적으로

```js
console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000);
console.log(3);

// 1
// 3
// 2
```

이러면 1, 3, 2 순으로 출력된다.

setTimeout이 `비동기`이기 때문에 이렇게 출력된다.

그렇다면 비동기를 사용하는 이유는 뭘까?

간단하다 좀 더 효율적인 퍼포먼스를 보여주기 위해서다

만약 서버로부터 데이터를 받는다고 하였을때 데이터를 다 받기 전까지

페이지가 로드 되지 않는다면 어떻게 될까?

로딩 지옥이 될것이다.

효율적으로 하기 위해 비동기 방식이 있는 것이다.

그걸 위해서 쓰이는게 `promise` 다

    Promise 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냄

```js
// 함수 정의
function getData(callbackFunc) {
  $.get("url 주소/products/1", function (response) {
    callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
  });
}

// 함수 이용
getData(function (tableData) {
  console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
});
```

콜백 함수를 이용한 기본적인 방식은 이렇게 된다.

이 방식의 문제점은 길어지면 콜백지옥에 빠지게 된다는 것이다.

`promise` 를 쓰게 되면 이렇게 된다.

```js
function getData(callback) {
  // new Promise() 추가
  return new Promise(function (resolve, reject) {
    $.get("url 주소/products/1", function (response) {
      // 데이터를 받으면 resolve() 호출
      resolve(response);
    });
  });
}

// getData()의 실행이 끝나면 호출되는 then()
getData()
  .then(function (tableData) {
    // resolve()의 결과 값이 여기로 전달됨
    console.log(tableData); // $.get()의 reponse 값이 tableData에 전달됨
  })
  .catch(function (err) {
    console.log(err); // Error: Request is failed
  });
```

여기서 then 은 말 그대로 그 담에 수행할 콜백 함수임

그리고 catch는 만약 비동기 처리가 실패 됐을경우 수행할 콜백 함수임

이렇게 then 과 catch 를 이용해서 비동기 처리를 하면 좀 더 직관적으로 코드를 작성 할 수 있음

살짝 추가 하자면 여기에 `finally()` 함수도 있는데 요건

    결과에 관계없이 promise가 처리되면 무언가를 프로세싱 또는 정리를 수행하는 함수

이 3개를 이용하면 대충 이럼

```js
function getData() {
  return new Promise({
    // ...
  });
}

// then() 으로 여러 개의 프로미스를 연결한 형식
getData()
  .then(function (data) {
    // ...
  })
  .catch(function (err) {
    // ... 에러 떳을때 수행할 코드
  })
  .then(function () {
    // ...
  })
  .then(function () {
    // ...
  })
  .finally(function () {
    // ... 결과랑 상관없이 수행
  });
```

### Promise 심화

만약 여러개의 promise 가 얽혀 있는 상태(`promise chaining`)가 있으면 어떻게 될까?

```js
const f1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("1번 주문 완료데스요");
    }, 1000);
  });
};

const f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("2번 주문 완료데스요");
    }, 3000);
  });
};

const f3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("3번 주문 완료데스요");
    }, 2000);
  });
};

// 시작
f1()
  .then((res) => f2(res))
  .then((res) => f3(res))
  .then((res) => console.log(res))
  .catch((res) => console.log(res))
  .finally(() => console.log("끝났습니다잉"));
```

이렇다고 해보자

이 코드의 수행시간은 1 + 3 + 2 해서 총 6초이다

좀 더 줄일 수 없을까?

```js
Promise.all([f1(), f2(), f3()]).then((res) => console(res));
```

`Promise.all()` 을 사용하면 저것들을 동시에 돌려서 3초로 줄일 수 있다.

```js
Promise.race([f1(), f2(), f3()]).then((res) => console(res));
```

`Promise.race()` 를 사용하면 동시에 돌려서 먼저 끝나는게 있음 그걸 뱉어내고 끝을 내버린다.
