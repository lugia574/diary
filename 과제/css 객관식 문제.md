# CSS 40 문제

물론, CSS 관련 객관식 문제를 40문항 제시합니다. 답은 각 문제 뒤에 표기되어 있습니다.

### 1. CSS는 어떤 약자인가?

- a HyperText Markup Language
- b Cascading Style Sheet
- c JavaScript
- d Document Object Model

<details>
<summary>정답</summary>
정답: b Cascading Style Sheet
</details>

### 2. CSS는 어떤 역할을 하는 기술인가?

- a 웹 페이지의 구조를 정의
- b 웹 페이지의 스타일을 정의
- c 웹 페이지의 상호작용을 담당
- d 웹 페이지의 서버-클라이언트 통신을 담당

<details>
<summary>정답</summary>

정답: b 웹 페이지의 스타일을 정의

</details>

3. CSS의 'Cascading'은 무엇을 의미하는가?

   - a 폭포처럼 연결된 스타일 규칙을 적용한다.
   - b 스타일이 무효화되지 않고 연속적으로 적용된다.
   - c 선택자의 가중치에 따라 스타일 규칙이 우선순위를 갖는다.
   - d 스타일이 상속되어 하위 요소에 적용된다.

<details>
<summary>정답</summary>

정답: c 선택자의 가중치에 따라 스타일 규칙이 우선순위를 갖는다.

</details>

4. CSS에서 선택자(selector)의 역할은 무엇인가?

   - a 웹 페이지의 구조를 정의
   - b 스타일 규칙을 적용할 요소를 선택
   - c 스타일 규칙의 내용을 정의
   - d HTML 문서의 페이지 제목을 설정

<details>
<summary>정답</summary>

정답: b 스타일 규칙을 적용할 요소를 선택

</details>

5. CSS에서 사용되는 'id' 선택자는 어떤 기호로 시작하는가?

   - a .
   - b #
   - c :
   - d /

<details>
<summary>정답</summary>

정답: b #

</details>

6. CSS에서 스타일을 적용할 때, 'class' 선택자는 어떤 기호로 시작하는가?

   - a #
   - b .
   - c :
   - d \*

<details>
<summary>정답</summary>

정답: b .

</details>

7.  CSS에서 특정 요소를 선택하기 위해 사용되는 선택자는?

    - a Attribute Selector
    - b Universal Selector
    - c Descendant Selector
    - d Child Selector

<details>
<summary>정답</summary>

정답: a Attribute Selector(특성 선택자)
ex:

```css
a[title] {
  color: purple;
}
```

Universal Selector 는 전체 선택자 >> \*

Descendant Selector 는 자손 선택자 >> 자손 선택자는 계층 구조에서 하위에 오는 모든 자손을 선택한다

```css
ul.my-things li {
  margin: 2em;
}
```

Child Selector 자식 선택자 >> 자식 선택자는 계층구조에서 바로 아래 오는 자식요소만을 선택한다

</details>

### 8. CSS에서 사용되는 'color' 속성은 무엇을 정의하는 데 사용되는가?

- a 폰트 크기
- b 배경 이미지
- c 글꼴 종류
- d 텍스트 색상

<details>
<summary>정답</summary>
정답: d 텍스트 색상
</details>

### 9. CSS에서 글꼴 크기를 조절하는 속성은?

- a font-weight
- b font-family
- c font-size
- d text-decoration

<details>
<summary>정답</summary>

정답: c font-size

</details>

### 10. CSS에서 박스 모델(Box Model)은 어떤 구성 요소로 구성되어 있는가?

- a 텍스트, 이미지, 링크
- b 마진, 패딩, 테두리, 콘텐츠
- c 제목, 문단, 목록
- d 폰트, 배경, 색상

<details>
<summary>정답</summary>

정답: b margin, padding, boder, content

</details>

### 11. CSS에서 박스 모델의 '마진'은 무엇을 나타내는가?

- a 콘텐츠 영역 바같 여백
- b 테두리 주위의 공간
- c 콘텐츠의 내부 여백
- d 블록 요소의 수직 간격

<details>
<summary>정답</summary>

정답: a 콘텐츠 영역 바같 여백

</details>

### 12. CSS에서 박스 모델의 '패딩'은 무엇을 나타내는가?

- a 콘텐츠 영역 주변의 여백
- b 테두리 주위의 공간
- c 콘텐츠의 내부 여백
- d 블록 요소의 수직 간격

<details>
<summary>정답</summary>

정답: c 콘텐츠의 내부 여백

</details>

### 13. CSS에서 박스 모델의 '테두리'는 어떤 역할을 하는가?

- a 텍스트의 배경을 설정
- b 콘텐츠 영역을 감싸고 외곽선을 생성
- c 요소 사이의 간격을 지정
- d 텍스트 색상을 변경

<details>
<summary>정답</summary>

정답: b 콘텐츠 영역을 감싸고 외곽선을 생성

</details>

### 14. CSS에서 'display' 속성을 사용하여 요소의 표시 방법을 설정할 수 있다. 'display: none;'은 어떤 효과를 가지는가?

- a 요소를 화면에 보이지 않게 함
- b 요소의 텍스트를 굵게 표시
- c 요소의 배경색을 변경
- d 요소의 크기를 확대

<details>
<summary>정답</summary>

정답: a 요소를 화면에 보이지 않게 함

</details>

### 15. CSS에서 'float' 속성은 어떤 효과를 가지는가?

- a 요소를 화면 중앙에 정렬
- b 요소를 좌우로 부유시킴
- c 요소의 높이를 자동으로 조절
- d 요소의 가로선을 그음

<details>
<summary>정답</summary>

정답: b 요소를 좌우로 부유시킴

</details>

### 16. CSS에서 'position' 속성을 설정할 때, 'fixed' 값은 어떤 위치에 요소를 고정시키는가?

- a 요소를 부모 요소 내에서 고정
- b 요소를 화면의 왼쪽 상단에 고정
- c 요소를 스크롤에 따라 움직임
- d 요소를 브라우저 창에 고정

<details>
<summary>정답</summary>

정답: d 요소를 브라우저 창에 고정

</details>

### 17. CSS에서 'z-index' 속성은 무엇을 설정하는 데 사용되는가?

- a 글꼴 크기
- b 요소의 높이
- c 요소의 레이어 순서
- d 텍스트 색상

<details>
<summary>정답</summary>

정답: c 요소의 레이어 순서

</details>

### 18. CSS에서 'background-color' 속성은 무엇을 설정하는 데 사용되는가?

- a 텍스트 크기
- b 배경 이미지
- c 테두리 스타일
- d 배경 색상

<details>
<summary>정답</summary>

정답: d 배경 색상

</details>

### 19. CSS에서 'text-align' 속성은 어떤 내용을 정렬하는 데 사용되는가?

- a 텍스트의 수직 정렬
- b 요소의 가로 정렬
- c 텍스트의 색상
- d 텍스트의 글꼴

<details>
<summary>정답</summary>

정답: b 요소의 가로 정렬

</details>

### 20. CSS에서 'line-height' 속성은 무엇을 설정하는 데 사용되는가?

- a 텍스트 줄 간격
- b 텍스트 색상
- c 텍스트 굵기
- d 텍스트 배경 이미지

<details>
<summary>정답</summary>

정답: a 텍스트 줄 간격

</details>

### 21. CSS에서 'border' 속성을 사용하여 테두리를 설정할 때, 어떤 값이 설정되는가?

- a 테두리 색상
- b 테두리 스타일
- c 테두리 두께
- d 모든 위의 값

<details>
<summary>정답</summary>

정답: d 모든 위의 값

</details>

### 22. CSS에서 'box-shadow' 속성은 무엇을 생성하는 데 사용되는가?

- a 요소의 그림자
- b 요소의 반투명 효과
- c 요소의 회전 효과
- d 요소의 확대 효과

<details>
<summary>정답</summary>

정답: a 요소의 그림자

</details>

### 23. -중복 생략-

### 24. CSS에서 'padding' 속성은 어떤 공간을 설정하는 데 사용되는가?

- a 콘텐츠 영역 주변의 여백
- b 테두리 주위의 공간
- c 콘텐츠의 내부 여백
- d 블록 요소의 수직 간격

<details>
<summary>정답</summary>

정답: - c 콘텐츠의 내부 여백

</details>

### 25. CSS에서 'position: relative;' 속성은 어떤 위치를 기준으로 요소를 배치하는가?

- a 부모 요소를 기준으로 배치
- b 화면 왼쪽 상단을 기준으로 배치
- c 요소 자체를 기준으로 배치
- d 브라우저 창을 기준으로 배치

<details>
<summary>정답</summary>

정답: c 요소 자기 자신을 기준으로 배치

</details>

### 26. CSS에서 'position: absolute;' 속성은 어떤 위치를 기준으로 요소를 배치하는가?

- a 부모 요소를 기준으로 배치
- b 화면 왼쪽 상단을 기준으로 배치
- c 요소 자체를 기준으로 배치
- d 브라우저 창을 기준으로 배치

<details>
<summary>정답</summary>

정답: a 부모(조상) 요소를 기준으로 배치

</details>

### 27. CSS에서 'position: fixed;' 속성은 어떤 위치를 기준으로 요소를 고정시키는가?

- a 부모 요소를 기준으로 고정
- b 화면 왼쪽 상단을 기준으로 고정
- c 요소 자체를 기준으로 고정
- d 브라우저 창을 기준으로 고정

<details>
<summary>정답</summary>

정답: d 브라우저 창(뷰포트)을 기준으로 고정

</details>

### 28. -중복-

### 29. -중복-

## 30. CSS에서 'text-decoration' 속성을 사용하여 텍스트의 밑줄을 없애려면 어떤 값을 사용해야 하는가?

- a underline
- b overline
- c none
- d line-through

<details>
<summary>정답</summary>

정답: c none

</details>

### 31. CSS에서 'float' 속성을 사용하여 요소를 왼쪽으로 부유시킬 때, 어떤 효과가 발생하는가?

- a 요소가 화면 중앙으로 이동
- b 요소가 왼쪽으로 이동하며 텍스트가 주위로 흐름
- c 요소가 상단으로 이동
- d 요소가 우측으로 이동

<details>
<summary>정답</summary>

정답: b 요소가 왼쪽으로 이동하며 텍스트가 주위로 흐름

</details>

### 32. CSS에서 'clear' 속성은 어떤 효과를 가지는가?

- a 요소의 투명도를 조절
- b 요소의 크기를 조절
- c 부모 요소에서 부유 요소의 영향을 받지 않게 함
- d 요소의 배경 이미지를 설정

<details>
<summary>정답</summary>

정답: c 부모 요소에서 부유 요소의 영향을 받지 않게 함

</details>

### 33. CSS에서 'line-height' 속성은 어떤 값의 단위를 사용하여 줄 간격을 설정하는가?

- a px
- b em
- c % (퍼센트)
- d cm

<details>
<summary>정답</summary>

정답: a px

는 띠용?

https://developer.mozilla.org/en-US/docs/Web/CSS/line-height 여기 보면

퍼센트도 가능 하고 em 가능한데???? 심지어 cm 도 됨 ㅋㅋㅋ 문제 자체가 뭐지 싶은데

</details>

### 34. CSS에서 'border-radius' 속성은 무엇을 조절하는 데 사용되는가?

- a 테두리 두께
- b 테두리 색상
- c 테두리 모서리의 둥근 정도
- d 테두리 스타일

<details>
<summary>정답</summary>

정답: c 테두리 모서리의 둥근 정도

</details>

### 35. CSS에서 'box-sizing' 속성은 무엇을 설정하는 데 사용되는가?

- a 요소의 크기
- b 요소의 내부 여백
- c 요소의 외부 여백
- d 요소의 상하 좌우 여백

<details>
<summary>정답</summary>

정답: a 박스 크기를 어떤 것을 기준으로 계산할지 정하는 속성

`box-sizing: content-box | border-box | initial | inherit`

- content-box : 콘텐트 영역을 기준으로 크기를 정한다.
- border-box : 테두리를 기준으로 크기를 정한다.
- initial : 기본값으로 설정한다.
- inherit : 부모 요소의 속성값을 상속받는다.

</details>

### 36. CSS에서 'text-transform' 속성은 어떤 텍스트 변환을 설정하는 데 사용되는가?

- a 텍스트의 색상 변환
- b 텍스트의 대문자/소문자 변환
- c 텍스트의 배경 변환
- d 텍스트의 글꼴 변환

<details>
<summary>정답</summary>

정답: b 텍스트의 대문자/소문자 변환

text-transform속성은 요소의 텍스트를 대문자로 시작하는 방법을 지정합니다.

텍스트를 모두 대문자 또는 모두 소문자로 표시하거나 각 단어를 대문자로 표시하는 데 사용할 수 있습니다.

</details>

### 37. CSS에서 'list-style' 속성은 어떤 요소에 사용되며 어떤 스타일을 설정하는가?

- a 텍스트 요소에 사용되며 글뼴 스타일을 설정
- b 목록 요소에 사용되며 목록 스타일을 설정
- c 이미지 요소에 사용되며 이미지 스타일을 설정
- d 배경 요소에 사용되며 배경 스타일을 설정

<details>
<summary>정답</summary>

정답: b 목록 요소에 사용되며 목록 스타일을 설정

</details>

### 38. CSS에서 'font-weight' 속성은 어떤 텍스트의 속성을 설정하는 데 사용되는가?

- a 글뼴 스타일
- b 텍스트의 굵기
- c 텍스트의 대소문자 변환
- d 텍스트의 테두리 스타일

<details>
<summary>정답</summary>

정답: b 텍스트의 굵기

</details>

### 39. CSS에서 'opacity' 속성은 무엇을 조절하는 데 사용되는가?

- a 텍스트의 투명도
- b 텍스트의 크기
- c 텍스트의 색상
- d 텍스트의 위치

<details>
<summary>정답</summary>

정답: a 텍스트의 투명도

</details>

### 40. CSS에서 'transition' 속성은 어떤 효과를 설정하는 데 사용되는가?

- a 애니메이션 효과
- b 텍스트 스타일
- c 배경 이미지
- d 리스트 스타일

<details>
<summary>정답</summary>

정답: a 애니메이션 효과

</details>

### 41. 다음 중 float 을 해제하는 방법으로 적절한 것을 고르시오

- a Float 된 요소에 display:inline-block 속성을 부여한다.
- b Float 된 요소의 부모요소에 clear:both 속성을 부여한다.
- c Float 된 요소의 다음 형제요소에 overflow:hidden 속성을 부여한다.
- d Float 된 요소의 부모요소에 overflow:hidden 속성을 부여한다.

<details>
<summary>정답</summary>

정답: d overflow:hidden

</details>
