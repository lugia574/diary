# var VS let VS const

[출처: JavaScript - var VS let VS const](https://www.youtube.com/watch?v=61iolhWgQt0)

이전부터 이미 여러번 언급했다.

이를 정리한 표로 대신하겠다.

|                | var | let | const |
| :------------: | :-: | :-: | :---: |
|     Global     |  O  |  X  |   X   |
|     Script     |  X  |  O  |   O   |
| function local |  O  |  O  |   O   |
|     block      |  X  |  O  |   O   |
|     재선언     |  O  |  X  |   X   |
|     재할당     |  O  |  O  |   X   |
