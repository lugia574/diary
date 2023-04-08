# API 란?

`Application Programming Interface`

     기능을 실행시키는 명령 방법

대충 식당 메뉴판임

식당 주인에게 내가 뭐 먹고 싶다고 아무 음식이나 막 얘기 하면 안되자너

식당에 없는 메뉴 달라고 하면 안되자너

메뉴판에 있는걸 주문해야지

그 방법을 짜는게 API 코드임

그럼 손님은 어떻게 주문을 할까?

보통 웹에서는 주소가 그걸 함

1. get, post, put, delet 등의 요청 방식

2. endpoint > 무슨 자료를 요청할것인지

3. ?쿼리문 > 자료의 상세 정보

(`get 방식`) comic.naver.com/webtoon/detail(`endpoint`)?id=111(`쿼리문`)

# REST API? RESTful API?

그럼 REST API 는 먼데? ful은 또 뭐고?

ful 은 별거 아님

형용사형 어미임 ~ful

REST ~한(ful) API 라는 소리임

이제 REST 만 알면 됨

REpresentational State Transfer 의 약자로

`State`는 웹 애플리케이션 의 상태를 의미하며, `Transfer`는 이 상태의 전송을 의미함

Representational 는 재현, 표현 이라는 뜻을 가지는데 대충

     API 작동 방식에 대한 조건을 부과하는 소프트웨어 아키텍처

너무 어려운데

그냥 간단하게

     인터넷 등에서 안전하게 기능을 수행시키기 위한 방법임

HTTP 요청 시스템을 REST API 원칙에 맞춰 사용하자

1. 읽기 / GET : 읽고 싶어요
2. 쓰기 / POST : 생성해주세요
3. 수정 / PUT : 수정해주세요
4. 삭제 / DELETE : 삭제해주세요

## REST 6 가지 원칙

1. Uniform Interface

   하나의 URL로는 한개의 데이터만 가져와야한다.

   URL만 보고 어떤 정보가 들어올지 예측가능하게

   - URL 이름짓기 원칙

     - URL을 명사로 작성(추천)
     - 하위문서를 나타낼땐 /사용 (/하위폴더처럼)
     - 파일확장자(.html)쓰지말기
     - 띄어쓰기는 대시(-) 이용
     - 자료 하나당 하나의 URL

   > ex: movies/avatar2

2. Stateless

   요청들은 각각 독립적으로 처리되어야 한다.

   요청1이 성공해야 요청2를 보내주고 그런 식으로 요청간의 의존성이 존재하는 코드는 NO

3. Client-Server

   브라우저, 서버 역할 구분하기

4. Cacheable

   요청을 통해 보내는 (이미지 등)자료들은 캐싱이 가능해야한다.

   캐싱을 위한 버전 같은 것도 관리를 잘해야한다.

   캐싱? 네이버를 방문하면 크롬 브라우저는 자동으로 자주 사용하는 이미지 파일, CSS 파일 등을 하드에 저장한다.

5. Layered System

   요청처리하는곳, DB에 저장하는곳 이런 여러가지 단계를 거쳐서 요청을 처리해도 됩니다.

6. Code on Demand

   서버는 고객에게 실제 실행가능한 코드를 전송해줄 수도 있습니다.

## 장점

- Open API 를 제공하기 쉽다
- 멀티플랫폼 지원 및 연동이 용이하다.
- 원하는 타입으로 데이터를 주고 받을 수 있다.
- 기존 웹 인프라(HTTP)를 그대로 사용할 수 있다.

## 단점

- 사용할 수 있는 메소드가 한정적이다.
- 분산환경에는 부적합하다.
- HTTP 통신 모델에 대해서만 지원한다.

---

출처

- [코딩애플: 코딩초보들이 헷갈리는 용어 : API가 뭐냐면](https://www.youtube.com/watch?v=ckSdPNKM2pY)

- [생활코딩: 기계들의 대화법 - REST API](https://www.youtube.com/watch?v=PmY3dWcCxXI&t=574s)
