# Java Memory Model(자바 메모리 모델)

java 의 JVM 이 관리하는 메모리 공간은 크게 3가지 영역으로 나누어짐

- Stack 영역 : 지역변수, 매개변수가 할당되는 영역으로 초기화가 진행되지 않음

- Heap 영역 : 배열과 모든 인스턴스 객체가 할당되는 영역으로 자동 초기화가 진행됨

- Static 영역 or 메소드 영역 : 메소드의 바이트 코드, static 변수가 할당 됨

## 출처

- [자바 기초 강의 - 2-10강 자바 메모리 구조의 이해](https://www.youtube.com/watch?v=QPulWilGBpk&list=PLOSNUO27qFbtjCw-YHcmtfZAkE79HZSOO&index=12)
