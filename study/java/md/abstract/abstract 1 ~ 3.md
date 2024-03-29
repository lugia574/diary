# abstract

## 1. 문법

추상화에 대해 알아보자

추상화로 지정된 메소드, 클래스는

직접적으로 사용할 수 없고, 반드시 그것을 상속할 클래스를 만들어서 이용해야함

```java
abstract class A{
    public abstract int b();
    //본체가 있는 메소드는 abstract 키워드를 가질 수 없다.
    public abstract int c(){System.out.println("Hello")} // ERROR
    //추상 클래스 내에는 추상 메소드가 아닌 메소드가 존재 할 수 있다.
    public void d(){
        System.out.println("world");
    }
}
public class AbstractDemo {
    public static void main(String[] args) {
        A obj = new A(); // ERROR
    }
}
```

- 추상 클래스는 단 하나의 추상이 있음 추상 클래스가 됨

  ```java
  public abstract int c(){System.out.println("Hello")} // ERROR
  ```

- 추상 메소드는 단순히 시그니처 선언만 될 뿐 로직을 짤수 없음

  ```java
  public void d(){
      System.out.println("world");
  }
  ```

  그렇다고 일반 메소드가 못들어가는 건 아님

  ```java
  public class AbstractDemo {
      public static void main(String[] args) {
          A obj = new A(); // ERROR
      }
  }
  ```

- 추상 클래스는 바로 쓸수 없음

  ```java
  class B extends A{
      public int b(){return 1;}
  }
  ```

  이렇게 상속을 해야하고

  추상 메소드인 b를 꼭 구현 해야함

## 2. 사용 이유

```java
abstract class Calculator{
    int left, right;
    public void setOprands(int left, int right){
        this.left = left;
        this.right = right;
    }
    public abstract void sum();
    public abstract void avg();
    public void run(){
        sum();
        avg();
    }
}

```

계산기 추상화 클래스를 구현함

```java

class CalculatorDecoPlus extends Calculator {
    public void sum(){
        System.out.println("+ sum :"+(this.left+this.right));
    }
    public void avg(){
        System.out.println("+ avg :"+(this.left+this.right)/2);
    }
}
class CalculatorDecoMinus extends Calculator {
    public void sum(){
        System.out.println("- sum :"+(this.left+this.right));
    }
    public void avg(){
        System.out.println("- avg :"+(this.left+this.right)/2);
    }
}
```

단순히 +, - 텍스트 차이지만

이렇게 사용자가 임의로 변경한 상속 메소드를 만듬

```java
public class CalculatorDemo {
    public static void main(String[] args) {
        CalculatorDecoPlus c1 = new CalculatorDecoPlus();
        c1.setOprands(10, 20);
        c1.run();

        CalculatorDecoMinus c2 = new CalculatorDecoMinus();
        c2.setOprands(10, 20);
        c2.run();
    }

}
```

그러면 이런식으로 사용 가능함

여기서 `this.left+this.right` 는 중복되니까

```java
int _sum() {
    return this.left + this.right;
}
```

메소드를 추상메소드에 추가하고

```java
class CalculatorDecoPlus extends Calculator {
    public void sum(){
        System.out.println("+ sum :"+_sum());
    }
    public void avg(){
        System.out.println("+ avg :"+_sum()/2);
    }
}
```

이렇게 하면 중복을 피할 수 있음

- 추상 클래스를 사용하는 이유

상황에 따라서 동작 방법이 달라지는 메소드(sum, avg)는 추상 메소드로 만들어서 하위 클래스에서 구현하도록 함

모든 클래스의 공통분모(setOprands, run)의 경우에는 상위 클래스에 두어서 코드의 중복, 유지보수의 편의성 등을 꾀할 수 있다

### 3. 디자인 패턴

프로그래밍이라는 것은 반복되는 패턴

이런 패턴들을 모아서 정리한 것이 디자인 패턴(design pattern)

디자인 패턴의 장점은 크게 두가지이다.

- 하나는 좋은 설계를 단기간에 학습할 수 있다는 점

  물론 비교적 단기간이라는 뜻

- 다른 하나는 소통에 도움이 된다는 점

  설계 방법을 토의하거나 전달할 때 설계 방법에 따라 적절한 이름이 있다면 상호간에 생각을 일치시키는 데 큰 도움이 될 것
