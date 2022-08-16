# Access modifier

[출처는 생활코딩](https://opentutorials.org/course/1223/6061)

## 1. 자유와 규제

사용하는 입장에서 누가 이것을 사용할 수 있는가에 대한 권한에 차등을 주는 것

지금부터 배울 추상 클래스, final, 접근 제어자, 인터페이스 등은 바로 이 규제에 해당함

이제 접근 제어자에 대해서 알아보자.

## 2. 문법

```java
class A {
    public String y(){
        return "public void y()";
    }
    private String z(){
        return "public void z()";
    }
    public String x(){
        return z();
    }
}
public class AccessDemo {
    public static void main(String[] args) {
        A a = new A();
        System.out.println(a.y());

        //System.out.println(a.z());  ..ERROR

        System.out.println(a.x());
    }
}
```

이렇다고 했을때 `a.y()` 같은 경우는 잘 실행되지만

`a.z()` 는 에러를 뱉음

이 둘의 차이점은 `public` 과 `private` 임

재밋는 거는 `a.x()` 의 경우

public 메소드이긴 하지만 private z를 출력하는 함수인데

이것은 또 main에서 잘 나옴 ㅋㅋ

이는 같은 A 클래스 내에 z 를 접근하는거니까 private 접근이 가능한거임

    private : 내부만 접근

    public : 외부에서도 접근

## 3. 접근제어자를 사용하는 이유

앱이 커지고 많이 사용될수록 망가질 확률이 높아진다

망가지는 가장 큰 이유로는 사용자다

객체 내부적으로 사용하는 변수나 메소드에 접근함으로서 개발자가 의도하지 못한 오동작을 일으키게 되는 것

문제로부터 객체의 로직을 보호하기 위해서는 맴버에 따라서 외부의 접근을 허용하거나 차단해야 할 필요가 생김

접근 제어자를 사용하는 또 다른 이유는 사용자에게 객체를 조작 할 수 있는 수단만을 제공함으로서

결과적으로 객체의 사용에 집중 할 수 있도록 돕기 위함

```java

class Calculator{
    private int left, right;

    public void setOprands(int left, int right){
        this.left = left;
        this.right = right;
    }
    private int _sum(){
        return this.left+this.right;
    }
    public void sumDecoPlus(){
        System.out.println("++++"+_sum()+"++++");
    }
    public void sumDecoMinus(){
        System.out.println("----"+_sum()+"----");
    }
}

public class CalculatorDemo {
    public static void main(String[] args) {
        Calculator c1 = new Calculator();
        c1.setOprands(10, 20);
        c1.sumDecoPlus();
        c1.sumDecoMinus();
    }
}
```

보면

```java
private int left, right;
```

이렇게 변수를 private 으로 외부 접근을 막고 있음

만약 public으로 외부 접근을 허용하면

그냥 중간에 `c1.left=-1000000000000` 해버려서 원하는 값을 못 얻게 될 수 도 있음

이렇기에 private 으로 외부 접근을 막고

```java
public void setOprands(int left, int right){
    this.left = left;
    this.right = right;
}
```

해당 변수는 정해진 방법을 통해서만 접근 가능하도록 이렇게 조치를 한거임

저기서 변수값이 음수는 못들어가게 조건절로 제한을 두면 -100000000 같은 수는 들어가지 않을꺼임

```java
private int _sum(){
    return this.left+this.right;
}
public void sumDecoPlus(){
    System.out.println("++++"+_sum()+"++++");
}
public void sumDecoMinus(){
    System.out.println("----"+_sum()+"----");
}
```

또한 같은 기능을 공유하는 경우 private 으로 보호해 내부적으로 처리하고,

계산된 결과를 외부에 출력해주는 메소드는 sumDecoPlus, sumDecoMinus에서 처리 할 수 있음

## 4. 세밀한 제어

접근 제어자는 public과 private외에도 두가지가 더 있음

그건 바로 protected과 default

설명 들어보니까 솔까 이거 나보고 이거 적용해서 프로그래밍 하라면 자신없음

기껏해봐야 public, private 쓰지 protected과 default 까지 쓸 역량이 안됨

설명도 대충 뭔소린지는 알겠는데

면접가서 설명하라고 하면 ㅈ도 못할듯 시벌

| 구분　　  | 　같은 클래스　 |   같은 패키지　   | 다른 패키지/ 서브클래스 | 관계없음 |
| :-------: | :-------------: | :---------------: | :---------------------: | :------: |
|  public   |  　 　　　 ⭕   | 　　　　　　　 ⭕ |      　　　　　 ⭕      |    ⭕    |
| protected |    　　　 ⭕    | 　　　　　　　 ⭕ |      　　　　　 ⭕      |    ❌    |
|  default  |  　　　　　 ⭕  | 　　　　　　　 ⭕ |      　　　　　 ❌      |    ❌    |
|  private  |  　　　　　 ⭕  | 　　　　　　　 ❌ |      　　　　　 ❌      |    ❌    |

우선 이렇게만 알아두자

## 5. 클래스의 접근 제어자

지금까지는 클래스 멤버들 (메소드, 변수)을 배웠고

이제는 클래스의 접근제어자를 알아보자

별거 없음

클래스의 접근 제어자는 총 2개로 `public과` `default` 임

default는 접근 제어자를 붙이지 않은 경우 default가 됨

클래스의 접근 제어자는 패키지와 관련된 개념

    즉 접근 제어자가 public인 클래스는 다른 패키지의 클래스에서도 사용할 수 있고,

    default인 경우는 같은 패키지에서만 사용 가능

```java
package org.opentutorials.javatutorials.accessmodifier.inner;
public class PublicClass {}
```

```java
package org.opentutorials.javatutorials.accessmodifier.inner;
class DefaultClass {}
```

라고 했을때

```java
package org.opentutorials.javatutorials.accessmodifier.inner;
public class ClassAccessModifierInnerPackage {
    PublicClass publicClass = new PublicClass();
    DefaultClass defaultClass = new DefaultClass();
}
```

같은 inner 패키지에 있어서

두 클래스 모두 인스턴스 할 수 있음

```java
package org.opentutorials.javatutorials.accessmodifier.outter;
import org.opentutorials.javatutorials.accessmodifier.inner.*;
public class ClassAccessModifierOuterPackage {
    PublicClass publicClass = new PublicClass();
    DefaultClass defaultClass = new DefaultClass(); //ERROR
}
```

하지만 outter 라는 다른 패키지에서 inner 패키지에 있는 애들을 쓰려면

default 클래스는 오류를 뱉음

public 을 쓸려면 한가지 중요한 제약이 있는데

public 클래스가 포함된 소소코드는 public 클래스의 클래스 명과 소스코드의 파일명이 같아야 함

그 말은 하나의 소스 코드에는 하나의 public 클래스가 존재 할 수 있다는 의미
