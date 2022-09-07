# arguments

## 1. arguments 소개

함수에는 arguments라는 변수에 담긴 숨겨진 유사 배열이 있다.

이 배열에는 함수를 호출할 때 입력한 인자가 담겨있다.

```js
function sum() {
  var i,
    _sum = 0;

  for (i = 0; i < arguments.length; i++) {
    document.write(i + " : " + arguments[i] + "<br />");
    _sum += arguments[i];
  }
  return _sum;
}
document.write("result : " + sum(1, 2, 3, 4));
```

이럼

```
0 : 1
1 : 2
2 : 3
3 : 4
result : 10
```

보면 딱히 arguments 라고 선언한 변수도 없고

sum 함수에 매개변수를 설정해서 해당 매개변수들을 더한 코드도 없는데

어련히 알아서 arguments 라는 변수에 들어감

arguments는 함수안에서 사용할 수 있도록 그 이름이나 특성이 약속되어 있는 일종의 배열이다.

arguments[0]은 함수로 전달된 첫번째 인자를 알아낼 수 있다.

또 arguments.length를 이용해서 함수로 전달된 인자의 개수를 알아낼 수도 있다.

이러한 특성에 반복문을 결합하면 함수로 전달된 인자의 값을 순차적으로 가져올 수 있다.

그 값을 더해서 리턴하면 인자로 전달된 값에 대한 총합을 구하는 함수를 만들 수 있다.

    arguments는 사실 배열은 아니다. 실제로는 arguments 객체의 인스턴스다.

## 2. function.length

매개변수와 관련된 두가지 수가 있다.

하나는 `function.length`, 다른 하나는 `arguments.length`이다.

    arguments.length는 함수로 전달된 실제 인자의 수를 의미하고,

    function.length는 함수에 정의된 인자의 수를 의미한다.

```js
function zero() {
  console.log("zero.length", zero.length, "arguments", arguments.length);
}
function one(arg1) {
  console.log("one.length", one.length, "arguments", arguments.length);
}
function two(arg1, arg2) {
  console.log("two.length", two.length, "arguments", arguments.length);
}
zero(); // zero.length 0 arguments 0
one("val1", "val2"); // one.length 1 arguments 2
two("val1"); // two.length 2 arguments 1
```

---

보면서 느끼는게

자바스크립트가 개씹가라 당나라 코드라 이게 가능한거 아닌가 싶다

위의 코드를 보면 분명히 func one 은 매개변수를 하나만 받게 되어 있음

근데 파라미터를 두개를 넣는데 오류가 안나옴

마찬가지로 func two 는 매개변수가 두개지만 하나만 쳐 넣고 있음

function.length 고 나발이고 function 에 로직을 구현했음

해당 로직에 맞게 이용을 해야지 무슨 ㅋㅋㅋㅋㅋ

아예 부정변수? 그 뭐냐 \* 이용해서 변수 여러개 넣는거, 파이썬에 있는거

\*args 해서 하는거

그렇게 매개변수를 선언하고 사용하면 모를까 ㅋㅋㅋ 염병 ㅋㅋㅋ
