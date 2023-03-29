# JPA(Java Persistence API) 란?

자바의 ORM(object Relational Mapping) 표준 스펙을 정의

JPA 의 스펙은 자바의 객체와 데이터베이스를 어떻게 매핑하고 동작해야 하는 지를 정의 하고 있음

## 하이버네이트(Hibernate)

ORM Framework 중 하나 `JPA 프로바이더` 라고도 부름

JPA 의 실제 구현체 중 하나이며, 현재 가장 많이 사용됨

### 1. 영속성 컨테스트 (Persistence Context)

    Persistence 는 데이터를 생성한 프로그램의 실행이 종료되더라도 사라지지 않는 데이터 특성

영속성 컨테스트는 JPA 가 관리하는 엔티티 객체의 집합

엔티티 객체가 영속 컨테스트에 들어오게 되면 JPA 는 엔티티 객체의 매핑 정보를 가지고 DB 에 반영함

엔티티 객체가 영속 컨테스트에 들어오게 되어 관리 대상이 되면 그 객체를 영속 객체라고 부름

## 레퍼런스

- https://www.youtube.com/watch?v=ajZIPOv31yE

- https://www.youtube.com/watch?v=5DAW3CCZ_rU

- https://tinkerbellbass.tistory.com/24
