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

    static 은 class 소속이고

    없는 것은 instance 소속이다

## 7. 생성자(Constructor)와 this

- 생성자

  초기에 주입할 필요가 있는 값을 전달하거나 초기에 작업을 수행하도록 할때 쓴다

가령

```java
FileWriter f1 = new FileWriter("data.txt");
```

이전에 썼던 FileWriter 를 new로 인스턴스 할때 썼던 `data.txt` 가 생성자를 해서 쓸 수 있는 거다

생성자를 쓰는 이유는

```java
Print p1 = new Print();
Print p2 = new Print();

p1.delimiter = "----";
p2.delimiter = "####";



p1.A();
p2.A();
```

이것을 보면 인스턴스를 생성하고

그리고 나서 delimiter 를 박아준다

만약 내가 깜박해서 delimiter 를 안 박는다면?

누가 내가 만든 Print 클래스 가져와 인스턴스해서 쓸려고 하는데

delimiter를 박아줘야하는 걸 몰라서 그냥 인스턴스만 해서 쓴다면?

문제가 생길 수 있다

그러니까 생성할때 같이 값을 넣게 하는거다

그럼 이제 생성자를 만들어보자

클래스명과 똑같은 이름의 메소드를 정의하면 걔가 생성자임

```java
class Print{
    public String delimiter;
    public Print(String str) {
        delimiter= str;
    }
    //... 생략
}
```

이럼 됨

생성자는 static 이러던가 return 데이터 타입 같은거 지정 안해도 됨

만약에 생성자 매개변수가 str이 아니라 delimiter면 어떻게 될까?

```java
    public String delimiter;
    public Print(String delimiter) {
        delimiter= delimiter
    }
```

이럼 개판이 되는거임

백날 인스턴스할때 delimiter에 string 값을 박아도 delimiter에 안 들어감

이처럼

겹치거나 해서 문제가 생기지 않게 하기 위해 `this`를 씀

- this

  클래스가 인스턴스화 되었을때의 인스턴스를 가리키는 특수한 기능

```java
package study.java;

class Print{
    public String delimiter;
    public Print(String delimiter) {
        this.delimiter= delimiter;
    }
    public  void A() {
        System.out.println(this.delimiter);
        System.out.println("A");
        System.out.println("A");
    }
    public  void B() {
        System.out.println(this.delimiter);
        System.out.println("B");
        System.out.println("B");

    }

}
```

이렇게 쓸 수 있음

this 하면 해당 인스턴스의 delimiter를 가리키는 거니까

마찬가지로 메소드 A,B 의 print(delimiter) 역시 this 를 갈이키는게 올바른 표현이라 할 수 있음

## 8 활용

이제 좀 실용적인 사례에 적용해보면서 복습 ㄱㄱ

```java
public class AccountingApp {
    // 공급가액
    public static double valueOfSupply;
    // 부가가치세율
    public static double vatRate = 0.1;

    public static double getVAT() {
        return valueOfSupply * vatRate;
    }

    public static double getTotal() {
        return valueOfSupply + getVAT();
    }

    public static void main(String[] args) {
        valueOfSupply = 10000.0;
        System.out.println("Value of supply : " + valueOfSupply);
        System.out.println("VAT : " + getVAT());
        System.out.println("Total : " + getTotal());

    }

}
```

### 8.1 클래스화

```java
package study.java;

class App{
    // 공급가액
    public static double valueOfSupply;
    // 부가가치세율
    public static double vatRate = 0.1;

    public static double getVAT() {
        return valueOfSupply * vatRate;
    }

    public static double getTotal() {
        return valueOfSupply + getVAT();
    }

}

public class AccountingApp {
    public static void main(String[] args) {
        App.valueOfSupply = 10000.0;

        System.out.println("Value of supply : " + App.valueOfSupply);
        System.out.println("VAT : " + App.getVAT());
        System.out.println("Total : " + App.getTotal());

    }

}
```

### 8.2 인스턴스화

```java
package study.java;

class App{
    // 공급가액
    public double valueOfSupply;
    // 부가가치세율
    public static double vatRate = 0.1;

    public App(double valueOfSupply){
        this.valueOfSupply =valueOfSupply;
    }

    public double getVAT() {
        return this.valueOfSupply * vatRate;
    }

    public double getTotal() {
        return this.valueOfSupply + getVAT();
    }

}

public class AccountingApp {
    public static void main(String[] args) {
        App app1 = new App(10000.0);
        App app2 = new App(20000.0);

        System.out.println("Value of supply app1 : " + app1.valueOfSupply);
        System.out.println("Value of supply app2 : " + app2.valueOfSupply);

        System.out.println("VAT app1 : " + app1.getVAT());
        System.out.println("VAT app2 : " + app2.getVAT());

        System.out.println("Total app1 : " + app1.getTotal());
        System.out.println("Total app2 : " + app2.getTotal());
        System.out.println("Total app1+app2 : "+ app1.getTotal() + app2.getTotal());


    }

}
```

부가세는 기본적으로 모두 동일하니까 그냥 클래스 소속인 static 을 부여하는게 나음

vatRate 를 static 으로 하면 좋은점

그럼 나중에 부가세가 바뀌면 값만 바꿔줘도 다른 인스턴스에 다 적용되서 유지보수성에 유용함

또한 인스턴스들은 vatRate를 새로 만들지 않고 클래스에서 참조를 할꺼니 데이터 절약면에서도 유용함
