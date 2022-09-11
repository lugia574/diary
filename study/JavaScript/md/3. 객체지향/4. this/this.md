# this

## 1. 함수와 this

this는 함수 내에서 함수 호출 맥락(context)를 의미한다.

맥락이라는 것은 상황에 따라서 달라진다는 의미인데

즉 함수를 어떻게 호출하느냐에 따라서 this가 가리키는 대상이 달라진다는 뜻

```js
function func() {
  if (window === this) {
    document.write("window === this");
  }
}
func();
```

이러면 `window === this` 를 그대로 출력한다

## 2. 메소드와 this

객체소속인 메소드의 this 는 해당 객체를 가리킴

```js
var o = {
  func: function () {
    if (o === this) {
      document.write("o === this");
    }
  },
};
o.func();
```

이러면 `o === this` 객체를 가리킴

## 3. 생성자와 this

```js
var funcThis = null;

function Func() {
  funcThis = this;
}
var o1 = Func();
if (funcThis === window) {
  document.write("window <br />");
}

var o2 = new Func();
if (funcThis === o2) {
  document.write("o2 <br />");
}
```

이러면

```
window
o2
```

o1 는 그냥 그대로 func 함수 실행해 값을 담았고

o2 는 new 로 생성자를 만들어 func 값을 담은 거임

## 4. apply 와 this

```js
var o = {};
var p = {};
function func() {
  switch (this) {
    case o:
      document.write("o<br />");
      break;
    case p:
      document.write("p<br />");
      break;
    case window:
      document.write("window<br />");
      break;
  }
}
func();
func.apply(o);
func.apply(p);
```

```
window
o
p
```

apply 같은걸 이용하면 this를 지정 할 수 있음
