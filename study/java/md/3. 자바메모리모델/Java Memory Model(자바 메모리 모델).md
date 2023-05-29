# Java Memory Model(자바 메모리 모델)

java 의 JVM 이 관리하는 메모리 공간은 크게 3가지 영역으로 나누어짐

- Stack 영역 : 지역변수, 매개변수가 할당되는 영역으로 초기화가 진행되지 않음

- Heap 영역 : 배열과 모든 인스턴스 객체가 할당되는 영역으로 자동 초기화가 진행됨

- Static 영역 or 메소드 영역 : 메소드의 바이트 코드, static 변수가 할당 됨

  스태틱 영역은 크게 코드영역, 데이터영역로 나뉘는데

  - 코드영역: 클래스, 메소드 같은 것들

  - 데이터 영역: 선언한 전역변수 또는 static 변수

## 메모리 배당 과정

![메모리 배당](../../pic/%EB%A9%94%EB%AA%A8%EB%A6%AC%20%EB%B0%B0%EB%8B%B9.png)

## 출처

- [자바 기초 강의 - 2-10강 자바 메모리 구조의 이해](https://www.youtube.com/watch?v=QPulWilGBpk&list=PLOSNUO27qFbtjCw-YHcmtfZAkE79HZSOO&index=12)
