# HTTP 란?

    하이퍼 텍스트 전송 프로토콜

    인터넷에서 정보를 주고 받을 수 있는 프로토콜(규약)

## GET, POST

### GET

    요청하는 데이터가 HTTP Request Message의 Header 부분에 url 이 담겨서 전송

url 상에 ? 뒤에 데이터가 붙어 request 를 보내게 되는 것이다.

이러한 방식은

1. url 이라는 공간에 담겨가기 때문에 전송할 수 있는 데이터의 크기가 제한적이다.

2. 또 보안이 필요한 데이터에 대해서는 데이터가 그대로 url 에 노출

### POST

    HTTP Request Message의 Body 부분에 데이터가 담겨서 전송

GET 방식보다 크고 보안면에서 낫다.

(하지만 보안적인 측면에서는 암호화를 하지 않는 이상 고만고만)

## HTTPS?

HTTP Secure의 약자이며 HTTPS를 사용하여 전송되는 데이터는 TLS를 통해 보호된다.

TLS는 Certificate Authority(CA)라 불리는 서드 파티로부터 서버와 클라이언트 의 인증을 하는데 사용된다.

### SSL(TLS) 동작방식 > 이거 좀 길어

## TCP란 무엇인가

### TCP와 UDP의 차이점은

## 4. 브라우저에서 주소창에 url 입력시 어떤일이 일어나는가

---

## 레퍼런스

- [역대 면접 질문](https://github.com/qkraudghgh/coding-interview/blob/master/Interview/question/previous_interview.md)

- [프론트엔드 면접 질문 모음](https://velog.io/@honeysuckle/%EC%8B%A0%EC%9E%85-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%A9%B4%EC%A0%91-%EC%A7%88%EB%AC%B8-%EB%AA%A8%EC%9D%8C)
