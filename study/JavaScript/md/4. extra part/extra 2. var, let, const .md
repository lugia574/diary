# var VS let VS const

출처

- [JavaScript - var VS let VS const](https://www.youtube.com/watch?v=61iolhWgQt0)

- [자바스크립트 중급 강좌 #1 - 변수, 호이스팅, TDZ(Temporal Dead Zone)](https://www.youtube.com/watch?v=ocGc-AmWSnQ&list=PLZKTXPmaJk8JZ2NAC538UzhY_UNqMdZB4)

https://seomal.com/map/1/184

여기까지 읽음 이미 여러번 언급했다.

이를 정리한 표로 대신하겠다.

|                | var | let | const |
| :------------: | :-: | :-: | :---: |
|     Global     |  O  |  X  |   X   |
|     Script     |  X  |  O  |   O   |
| function local |  O  |  O  |   O   |
|     block      |  X  |  O  |   O   |
|     재선언     |  O  |  X  |   X   |
|     재할당     |  O  |  O  |   X   |
