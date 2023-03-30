# Int 와 Integer

이 둘의 차이를 알고 있나?

난 몰랐다 이제부터 알아보도록 하자

## Int

int 는 `변수 타입(Data Type)`이다

    변수는 값을 저장할 수 있는 메모리 상의 공간

을 말한다

그중 int 는 `기본형(primitive type)` 임

## Integer

int 을 표현 해야하는 경우

- 매개변수로 객체를 필료로 할때

- 기본형 값이 아닌 객체로 저장할때

- 객체 간 비교할때

이런 경우에 기본형을 객체로 다루기 위해 사용함

이런 용도의 클래스들을 `래퍼 클래스(Wrapper class)` 라고 부름

    래퍼 클래스는

    객체가 기본 데이터 유형을 래핑하거나 포함하는 클래스
    레퍼 클래스에 대한 객체를 만들 때 포함하고
    이 필드에 기본 유형의 저장이 가능

```java
ArrayList<integer> intList = new ArrayList<>();
intList.add(1);

//

String strNum = "1234";
int intNum = Integer.parseInt(strNum);
System.out.println(intNum); // int 형 1234

//
```

![레퍼클래스](/study/pic/wrapperClasses.jpg)

그밖에 이런것들이 있음

그래서 뭐 어쩌냐면

### int

- 산술 연산 가능

- null 초기화 안됨

### integer

- Unboxing 해야 산술 연산 가능

- null 값 처리 가능

## 레퍼런스

- [int와 Integer는 무엇이 다른가](https://velog.io/@hadoyaji/int%EC%99%80-Integer%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B4-%EB%8B%A4%EB%A5%B8%EA%B0%80)
