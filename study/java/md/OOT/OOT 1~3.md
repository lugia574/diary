# JAVA OOT Programming

[출처는 생활코딩](https://www.youtube.com/watch?v=uvYWAfZzb8k&list=PLuHgQVnccGMAb-e41kXPSIpmoz1RvHyN4)

## 1. 소개

method를 다른 언어에서는

function, subroutin, procedural 이라고 부름

`절차지향 프로그래밍`은

프로시저를 이용해서 프로그램을 정리, 정돈하는 프로그램 기법이라 할 수 있음

옛 프로시저 시절에는

메소드로 작은 부품을 만들고 이것을 결합해서 더 큰 프로그램을 만들어 가는 테크닉으로 프로그래밍 했음

대표적으로 **C** 가 있음

---

그러다가 메소드만으로 하는거에 부족함을 느끼고

서로 연관된 메소드와 변수들을 모아서 그룹핑 하고 거기에

이름을 붙여서 정리정돈을 하게 됨

그래서 만든 수납상자가 **CLASS** 임

    클래스를 중심으로 프로그램의 구조를 만들어가는 컴퓨터 프로그래밍 방법론을 객체지향 프로그램잉이라 부름

> OOT 는 메소드와 변수를 그룹핑하고 이름을 붙인것

이 수업이 끝나고 나면

코드를 단정하게 정리정돈 하는 방법을 갈게 될 것.

또 이 방법이 익숙해지면 분신술이라고 할 수 있는 인스턴스를 만들 수 있게 됨

부모클래스의 기능을 자식클래스에게 물려 주는 상속.

클래스의 설계도라고 불리는 인터페이스와 같은 기능들을

이해하게 될것이다~

## 2. 남의 클래스 & 남의 인스턴스

우선 클래스, 인스턴스를 분명하게 이해하기 위해서 실습을 해보자

```java
package study.java;

public class OrhersOOP {
    public static void main(String[] args){
        System.out.println(Math.PI);
        System.out.println(Math.floor(1.8));
        System.out.println(Math.ceil(1.8));
    }
}

```

보면

1. Math 라는 수학 클래스에 PI 라는 변수에 원주율 값이 들어 있는거임

2. Math 라는 클래스에 소수점 값을 버림하는 floor() 라는 메소드

3. 올림 메소드는 ceil()

즉 우리가 코드가 많아짐에 따라 서로 연관된 같은 주제를 가지고 있는

변수와 메소드를 그룹핑한 껍데기 == 클래스 라고 할 수 있음

```java
import java.io.FileWriter;

// .... 생략

new FileWriter("data.txt")
```

파일라이터라고 우리가 어떤 정보를 파일에 기록할 때 사용하는 클래스임

앞에 new가 붙으면 data.txt에 파일을 저장하겠다라는 복제본이 생기는거임

이를 변수에 담고 write로 값들을 넣고 close 하면

```java

package study.java;

import java.io.FileWriter;
import java.io.IOException;

public class OrhersOOP {
    public static void main(String[] args) throws IOException{
        FileWriter f1 = new FileWriter("data.txt");
        f1.write("Hello");
        f1.write(" java");
        f1.close();
    }
}
```

실제로 data.txt 가 생기고 hello java 라고 써져 있음

이번에는

```java
FileWriter f2 = new FileWriter("data2.txt");
f2.write("Hello");
f2.write(" java2");
f2.close();
```

이렇게 f2 로 담고 하면 새로운 data2.txt가 생성됨

Math 같은 경우는 불러서 있는 그대로 썼고

FileWriter 같은 경우 불러서 복제본을 만들어

FileWriter 형태의 인스턴스에 담고

write() 같은 메소드를 이용하여 값들을 집어넣고 close 메소드로 닫음

이렇게 여러가지로 사용이 가능함

여기서 CLASS 는

system, Math , FileWriter

IMSTANCE 는

f1, f2

    클라스는 하나의 기능 상자 견본이고,

    인스턴스는 그 견본으로 만든 상자에 내용물을 각각 다르게 넣어 만들어낸 상품

## 3 변수와 메소드

만약 비슷한 코드에 특정 코드만 수정해서 사용한다고 치자

그러면 이런식으로 구현이 가능함

```java
package study.java;

public class MyOOP {
    public static String delimiter;
    public static void main(String[] args) {
        delimiter = "----";
        printA();
        printA();
        printB();
        printB();

        delimiter = "####";
        printA();
        printA();
        printB();
        printB();
    }
    private static void printA() {
        System.out.println(delimiter);
        System.out.println("A");
        System.out.println("A");
    }
    private static void printB() {
        System.out.println(delimiter);
        System.out.println("B");
        System.out.println("B");
    }
}
```

printA, printB 이렇게 메소드를 만들고

delimiter 변수를 main 클래스 밖으로 빼서 관리하면 굳이 메소드에 일일히 값 안넣어도 됨

여기서 printA, printB, delimiter 는 서로 연관성이 짙음

근데 만약에 이 코드들 말고도 다양한 메소드, 변수들이 있고 위 코드과 연관성이 없다면?

그때부터는 저런 방식도 복잡해질꺼임

그래서 이번에 CLASS 를 써보도록 하자
