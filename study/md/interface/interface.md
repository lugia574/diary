# interface

[출처는 생활코딩](https://opentutorials.org/course/1223/6063)

## 1. 문법과 개념

```java
interface I{
    public void z();
}

class A implements I{
    public void z(){}
}
```

클래스 A 뒤의 implements I는 이 클래스가 인터페이스 I를 구현하고 있다는 의미

인터페이스와 상속은 다름

상속이 상위 클래스의 기능을 하위 클래스가 물려 받는 것이라고 한다면,

인터페이스는 하위 클래스에 특정한 메소드가 반드시 존재하도록 강제함

클래스를 선언 할 때는 class를 사용하지만 인터페이스는 interface를 사용

또 상속은 extends를 사용하지만 인터페이스는 implements를 사용

    클래스 A는 인터페이스 I를 '구현' 한다.

## 2. 실질적인 쓰임

가령 계산기 프로젝트를 한다 치자

A 친구는 계산기 기능을 구현해야하고

B 친구는 그 기능을 이용해 프린트값을 출력하는 것을 구현한다고 하자

이럴때 B 친구는 A 친구가 기능을 다 구현할때까지 구경만 하면서 기다리면 안된다

인력, 시간, 돈 낭비다

더미 계산기를 만들어 임의 값을 받는 것으로 퉁치고 본인의 일을 해야할 것이다.

```java
class CalculatorDummy{
    public void setOprands(int first, int second, int third){}
    public int sum(){
        return 60;
    }
    public int avg(){
        return 20;
    }
}
public class CalculatorConsumer {
    public static void main(String[] args){
        CalculatorDummy c = new CalculatorDummy();
        c.setOprands(10,20,30);
        System.out.println(c.sum()+c.avg());
    }
}
```

이렇게 말이다

그렇게 A 친구와 B 친구 모두 본인의 역활을 끝마치고 두 코드를 합칠려고 한다

근데 이런 ㅅㅂ 계산기 매개변수가 2개네?

```java
public void setOprands(int left, int right) {
    // ......
}
```

예제에서는 단순히 변수 3개에서 2개로 줄이면 된다지만,

만약 저게 막 1억줄 짜리 코드 였다면

B 친구는 A 친구의 목을 땄을 것이다.

이런 커뮤니케이션 문제를 줄이기 위해 도입된게 interface 다

```java
public interface Calculatable {
    public void setOprands(int first, int second, int third) ;
    public int sum();
    public int avg();
}
```

이렇게 인터페이스를 구현하고

각각 인터페이스를 implements 해서 각자 코드를 구현한다

`A 친구`

```java
class Calculator implements Calculatable {
    int first, second, third;
    public void setOprands(int first, int second, int third) {
        this.first = first;
        this.second = second;
        this.third = third;
    }
    public int sum() {
        return this.first + this.second + this.third;
    }
    public int avg() {
        return (this.first + this.second + this.third) / 3;
    }
}
```

`B 친구`

```java
class CalculatorDummy implements Calculatable{
    public void setOprands(int first, int second, int third){
    }
    public int sum(){
        return 60;
    }
    public int avg(){
        return 20;
    }
}
public class CalculatorConsumer {
    public static void main(String[] args) {
        CalculatorDummy c = new CalculatorDummy();
        c.setOprands(10, 20, 30);
        System.out.println(c.sum()+c.avg());
    }
}
```

이러고 서로 구현을 끝내고 코드를 합쳤을때

그냥

```java
Calculator c = new Calculator();
```

이렇게 규약을 만들어서

각자가 상대의 일정이나 구현하는 방식에 덜 영향을 받으면서 에플리케이션을 구축 할 수 있다

## 3. 규칙

규칙에 대해 좀 더 알아보자

- 하나의 클래스가 여러개의 인터페이스를 구현 할 수 있다

```java
interface I1{
    public void x();
}

interface I2{
    public void z();
}

class A implements I1, I2{
    public void x(){}
    public void z(){}
}
```

- 인터페이스도 상속이 된다

```java
interface I3{
    public void x();
}

interface I4 extends I3{
    public void z();
}

class B implements I4{
    public void x(){}
    public void z(){}
}
```

- 인터페이스의 맴버는 반드시 public이다

그 인터페이스를 구현한 클래스를 어떻게 조작할 것인가를 규정

그렇기 때문에 외부에서 제어 할 수 있는 가장 개방적인 접근 제어자인 public만을 허용

public을 생략하면 접근 제어자 default가 되는 것이 아니라 public이 된다.

왜냐하면 인터페이스의 맴버는 무조건 public이기 때문

- abstract vs interface

인터페이스와 추상 클래스는 서로 비슷한 듯 다른 기능이다.

인터페이스는 클래스가 아닌 인터페이스라는 고유한 형태를 가지고 있는 반면 추상 클래스는 일반적인 클래스다.

또 인터페이스는 `구체적인 로직이나 상태를 가지고 있을 수 없고`,

추상 클래스는 `구체적인 로직이나 상태를 가지고 있을 수 있다.`
