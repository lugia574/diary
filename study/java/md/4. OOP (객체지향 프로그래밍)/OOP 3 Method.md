# Method

클래스를 구성하는 요소에서 해당 클래스의 행위를 의미하는 것.

- 메소드를 알기 위해선 함수를 알 필요가 있음

- 함수는 입력, 기능, 출력으로 구성되며 함수의 기능에 따라 입출력이 없을 수 도 있음

- 함수와 메소드의 구분은 클래스의 소속 여부에 따라 `클래스에 소속된 경우 메소드 아닐 경우 함수임`

- 객체 >> 자바 >> c++

  속성 >> 필드 >> 멤버변수

  행위 >> 메소드 >> 멤버함수

## 구성 및 정의

- 클래스의 구성요소로 데이터, 즉 필드값의 변경은 해당 클래스의 데이터에 대한 제어

- 메소드는 해당 클래스의 특정행위가 수행되는걸 의미

아래의 경우 계좌(class) 의 잔액(balance)을 특정 금액만큼 빼는 기능(출금) 행위를 의미

```java
public class Account{
    private double balance;

    public Account(double balance){
        this.balance = balance;
    }

    public double withdraw(double am){
        if (balance < am){
            // 어쩌구 저쩌구
        }else{
            balance -= am;
        }

        return balance;
    }
}
```

## 구성 및 정의 2

클래스는 다수의 메소드를 가질수 있으며, 그 메소드의 기능은 메소드 호출을 통해 수행

- 필드와 마찬가지로 메소드에도 접근 지정자를 지정하여 메소드 호출에 대한 범위를 정할 수 있ㅇ므

- 메소드는 static 키워드를 이용해 클래스 메소드와 인스턴스 메소드로 정의 할 수 있음

## 호출의 이해

인스턴스 메소드의 경우 무조건 객체를 생성한 이후에 메소드 사용이 가능함

```java
public class 인스턴스메소드호출{
    public static void main(String[] args){
        // 객체 생성
        Account ac = new Account(10000);
        ac.withdraw(5000);
    }
}
```

## 메소드 오버로딩

메소드의 이름을 같게 하고, 파라미터를 달리 하여 여러 메소드를 정의하는 방법을 메소드 오버로딩.

- 자바의 메소드 시그니쳐는 메소드 이름부터 파라미터까지 (시그니쳐란 구분할 수 잇는 방법을 말함)

- 메소드의 `반환타입은` 시그니쳐에 포함되지 않기 때문에 메소드 오버로딩과는 관련이 없음

- 메소드 오버로딩은 하나의 클래스내에서의 기능이며, 파라미터는 타입, 순서, 개수를 달리하여 구분할 수 있어야 함

```java
public class cal{
    public int sum(int x, int y){
        return x + y;
    }

    public int sum(int x, int y, int z){
        return x + y + z;
    }

    public double sum(double x, double y){
        return x + y;
    }
}
```

## 메소드 바인딩

메소드(함수)가 호출했을때 해당 메소드가 정의되어 있는 코드가 수행되는 연결

- 자바에서는 `동적(Dynamic) 바인딩`으로 이루어져 있음

- C 언어의 경우는 `정적(static) 바인딩`

- 정적 바인딩의 경우 프로그램 시작 시점에서 메소드가 어디로 호출이 연결된다고 고정이 됨

  그래서 C언어의 경우 메소드의 이름을 동일하게 할 수 없음

- 동적 바인딩은 해당 함수가 호출이 되는 시점에서 연결이 됨

  그렇기 때문에 메소드 오버로딩이 가능해짐

## 출처

- [자바 기초 강의 - 2-6강 메소드(Method) - 1](https://www.youtube.com/watch?v=QK-PEVI7eDk&list=PLOSNUO27qFbtjCw-YHcmtfZAkE79HZSOO&index=8)
