# git

## 깃, 깃헙이란

vcs 는 버전 컨트롤 시스템

버전관리, 백업, 복구이 기본적으로 가능해야함

- 로컬 vcs : 내 컴퓨터 내에 (협업 X)

- 중앙집중식 vcs : 중앙에 서버에 저장하고 파일을 하나하나 꺼내씀 (ex: SVN, CVS)

- 분산 vcs : 중앙에 서버를 두고 프로젝트 단위로 통으로 가져다가 꺼내쓰고 넣음 (ex: Git, Mecurial, Bazarr)

깃헙은 원격으로 별도로 프로젝트를 백업, 버전관리 해줌

깃은 내 컴터안에 버전을 관리 해주고 깃헙과 소통함

내컴터에 깃이 깔려 있으면, 버전 관리를 로컬로 할 수 있고 깃헙과 소통 가능

다른 컴터에도 깃이 깔려 있으면, 깃헙을 통해 해당 프로젝트를 관리 가능

## 깃 설치

는 이미 설치되어 있으니까 버전 업데이트만 하고 생략

[깃 메뉴얼](https://git-scm.com/book/ko/v2)

## CLI vs GUI

- CLI (커맨드 라인 인터페이스)

  셀이라는 프로그램을 통해서 글자를 입력해서 컴퓨터에게 명령을 내리는 것

  (shell 조개? 왜 셀인가 하고 얘기해줫는데 이해 안됨 뭐 조개껍질에 글자 쓴것과 같나 봄 )

- GUI (그래픽 유저 인터페이스)

당연히 개발자는 CLI 를 써야겠지여

## 자주 쓰는 명령어 1

- ls (List Segmentation 목록 세분화)

  해당 폴더에 어떤 파일이 있는가

- mkdir(make directory) 파일명

  폴더 생성

- cd (change directory) 파일명

  폴더이동

  - cd .. : 상위 디렉토리로 이동한다. 예를 들어 현재 위치가 /app/bin/logs 라면 /app/bin으로 이동한다.
  - cd . : 현재 위치로 이동한다. 즉 움직이지 않고 새로고침한다고 보면된다.
  - cd - : 이전에 위치했던 폴더로 이동한다. 윈도우의 뒤로가기 기능과 같다.
  - cd / : root 디렉토리로 이동한다.
  - cd ~ : 홈 디렉토리로 이동한다.

## 자주 쓰는 명령어 2

- status (상태)

- init (Initialize 초기화)

- add

  git add (파일명)

  이러면 이제부터 트래킹 ㄱㄱ

- commit 버전 생성

  git commit -m "커밋 코멘트"

## 깃헙 레포지토리

- remote

  git remote -v

1. 깃헙 뉴 레포지토리 생성

2. 연결

   git remote add origin(원격저장소 별칭) (원격저장소 URL)

3. 소스 코드 올림

   git push origin(원격저장소 별칭) master(원격저장소 레포지토리명)

## 기존 깃헙 레포지토리를 로컬로 받아오기

1. 연결

   git clone (원격저장소 URL)

   연결과 함께 깃헙에 올려진 소스를 받아옴

2. 수정 소스 코드 받아오기

   git pull origin(원격저장소 별칭) master(원격저장소 레포지토리명)

   자 근데 이러면 띠용하는게 있음 폴더 안에서 소스 폴더를 받기 때문에 cd 폴더명 쳐서 한번 더 들어가야함

3. 연결 끊기

   git remote remove origin

## 브랜치(branch)

브랜치 뜻은 나뭇가지. 가지가지 나누어지는 형태를 보고 정한듯

- 브랜치 목록

  git branch

- 브랜치 생성

  git branch (브랜치명)

- 브랜치 이동

  git checkout (브랜치명)

  git checkout - : 이전 브랜치로 이동

- 브랜치 삭제

  git branch -d (브랜치명)

## 깃 브랜치 이름 규칙

- main(master) V1.2.0

  - deleop branch > 기능 개발 branch : feature/login, feature/select-product

  - 출시 준비 : release-1.3, release-1.4

  - 긴급 수정 : hotfix-1.2.1

## 커밋해야 브랜치

웃긴게 git checkout feature/login 에서 파일을 수정하고

git chekout feature/select-product 에 들가보면 파일 수정 한 값이 그대로 반영되어 있음

브랜치를 하면 브랜치 모태가 되는 버전을 복사하는데 복사만 해둘 뿐

포인터(?) 는 그대로 있음

`커밋`을 해야 비로소 브랜치로서 역활을 하게 됨

## 깃헙에 브랜치 올리기

- git branch -r : 깃헙에 올라간 브랜치 확인하기 r 은 remote

자 그럼 이제 깃헙에 올린껀데 어떻게 하냐

깃헙에 브랜치를 생성하고 깃 브랜치 복제하기를 하는거임

- git push origin(깃헙저장소별칭) (깃브랜치 명)

## 깃 브랜츠 전략 fast-forward

A 브랜치에서 B 브랜치를 생성한 시점부터,

A 브랜치에서는 아무런 추가 구현을 하지 않고

B 브랜치만 추가 구현 한 뒤

B 브랜치와 A 브랜치를 합치는 것 (A 브랜치에 추가 구현한 B 브랜치 합치기 끝)

## 깃 브랜츠 전략 3-way

A 브랜치에서 B 브랜치를 생성한 시점부터,

A 브랜치도 추가 구현을 하고

B 브랜치도 추가 구현을 하고

A 브랜치와 B 브랜치를 합치면 (A 브랜치와 B 브랜치를 서로 비교하여 바뀐 것을 정리하여 합침)

## pull request & merge

병합이란

- 브랜치를 생성한다는건, `협업` 을 위한것

  그래서 주로 브랜치 병합을 "깃헙" 에서 한데

- main(master) 브랜치 보호

  추가 브랜치 => main 브랜치 병합 = Pull Request

- 충돌이 일어나나 자동으로 깃헙이 확인 해줌

  PR 메시지 신경 쓸것

- merge

  _merge commit_

- 다 쓴 branch 삭제

## merge 된 깃헙 => 깃 (로컬) 에 동기화하기

깃헙에는 제대로 병합되어 있지만 지금 내 컴에는 아직 그대로 살아 있음

이를 동기화 해야함

- git fetch -p : 깃헙 브랜치 목록을 로컬과 동기화

- git pull origin master : 깃헙에 있는 master 받아오기

- git branch -d (브랜치명) : 브랜치 삭제

_참고로 위치를 `유의` 해야함_

> git checkout maing(master) 로 옮기고 나서 할것

## 충돌(conflicts) 해결

- 원격(깃헙)에서 만든 브랜치를 로컬로 가져오는 거

  git checkout -t orgint(저장소별칭)/(브랜치명)

먼저 깃헙에 feature/1, feature/2 브랜치를 만들고 로컬에 불러와

각 test.md 에 동일한 부분에 다른게 작성을 하고

feature/1, feature/2 순서대로 병합을 해보자

feature/1 은 문제없이 병합 되지만

feature/2 부터 병합에 충돌이 일어나는데

"Can't automatically merage" 라고 뜸

그냥 쭈욱 진행하면 `Resolve conflicts` 버튼이 뜨는데

누르면

```
<<<<<<< feature/2
feature/2
=======
feature/1
>>>>>>> master
```

이렇게 나옴

`===` 기준으로 위에는 feature/2 코드고 아래는 feature/1 코드라는 소리임

둘 중에 하나를 고르거나 아예 새로 짤 수 있음

그렇게 하고 commit merge 하면 됨
