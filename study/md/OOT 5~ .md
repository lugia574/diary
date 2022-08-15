# JAVA OOT Programming

## 5. INSTANCE

인스턴스에 대해 알아보자

클래스에서 복사한 복제본 하나하나가 인스턴스임

이전에 만들었던 Print 는 분명 개쩔긴하지만

아직 문제가 있다

가령

```java
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

        Print.delimiter = "----";
        Print.A();
        Print.B();

        Print.delimiter = "####";

        // ....
        Print.delimiter = "----";
    }

}

```

이런식으로 `Print.delimiter` 를

주기적으로 바꿔서 코드를 진행해야 한다면 불편함이 생길 수 밖에 없다

이것을 해결 해주는 것이 인스턴스다

```java
package study.java;

public class MyOOP {
    public static void main(String[] args) {
        Print p1 = new Print();
        Print p2 = new Print();

        p1.delimiter = "----";
        p2.delimiter = "####";

        p1.A();
        p1.A();
        p1.B();
        p1.B();

        p2.A();
        p2.A();
        p2.B();
        p2.B();

        p1.A();
        p2.A();

        //....
    }

}
```

이렇게 p1, p2 인스턴스를 만들어

각각 delimiter를 부여한 후

각각 별개로 쓰면서 훨씬 간편하게 구현 할 수 있게 되었다.

여기서 Print 클래스에 static 을 없애줘야

인스턴스 사용이 가능해지는데

그 이유를 이제 알아보자

## 6. STATIC

static에 대해 알아보자

static이라는 의미는 '정적인, 움직이지 않는다. '는 뜻

```java
class Foo {
    public static String ClassVar = "I ClassVar";
    public String InstanceVar = "I InstanceVar";

    public static void classMethode(){
        System.out.println(ClassVar); // OK
        System.out.println(InstanceVar); // ERROR
    }

    public void InstancMethode(){
        System.out.println(ClassVar); // OK
        System.out.println(InstanceVar); // OK
    }
}

public class StaticApp {
    public static void main(String[] args) {
        System.out.println(Foo.ClassVar); //OK
        System.out.println(Foo.InstanceVar); //ERROR

        Foo.classMethode(); // OK
        Foo.InstanceVar(); // ERROR
    }
}
```

static 을 지정한 변수의 경우

main 에서 불러 올 수 있음

근데, static이 없는 변수는 불러 올 수 가 없음

마찬가지로 static 메소드는 불러 올 수 있는데

그렇지 않는 InstancMethode 는 불러 올 수 없음

얘내들은 `인스턴스화` 하면 부를 수 있음

```java
Foo f1 =new Foo();

System.out.println(f1.ClassVar);
System.out.println(f1.InstanceVar);
f1.classMethode();
f1.InstancMethode();
```

인스턴스 한다고 static을 못 쓰는 것도 아님

근데 여기서 static 을 한것과 안한것의 차이가 생김

인스턴스를 하면 클래스에 있는 것들을 복제 해 오는데

static이 부여된 것들은 값을 복제 하지 않고

해당 클라스를 `참조` 함

그렇기에 만약 Foo 클래스에 가서`classVar` 변수 값을 바꾼다면

f1 의 `classvar` 역시 바뀌고

반대로 f1 의 `classvar` 값을 바꾸면 Foo 클래스 역시 바뀜

가령

```java
Foo f1 =new Foo();
Foo f2 =new Foo();

System.out.println(f1.ClassVar); // I ClassVar
System.out.println(f1.InstanceVar); // I InstanceVar

f1.ClassVar = "changed by f1";
System.out.println(Foo.ClassVar); // changed by f1
System.out.println(f2.ClassVar); // changed by f1

f1.InstanceVar = "changed by f1";
System.out.println(f1.InstanceVar); // changed by f1
System.out.println(f2.InstanceVar); // I InstanceVar
```

이렇게 됨

static 안 준것은 인스턴스 하면 각각 값을 가지고 있기에

값이 다름

이를 그림으로 표현하면

![](/study/pic/static.png)

[출처는 생활코딩](https://www.youtube.com/watch?v=hvTuZshZvIo&list=PLuHgQVnccGMAb-e41kXPSIpmoz1RvHyN4&index=7)

이렇게 된다
