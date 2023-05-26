# final

~~추상이 상속을 강제하는 것이라면 final은 상속/변경을 금지하는 규제~~

~~상속 하지마 마라~~

final 은 클래스, 필드, 메소드, 지역변수, 파라미터에 적용될 수 있고 어디에 적용되느냐에 따라 기능이 다름

- 클래스에 final은 상속을 허용하지 않음

- 메소드의 final은 오버로딩 금지를 의미

- 필드, 지역변수, 파라미터의 final은 한번 초기화 이후 다른 값으로 변경 할 수 없음

  final 필드의 초기화 방식은 필드 선언 시점의 초기화, 초기화 블록, 생성자를 통한 초기화로 총 3가지 초기화 방법이 있음

````java
public class FinalExam{
    private final String message = "Final"; // 1
    {// 초기화 블럭
        message = "Final"; // 2
    }

    public FinalExam{
        this.message = "Final";  // 3

    }
    // 위의 3개의 방법 중 하나만 써야함 지금 처럼 하면 에러남

    public final void showMessage(){
        System.out.println(memssage);
    }

    public void showMessage(final String message){
        message = "newFinal"; // 이러면 에러남
        System.out.println(memssage);
    }
}

## 1. final

사용 방법은 간단함

```java
static final double PI = 3.14;
````

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

## 출처

- [출처는 생활코딩](https://opentutorials.org/course/1223/6145)

- [자바 기초 강의 - 2-11강 static과 final의 이해(1)](https://www.youtube.com/watch?v=TzINBAwTCKc&list=PLOSNUO27qFbtjCw-YHcmtfZAkE79HZSOO&index=13)
