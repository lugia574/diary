# Inheritance (상속)

## 1. 수업소개

자바에서 객체를 상속하는 방법을 배워 볼꺼임

```java
package study.java.Inheritance;

class Cal {
    public int sum (int v1,int v2){
        return v1+ v2;
    }
}

public class InheritanceAPP {
    public static void main(String[] args) {
        Cal cal1 = new Cal();

        System.out.println(cal1.sum(1, 2));
    }
}
```

이럴때 만약 내가 Cal 직접적으로 수정하지 않고

기능을 추가 하고 싶으면 어떻게 해야할까?

걍 새로 만드는 거임 Cal2 클래스 만들고 추가하면 됨

근데 이럼 코드가 중복되자나

너무 비효율적이야 이거 좀만 길어져도 개판이고

그래서 나온게 상속

하는건 간단함

확장한다는 의미의 `extends` 를 붙히면 됨

```java
package study.java.Inheritance;

class Cal {
    public int sum (int v1,int v2){
        return v1+ v2;
    }
}

class CalInheritance extends Cal{

}
```

그럼 이런식으로 됨

상속은 메소드 확장, 상속해서 다른 클래스가 갖도록 하는 것을 통해서

재사용성을 높이고, 유지보수성, 가독성을 높임

코드양도 줄이고

## 2. 상속

    상속은 연관있는 클래스들에 대해 공통적인 구성요소를 정의하고, 이를 대표하는 클래스를 정의

- 상속관계는 "is a" 관계를 의미하며 extends 키워드를 이용해 상속관계를 정의

- 상속관계에서 상속을 받는 클래스를 sub Class, derived Class, extends Class, child Class 라고 부름

- 상속관계에서 상속을 제공하는 클래스는 super Class, base Class, parents Class 라고 함

### 상속의 이해

- 자식클래스는 부모클래스를 상속 받아서 부모클래스의 모든 자원(속성, 메소드)을 사용할 수 있음

  ※ 한가지 예외 사항이 있는데

  부모 클래스에서 정의된 `private field, private method` 같은 경우는 접근 할 수 없음

- 자식클래스는 부모클래스에 없는 필드, 메소드를 정의하여 기능을 추가 할 수 있음

- 상위클래스에 정의된 메소드를 재정의하여 다르게 동작시킬 수 있음(`오버라이딩`)

### protected

- 상속이 되는 부모클래스에 protected 접근 지정자로 정의된 구성요소는 자식 클래스 구성요소가 가능

- 자식 클래스는 부모 클래스의 protected, public 구성요소에 대해 this 접근이 가능

```java
public class Shape{
    protected int x;
    protected int y;
    protected Color color;

    public void draw(){
        System.out.println("Drawing Shape");
    }
}

public class Rectangle extends Shape{
    private int width;
    private int height;

    public void resize(int width, int height){
        this.width = watch;
        this.height = height;
    }

    public void move(int x, int y){
        this.x = x;
        this.y = y;
    }
}
```

### 상속관계에서 생성자 호출 과정

- 상속 구조에서 가장 상위 부모 클래스부터 인스턴스화가 진행됨

- 상속관계에서 자식클래스를 인스턴스화 하면 부모 클래스의 객체도 인스턴스화가 진행됨

- 자식 클래스의 객체가 인스턴스화 되기 위해서는 먼저 부모 클래스의 객체 인스턴스화가 되어야함

```java
public class Art{
    public Art(){
        System.out.println("Art");
    }
}

public class Drawing extends Art{
    public Drawing(){
        System.out.println("Drawing");
    }
}

public class Cartoon extends Drawing{
    public Cartoon(){
        System.out.println("Cartoon");
    }
}
```

이렇다 할때 Art > Drawing > Cartoon 순으로 println 이 실행됨

> 그리고 Art 클래스는 최상위 클래스인 Object 클래스를 상속하고 있음

![메모리생성](../../pic/%EB%A9%94%EB%AA%A8%EB%A6%AC%20%EC%83%9D%EC%84%B1.png)

### Super

- Super 생성자는 자식클래스에서 명시적으로 부모클래스의 생서자를 호출 하는것

- 상속관계에서 부모클래스의 생성자 호출을 외부에서 명시적으로 지정할 수 없음

- 자바는 자식클래스의 객체가 인스턴화될 때 기본적으로 부모클래스의 디폴트 생성자를 호출함

- 부모클래스에 디폴트 생성자가 정의되지 있지 않다면, 자식클래스는 명시적으로 부모클래스의 생성자를 호출해야함

```java
public class Em{
    private String name;

    // 사용자 정의 생성자
    public Em(String nam){
        this.name = name;
    }
}
public class Dev extends Em{
    private double salary;

    public Dev(String name){
        super(name);
    }

    public void setSalary(double salary){
        this.salary = salary;
    }

    public void getSalary(){
        return salary;
    }
}
```

## 3. 기능의 개선과 발전

사실 위의 코드는 개 쓰레기임

CalInheritance 는 확장만 했을뿐 아무것도 안했기 때문에

사실상 Cal 쓴거랑 하나도 다르지 않음

이제 여기에 기능을 추가 해보자

```java
class CalInheritance extends Cal{
    public int minus (int v1,int v2){
        return v1- v2;
    }
}
```

끝임

존나 쉬움

그럼 이제 개선을 해보자

내가 기존의 Cal 클래스의 sum 을 좀 바꿔서 써보고 싶어

이럴때는

```java
class CalInheritance extends Cal{
    public int minus (int v1,int v2){
        return v1- v2;
    }

    //Overriding
    public int sum (int v1,int v2){
        System.out.println("cal2");
        return v1+ v2;
    }
}
```

이렇게 추가하면 됨

기능을 `재정의`했다 해서 `오버라이딩(Overriding}` 이라 부름

## 3. Overriding VS Overloading

참 헷갈리 쉬운 오버라이딩과 오버로딩의 차이점에 대해 알아보자

오버라이딩은 부모 위에 올라타서 덮어씌었다 >> 재정의 >> 오버라이딩

오버로딩은 과적하다 라는 뜻을 가지고 있음

오버로딩은 상속이랑은 관계가 없음

Cal 클래스는 sum 메소드를 가지고 있음

긍데 자바는 같은 이름의 메소드를 여러개 과적할 수 있음

어떻게? 형태만 다르면

```java
class Cal {
    public int sum (int v1,int v2){
        return v1+ v2;
    }

    // Overloading
    public int sum (int v1,int v2,int v3){
        return v1+ v2+v3;
    }
}
```

이러면

```java
System.out.println(cal.sum(1, 2, 3));
```

라고 했을때 아래의 매개변수 3개를 가진 sum 실행하게 됨

얘는 단순히 메소드이기 때문에

상속된 CalInheritance 역시 그대로 가지게 될꺼임

overloading 과적. 기존에 존재하는 method와 동일한 이름의 method를 형태만 다르게 사용

이라 할 수 있다~

## 4. this & super

상속에서 굉장히 중요한 this, super 에 대해 알아보자

    this 는 자기 자신

    super 는 부모를 나타낸다

코드가 존나 단순해서 굳이 이럴 필요는 없지만

가령 sum 기능이 1억줄이라고 치고 거기다 v3 만 더 해준다고 하면

```java
class Cal {
    public int sum (int v1,int v2){
        return v1+ v2;
    }
     // Overloading
    public int sum (int v1,int v2,int v3){
        return this.sum(v1, v2)+v3;
    }

}
```

이런식으로 this로 자기자신 불러다가 할 수 잇음

super 는

```java
class CalInheritance extends Cal{
    public int minus (int v1,int v2){
        return v1- v2;
    }

    //Overriding
    public int sum (int v1,int v2){
        System.out.println("cal2");
        return super.sum(v1, v2);
    }
}
```

이런식으로 사용 할 수 있음

## 5. 상속과 생성자

만약 생성자가 있는 클래스를 상속하려면 어떻게 될까

```java
class Cal {
    int v1,v2;
    Cal (int v1, int v2){
        System.out.println("Cal init");
        this.v1 = v1;
        this.v2 = v2;
    }

    public int sum() {
        return this.v1+v2;
    }
}
```

이러면 상속하는 자식 클래스는 부모의 생성자를 무조건 실행 시켜줘야한다

```java
class CalInheritance extends Cal{


    CalInheritance(int v1, int v2) {
        super(v1, v2);
        System.out.println("Cal2 init");

    }


    public int minus (){return this.v1-v2;}
}
```

생성자를 그대로 super 하고 뭐 추가 할꺼 있음 추가 하면 됨

```java

public class InheritanceAPP {
public static void main(String[] args) {
Cal cal1 = new Cal(2,3);
CalInheritance cal2 = new CalInheritance(3,5);

        System.out.println(cal1.sum());
        System.out.println(cal2.sum());
        System.out.println(cal2.minus());
    }

}

```

실행하면

```
Cal init >> cal1
Cal init >> cal2
Cal2 init >> cal2
5
8
-2
```

이렇게 됨 ㅋ

## 6. 수업을 마치며

다음에 배워야 할꺼

- 다형성

  상속을 계속하다 보면 기능이 급격하게 늘어남 >> 호환성 떨어짐

  자식클래스를 부모 클래스로써 동작하도록 규제하는 테크닉

- 접근제어자 (Access Modifiers)

  public, default, protected, private

  이것들은 클래스, 메소드, 변수를 아무거나 막 접근하지 말라고 제한을 두는 거임

- Final

  딴놈들이 더 이상 상속을 못하게 하고 싶으면

  메소드를 오버라이딩 하지 못하게 하고 싶으면

  변수를 막 수정 못하게 하고 싶으면

- Abstract

  클래스를 상속해서 사용하려는 놈에게 특정기능은 꼭 구현해라 라고 규제

## 출처

- [생활코딩](https://www.youtube.com/playlist?list=PLuHgQVnccGMA1bRSk_SZrXMngx5iq03cc)

- [자바 기초 강의 - 3-2강 상속(inheritence)의 이해(1)](https://www.youtube.com/watch?v=2-jsaoj1MSk&list=PLOSNUO27qFbtjCw-YHcmtfZAkE79HZSOO&index=19)

- [자바 기초 강의 - 3-2강 상속(inheritence)의 이해(2)]()
