# Constructor

Constructor(생성자는) 클래스 구성요소 중 하나로 `객체를 인스턴트화` 할때 가장 먼저 호출되는 특수한 메소드

- 생성자의 역활은 객체가 갖는 `필드의 초기화`이며, 따라서 모든 클래스는 하나 이상의 생성자를 갖는다.

- 생성자의 이름은 해당 클래스의 이름과 같고 반환타입을 가지지 않음.

- 생성자도 모든 접근제어자를 적용할 수 있으며, 일반적으로는 public 접근 제어자를 적용된다.

※ 필드는 클래스 내에 변수 임

```java
public class Em{
    // fields
    private String name;
    private String department;

    // default Constructor
    public Em(){

    }

    // user difinded Constructor 이를 생성자 오버로딩이라 부름
    public Em(String name){
        this.name = name;
    }
}
```

## default Constructor(기본 생성자)

매개 변수가 없고 구현내용이 없이 정의하는 생성자를 기본생성자(default Constructor) 라고 부름

- 클래스는 반드시 하나 이상의 생성자를 가지며, 생성자를 정의하지 않으면 디폴트 생성자가 자동으로 생성됨

- 생성자에서 명시적으로 필드의 값을 설정하지 않으면 디폴트값으로 초기화 됨

  디폴트 초기값 : 숫자타입 (0), 논리타입 (false), 참조타입 (null)

## user Defined Constructor(사용자 정의 생성자)

클래스 필드의 초기화를 위해서 정의하는 사용자 정의 생성자

- 사용자 정의 생성자는 해당 클래스가 갖는 필드의 초기화를 위해 정의하며, 여러 형태로 정의가 가능

- 만일, 사용자가 하나 이상의 사용자 정의 생성자를 만들었다면 디폴트 생성자는 자동 생성되지 않는다.

  그러니까 사용자 정의 생성자를 이용하려면 디폴트 생성자를 직접 만들어줘야함

## Constructor Overloading(생성자 오버로딩)

클래스 필드의 초기화는 다양한 방식으로 이루어질 수 있으며, 이를 위해 다양한 형태의 생성자를 정의할 수 있다.

- 생성자의 이름은 반드시 클래스의 이름과 동일해야 하기 때문에, 다수의 생성자 정의는 생성자 오버로딩으로 정의

- 생성자 오버로딩은 해당 클래스를 구성하는 생성자들의 매개변수 개수와 타입, 순서를 달리하여 정의

- 객체의 인스턴스화 과정에서 생성자를 호출하여 전달인자를 다르게 하여 필요한 생성자를 호출

※ 매개변수의 갯수와 타입으로 구별하기 때문에 아래와 같은 경우는 error 를 뿜게 됨

```java
public class Em{
  private String name;
  private int age;
  private String department;

  public Em(){
  }

  public Em(String name, int age){
    // 어쩌구 저쩌구
  }
  public Em(String department, int age){
    // 어쩌구 저꺼구
  }
}
```

## this() Constructor

하나의 클래스에 정의된 다수의 생성자간에 this() 생성자를 통해 호출 가능

- this 생성자는 중복되는 코드를 제거하고 생성자를 재사용하기 위해 사용

- this 생성자의 호출은 반드시 생성자 이름의 바로 아래에 위치해야함

```java
public class Em{
  private String id;
  private String name;
  private String department;

  public Em(){};

  public Em(String id){
    this.id = id;
    // 어쩌구 저쩌구
  }

  public Em(String id, String name){
    this(id); // 이게 this 생성자 << 이렇게 바로 아래에서
    this.name = name;
    // 어쩌구 저꺼구
  }

  public Em(String id, String name, String department){
    this(id, name);
    this.department = department;
    // 어쩌구 저쩌구
  }
}

## 출처

[자바 기초 강의 - 2-8강 생성자(Constructor) - 1](https://www.youtube.com/watch?v=bIoT8QB8HL0&list=PLOSNUO27qFbtjCw-YHcmtfZAkE79HZSOO&index=10)
```
