# Regular Expression

## 1. 생성

정규표현식은 두가지 단계로 이루어진다.

하나는 컴파일(compile) 다른 하나는 실행(execution)이다. 우선 컴파일부터 알아보자.

일반적인 변수 선언은 가령

```js
let stringText = "a";
```

이런식이고

정규표현식은 2가지 방법이 있음

- 정규표현식 리터럴

  ```js
  let pattern = /a/;
  ```

- 정규표현식 객체 생성자

  ```js
  let pattern = new RegExp("a");
  ```

## 2. RegExp 객체 실행

객체를 만들었다면 그 대상에 대해서 구체적인 작업을 해야함 이게 핵심임

크게 3가지 기능으로 설명 할 수 있는데

- 패턴을 만들면 그 패턴에 해당되는 정보를 `추출`하는 것

- 해당 정보가 있는지, 없는지 `test` 하는 것

- 찾아낸 정보를 다른 정보로 `치환` 하는 것

### RegExp.exec()

```js
console.log(pattern.exec("abcdef")); // ["a"]
```

실행결과는 문자열 a를 값으로 하는 배열을 리턴한다.

```js
console.log(pattern.exec("bcdefg")); // null
```

인자 'bcdef'에는 a가 없기 때문에 null을 리턴한다.

```js
pattern = /a./;
console.log(pattern.exec("abcdef")); // ["ab"]
```

`a.` 이렇게 하면 a 뒤에 있는 것도 같이 출력함

이렇게 해당 패턴들이 존오온나 많은 이걸 잘 쓰는게 정규표현식 실력임

### RegExp.test()

test는 인자 안에 패턴에 해당되는 문자열이 있으면 true, 없으면 false를 리턴한다.

```js
console.log(pattern.test("abcdef")); // true
cnosole.log(pattern.test("bcdefg")); // false
```

## 3. String 과 정규 표현식

### String.match()

RegExp.exec()와 비슷하다.

```js
console.log("abcdef".match(pattern)); // ["a"]
console.log("bcdefg".match(pattern)); // null
```

### String.replace()

문자열에서 패턴을 검색해서 이를 변경한 후에 변경된 값을 리턴한다.

```js
console.log("abcdef".replace(pattern, "A")); // Abcdef
```

## 4. 옵션

정규표현식 패턴을 만들 때 옵션을 설정할 수 있다. 옵션에 따라서 검출되는 데이터가 달라진다.

### i

i를 붙이면 대소문자를 구분하지 않느다.

```js
let xi = /a/;
console.log("Abcde".match(xi)); // null
let oi = /a/i;
console.log("Abcde".match(oi)); // ["A"];
```

### g

g를 붙이면 검색된 모든 결과를 리턴한다.

```js
let xg = /a/;
console.log("abcdea".match(xg)); // ["a"]
let og = /a/g;
console.log("abcdea".match(og)); // ["a", "a"]
```

참고로 같이 사용 할 수 있음

```js
let ig = /a/gi;
console.log("Abcdea".match(ig)); // ['A', 'a']
```

## 5. 캡처

괄호안의 패턴은 마치 변수처럼 재사용할 수 있다.

이 때 기호 $를 사용하는데

그룹을 의미함

아래 코드는 coding과 everybody의 순서를 역전시킨다.

```js
let pattern = /(\w+)\s(\w+)/;
let str = "coding everybody";
let result = str.replace(pattern, "$2, $1");
console.log(result); // evertbody, coding 이 출력 됨
```

여기서 `/(\w+)\s(\w+)/` 는

() 는 그룹화임

\w 는 단어임 여기에 + 가 붙으면 하나 이상임

\s 스페이스임

그니까

```js
let result = str.replace(pattern, "$2, $1");
```

는 "그룹2, 그룹1" 이렇게 대체하라 이거임

## 6. 치환

아래 코드는 본문 중의 URL을 링크 html 태그로 교체한다.

```js
let urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
let content =
  "생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다. ";
let result = content.replace(urlPattern, function (url) {
  return '<a href="' + url + '">' + url + "</a>";
});
console.log(result);
```

결과는 이렇게 됨

```
생활코딩 : <a href="http://opentutorials.org/course/1">http://opentutorials.org/course/1</a> 입니다. 네이버 : <a href="http://naver.com">http://naver.com</a> 입니다.
```

자세한건 생활코딩 정규표현식 수업을 찾아보던가

아님 따로 찾아봐

## 7. 참고

- [생활코딩 정규표현식 수업](https://opentutorials.org/course/909)
- [정규표현식을 시각화](http://www.regexper.com/)
- [정규표현식 빌더](http://www.regexr.com/)
