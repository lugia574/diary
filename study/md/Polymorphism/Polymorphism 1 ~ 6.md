# Polymorphism

[출처는 생활코딩](https://opentutorials.org/course/1223/6127)

## 1. 메소드와 다형성

다형성이란 하나의 메소드나 클래스가 있을 때 이것들이 다양한 방법으로 동작하는 것을 의미함

그냥 overloading 생각하면 됨

```java
public void a(int param){
    System.out.println("숫자출력");
    System.out.println(param);
}
public void a(String param){
    System.out.println("문자출력");
    System.out.println(param);
}
```

> 참고로 overloading이 다형성인지 아닌지에 대해서는 이견이 존재 라는데 ㅅㅂ 이게 다형성이지 왜 아냐 ㅅㅂ

## 2. 클래스와 다형성

```java
A obj = new B();
```

여기에 이상한 점은 무엇일까

바로 B 인스턴스를 하는데 타입은 부모 클래스인 A 라는 점이다

```java
class A{
    public String x(){return "x";}
}
class B extends A{
    public String y(){return "y";}
}
public class PolymorphismDemo1 {
    public static void main(String[] args) {
        A obj = new B();
        obj.x();
        obj.y(); //ERROR
    }
}
```

A 타입으로 받은 B 인스턴스 `obj` 는

x 메소드는 호출이 되지만 y 메소드는 에러가 뜸

왜냐면 A 타입이기 때문에 A 클래스에서는 y 메소드가 정의되지 않았기 때문에

한마디로 A 타입으로 했기 때문에 A 클래스에 정의 된것 밖에 못쓴다는 소리다

왜 이딴 짓을 했을까?

그냥 A 클래스를 인스턴스하면 되지 굳이 뭐하러?

좀 더 들어가보자

```java
class A{
    public String x(){return "A.x";}
}
class B extends A{
    public String x(){return "B.x";}
    public String y(){return "y";}
}
public class PolymorphismDemo1 {
    public static void main(String[] args) {
        A obj = new B();
        System.out.println(obj.x());  // B.x 가 출력됨
    }
}
```

보면 B 클래스가 x 메소드를 오버라이딩 한 값을 출력하고 있음

## 3. 클래스와 다형성 2

```java
class A{
    public String x(){return "A.x";}
}
class B extends A{
    public String x(){return "B.x";}
    public String y(){return "y";}
}
class B2 extends A{
    public String x(){return "B2.x";}
}
public class PolymorphismDemo1 {
    public static void main(String[] args) {
        A obj = new B();
        A obj2 = new B2();
        System.out.println(obj.x()); // B.x 출력
        System.out.println(obj2.x()); // B2.x 출력
    }
}
```

예제를 보자

서로 다른 클래스 B와 B2가 동일한 데이터 타입 A로 인스턴스화 되었다

두 인스턴스의 메소드 x를 호출한 결과는 서로 다르다

이것이 상속과 오버라이딩 그리고 형변환을 이용한 다형성이다

---

즉 부모 클래스에 정의된 것만 실행 할 수 있지만

결국 실행하는건 자식 클래스라는 소리임

왜 이럴까?

이렇게 할꺼면 그냥 자식 클래스 타입으로 인스턴스 해도 똑같이 결과를 출력할텐데

```java
B obj = new B();
B2 obj2 = new B2();
```

또, 굳이 y 메소드는 실행 안되게 부모 타입으로 인스턴스 할 이유가 있나?

이럴꺼면 y 메소드 구현 안했음 될꺼 아녀

## 4. 실전 예제

왜 쓰는지 이제 알아보자

```java
bstract class Calculator{
    int left, right;
    public void setOprands(int left, int right){
        this.left = left;
        this.right = right;
    }
    int _sum() {
        return this.left + this.right;
    }
    public abstract void sum();
    public abstract void avg();
    public void run(){
        sum();
        avg();
    }
}
class CalculatorDecoPlus extends Calculator {
    public void sum(){
        System.out.println("+ sum :"+_sum());
    }
    public void avg(){
        System.out.println("+ avg :"+(this.left+this.right)/2);
    }
}
class CalculatorDecoMinus extends Calculator {
    public void sum(){
        System.out.println("- sum :"+_sum());
    }
    public void avg(){
        System.out.println("- avg :"+(this.left+this.right)/2);
    }
}
public class CalculatorDemo {
    public static void execute(Calculator cal){
        System.out.println("실행결과");
        cal.run();
    }
    public static void main(String[] args) {
        Calculator c1 = new CalculatorDecoPlus();
        c1.setOprands(10, 20);

        Calculator c2 = new CalculatorDecoMinus();
        c2.setOprands(10, 20);

        execute(c1);
        execute(c2);
    }
}
```

클래스 CalculatorDemo의 execute 메소드는

CalculatorDecoPlus와 CalculatorDecoMinus 클래스의 메소드 run을 호출하면서

그것이 '실행결과'라는 사실을 화면에 표시하는 기능을 가지고 있다.

이 때 메소드 execute 내부에서는 매개변수로 전달된 객체의 메소드 run을 호출하고 있다.

만약 메소드 execute의 매개변수 데이터 타입이 Calculator가 아니라면 어떻게 해야할까?

위와 같은 로직을 처리 할 수 없을 것이다.

메소드 execute 입장에서는 매개변수로 전달된 값이 Calculator이거나

그 자식이라면 메소드 run을 가지고 있다는 것을 보장 받을 수 있게 되는 것이다.

이 맥락에서의 다형성이란 하나의 클래스(Calculator)가

다양한 동작 방법(ClaculatorDecoPlus, ClaculatorDecoMinus)을 가지고 있는데

이것을 다형성이라고 할 수 있겠다.

## 5. 인터페이스와 다형성

인터페이스 역시 다형성이 가능함

```java
interface I{}
class C implements I{}
public class PolymorphismDemo2 {
    public static void main(String[] args) {
        I obj = new C();
    }
}
```

이런식으로

마찬가지로

```java
D obj = new D(); // D >> A, B 둘다 구현함
I2 objI2 = new D(); // I2 >> A 메소드만 선언 있음
I3 objI3 = new D(); // I3 >> B 메소드만 선언 있음

obj.A();
obj.B();

objI2.A();
objI2.B(); // ERROR

objI3.A(); // ERROR
objI3.B();
```

이것은 인터페이스의 매우 중요한 특징 중의 하나를 보여준다.

인스턴스 objI2의 데이터 타입을 I2로 한다는 것은

인스턴스를 외부에서 제어할 수 있는 조작 장치를 인스턴스 I2의 맴버로 제한한다는 의미가 된다.

인스턴스 I2와 I3로 인해서 하나의 클래스가 다양한 형태를 띄게 되는 것이다.

## 6. 인터페이스와 다형성 2

비유를 해보자

```java
interface father{}
interface mother{}
interface believer{}
interface programmer{
    public void coding();
}
class Steve implements father, programmer, believer{
    public void coding(){
        System.out.println("fast");
    }
}
class Rachel implements mother, programmer{
    public void coding(){
        System.out.println("elegance");
    }
}
```

스티브는 아빠고 프로그래머고 신자이다

리첼은 엄마고 프로그래머임

```java
public class Workspace{
    public static void main(String[] args){
        programmer employee1 = new Steve();
        programmer employee2 = new Rachel();

        employee1.coding();
        employee2.coding();
    }
}
```

직장에서는 스티브가 아빠고 신자인게 상관이 없음 오직 프로그래머로써만 필요함

마찬가지로 리첼 역시 프로그래머로써 필요함

그렇기에 프로그래머 타입인거임

같은 interface 일지라도

리첼은 `elegance` 하고

스티브는 `fast` 로

각자 오버라이딩되어

수행한 결과는 다르다
