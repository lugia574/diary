# JAVA OOT Programming

## 4. CLASS

클래스는 상태와 행위를 가지며 상태를 필드(field), 행위를 (method)라고 한다.

그리고 필드와 메소드 외에 생성자라는 특수한 메소드도 반드시 하나 이상을 가진다.

### 4.1 존재 이유와 기본형식

3에서 다뤘던 코드에서 클래스를 도입해보자

```java
package study.java;

class Print{
    public static String delimiter;
    public static void A() {
        System.out.println(delimiter);
        System.out.println("A");
        System.out.println("A");
    }
    public static void B() {
        System.out.println(delimiter);
        System.out.println("B");
        System.out.println("B");
    }

}

public class MyOOP {
    public static void main(String[] args) {
        Print.delimiter = "----";
        Print.A();
        Print.A();
        Print.B();
        Print.B();

        Print.delimiter = "####";
        Print.A();
        Print.A();
        Print.B();
        Print.B();

    }

}
```

이렇게 된다

연관이 깊은 printA, printB 메소드와 delimiter 변수를 한데 묶어

Print 라는 클래스로 만들고

`Print.` 을 붙여 해당 메소드와 변수를 불러서 구현하는 형식이다

아까보다 훨 깔끔하다

### 4.2 형식

좀 더 깊게 들어가보자

Print 클래스에 들어가 있는

A, B 메소드와 delimiter 변수를 `멤버`라고 부름

또한, 자바는 시작할때부터 끝났때까지 class임

파일 이름과 같은 class 명의 main 메소드를 실행하도록 약속되어 있음

그렇게 만들어진 (파일명이 같은)클래스는 앞에는 `public` 을 붙혀 있어야함

public은 접근제어자인데 이것은 나중에 배울꺼임

이렇게 만들어진 java 파일은 각각 class 파일로 저장이 됨

그렇기에 class를 별도의 파일로 저장해서 사용 할 수 있음

내가 따로 빼고 싶은 class 가 있다면

해당 영역 드래그 선택 후 리팩터링 move 하면 해당 class 이름으로 자바 파일이 생김 ㅋㅋ

개쩐다~
