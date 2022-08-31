# Object

객체는 기본적으로 배열과 비슷하다

배열은 아이템에 대한 식별자로 숫자를 사용한다.

객체는 식별자를 `key` 로 작성자가 직접 정하고 `value` 를 넣는다

## 객체의 문법

만드는 법

```js
const grades = { egoing: 10, k8805: 6, sorialgi: 80 };
```

```js
const grades = {};
grades["egoing"] = 10;
grades["k8805"] = 6;
grades["sorialgi"] = 80;
```

or

```js
const grades = new Object();
grades["egoing"] = 10;
grades["k8805"] = 6;
grades["sorialgi"] = 80;
```

이런식으로도 가능함

접근방법은

```js
alert(grades["sorialgi"]);
```

이렇게 key 값을 적으면 value 가 반환된다.

```js
alert(grades.sorialgi);
```

이렇게도 쌉가능

## 객체와 반복문의 조우

```js
const grades = { egoing: 10, k8805: 6, sorialgi: 80 };
for (key in grades) {
  document.write("key : " + key + " value : " + grades[key] + "<br />");
}
```

이러면

```
key :   egoing value : 10
key :   k8805 value : 6
key :   sorialgi value : 80
```

이렇게 반환됨

## 객체지향 프로그래밍

객체에는 객체를 담을수도 있고, 함수도 담을 수 있음

```js
const grades = {
  list: { egoing: 10, k8805: 6, sorialgi: 80 },
  show: function () {
    for (var name in this.list) {
      document.write(name + ":" + this.list[name] + "<br />");
    }
  },
};
grades.show();
```

이것은 자바스크립트를 이용한 객체 지향 프로그래밍 기법의 핵심이 되는 성질
