# Array(배열)과 List(리스트) 그리고 ArrayList(어레이리스트)의 차이

## 1. Array(배열) 란 무엇인가?

    여러개의 같은 종류의 데이터를 하나로 묶어(그룹핑) 관리 하는 자료구조(data structure)이다.

그렇기에 기본적으로

1.  정해진 공간과 형식을 먼저 선언함

    ```java
    int[] arr = int[5];
    ```

2.  식별자가 있음

    ```java
    arr[2];
    ```

    식별자가 있어서 인지 데이터 조회가 빠름

    크기가 얼마나 크든 해당 데이터에 접근하는데에 항상 똑같은 시간만 소요함

    > 대신 삽입/ 삭제가 느리다네?

- 언어마다 조금식 다른데 자바의 경우 크기가 고정되기 때문에 데이터가 삭제되는 경우 빈 공간이 생겨 메모리가 낭비

- 배열의 크기를 컴파일 이전에 반드시 지정해야 하며, 초기에 크기가 지정되면 변경할 수 없음

## 2. List(리스트) 는 무엇이지?

나는 array 따로 List 따로 arrayList 따로 인줄 알았음

근데 아니였음 그리고 array와 list 는 특성만 다를뿐

같은 `자료구조` 인줄 알았음

근데 아님.

리스트는

    어떤 순서를 가지고 있는 데이터의 집합
    추가/삭제/조회가 가능한 ADT

### 2.2 ADT(abstract data type 추상자료타입)가 뭐냐?

    구조의 속성과 행위를 설명

    즉 어떤 행위에대 설명하지 구조/ 구현이 아님

추상적인거라 구현을 하려면

array 방식을 쓰거나 linked node 방식을 써야함

그게 `ArrayList` 와 `LinkedList` 임

### 2.3 그럼 ArrayList 는 무엇?

    연속적인 공간에 순차적으로 데이터를 저장

- 인덱싱 가능 > 탐색 빠름

- 추가/ 삭제가 비효율적임

### 2.4 LinkedList

    비연속적인 공간에 순서대로 데이터를 저장

- 추가/ 삭제가 쉬움

- 탐색에 오래걸림

---

## 출처

- [[자료구조 알고리즘] 자바의 ArrayList에 대해 알아보고 구현하기](https://www.youtube.com/watch?v=I4_uFyjWZn4)

- [array list 차이 - 쉬운코드](https://www.youtube.com/watch?v=2zF7PpvDwFg)

- [ADT 뜻, 데이터구조와 차이](https://www.youtube.com/watch?v=QcsQKgXemtA)

- [JAVA) List 와 ArrayList 차이](https://yoon-dailylife.tistory.com/7)
