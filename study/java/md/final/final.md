# final

[출처는 생활코딩](https://opentutorials.org/course/1223/6145)

추상이 상속을 강제하는 것이라면 final은 상속/변경을 금지하는 규제

상속 하지마 마라

## 1. final

사용 방법은 간단함

```java
static final double PI = 3.14;
```

이렇게 하면

가령

```java
public class CalculatorDemo1 {

    public static void main(String[] args) {

        Calculator c1 = new Calculator();
        System.out.println(c1.PI);
        Calculator.PI = 10; //ERROR
    }

}
```

이렇게 PI를 불러도 값이 고정되어 있기 때문에 오류가 뜸

이렇게 변수의 경우 값을 변경 할 수 없게 하는 용도로 쓰임

메소드나 클래스의 경우 오버라이딩, 상속할 수 없게 하는 용도로 쓰임

```java
class A{
    final void b(){} //METHOD FINAL
}
class B extends A{
    void b(){} //METHOD ERROR
}
```

```java
final class C{ // CLASS FINAL
    final void b(){}
}
class D extends C{} // CLASS ERROR
```
