# git

지옥에서 온 정보 관리자

## 머릿말

이제까지 깃을 쓰고 있지만 솔직히 개같이 모르고 그냥 막 박아 넣기만 하고 있음

분명히 유지 보수를 하기 위해서는 무조건 알아야하며

협업등을 할때도 버전 관리할때 무조건 무조건 무조건 알아야한다

근데 난 이제까지 외면하고 있었음

그러다가 저번에 사고 한번 났고 이번에 슬슬 새로운 프젝을 만들어 볼껀데

깃은 한번 듣고 가야겠다라고 느껴서 이번에 배워보고자 한다

## 소개

대충 리눅스 개발자가 리눅스 개발이 너무 난잡하고 복잡해서

이를 정리 개선해서 관리하고자 만든것이 깃

요즘에는 리눅스 뿐만 아니라 다양하게 사용

## git 의 3대 목정

- version (버전관리)

- backup (백업)

- collaborate (협업)

## CLI

기본적으로 개발자는 명령어를 이용해서 할줄을 알아야함

- 익숙해지면 복잡한 GUI 없이도 할 수 있음

- 명령어의 특성상 처리해야 할 일을 한번에 명령내려서 자동화를 할 수 있음

- 특히 GUI 로 제어할 수 없는 서버 환경에서도 사용할 수 있는 유일한 방법임

자 우선 폴더를 만들어 보자

현재 내 위치는 User/lcw/diary/study/git 인 상태

```git
mkdir hello-git-cli
```

`cd hello-git-cli` 라고 입력해 폴더 안으로 들어 가보자

이제 여기서 작업을 할꺼니까 버전관리를 시작해 라는 의미로

`초기화`를 해주자

```git
git init .
```

## 버전 관리

- git init : Initialize repository

- .git : git repository

- git status : working tree status

- git add : add to staging area

  git commit -am "블라블라" 이러면 애드, 커밋 한번에 됨 (단 기존에 파일들만 가능, 새로 만든게 있음 add 한번은 해줘야함)

- git commit : create version

  -m 을 붙혀주면 바로 붙혀서 commit 창에 쓸말을 쓸수 있음

  git config --global core.editor "nano" 이럼 commit 에디터를 바꿔줌

- git log : show version

- git log --stat : detail show version

- git -p

- git diff : show chagens

```git
nano hello1.txt
```

라고 치면 hello1.txt 라는 메모장이 생성이 됨

거기서 뭐 대충 써주고 ctrl x 해주고 예스 해주고 엔터 하면 생성됨

이제 staging area 에 올릴려면 git add 이름 해주면 되고

commit 해주면 됨

### 수정

만약에 내가 코드를 막 수정을 했어

```git
$ git diff
warning: LF will be replaced by CRLF in hello1.txt.
The file will have its original line endings in your working directory
diff --git a/hello1.txt b/hello1.txt
index 01e79c3..b6bebeb 100644
--- a/hello1.txt
+++ b/hello1.txt
@@ -1,3 +1,3 @@
 1
 2
-3
+four
```

근데 다시 돌아가고 싶어

- git reset --hard

## 이전 버전으로 돌아가기 (checkout)

여러 버전이 커밋되어 있는데

내가 특정 버전으로 돌아가고 싶다

```git
git log
commit 1747938b2f56bc20c9d74f3b915a1ceb0934c5a0 (HEAD -> master)
Author: lugia574 <66871221+lugia574@users.noreply.github.com>
Date:   Mon Jun 19 18:04:11 2023 +0900

    Message 3

commit 849541d3adb6aa0797ad7003b3782fd105ca00b8
Author: lugia574 <66871221+lugia574@users.noreply.github.com>
Date:   Sun Jun 18 20:55:15 2023 +0900

    Message 2

commit 53b9c02e4a18bc824aa8bf572946a3670579ea7d
Author: lugia574 <66871221+lugia574@users.noreply.github.com>
Date:   Sun Jun 18 20:53:22 2023 +0900

    Message 1
```

현재 메시지 3 버전에 해당되어 있고

내가 메시지 2 버전을 보고 싶다면

```git
git checkout 849541d3adb6aa0797ad7003b3782fd105ca00b8
```

이렇게 chckout 하고 해당 커밋 id 를 써주면 됨

이럼 메시지 2 버전으로 간건게

그렇다고 해서 메시지 3 버전이 없어진게 아님

최신 버전으로 상태를 다시 돌릴려면

```git
git checkout master
```

를 하면 됨

## 삭제

이번에는 버전 삭제

내가 메시지 2 버전으로 돌리면서 그 뒤에 했던 버전들을 지우고 싶어

그럼

```git
- git reset --hard 849541d3adb6aa0797ad7003b3782fd105ca00b8
```

이럼 됨

여기서 --hard 말고 --soft, --mixed 등의 뭘 쓰냐에 따라 달라지는데

--hard 는 버전을 삭제할 뿐만 아니라 수정하고 있었던거까지 지워버려

## 되돌리기 (revert)

reset 의 문제점이 그냥 막 지어버린다는 점임

이게 협업 부분에서 굉장히 크리티컬함 사람 일하는건데 막 지워서 쓰나

이를 보완하는게 `revert`

대충 이런 상태라고 치면

```git
$ git log
commit b8a7db79740d6b5d4d74bcc495d5c930591a893c (HEAD -> master)
Author: lugia574 <66871221+lugia574@users.noreply.github.com>
Date:   Mon Jun 19 20:05:23 2023 +0900

    R4

commit 733bd777f782a8c432d179ae8ec8bd537ab1807f
Author: lugia574 <66871221+lugia574@users.noreply.github.com>
Date:   Mon Jun 19 20:04:56 2023 +0900

    R3

commit 849541d3adb6aa0797ad7003b3782fd105ca00b8
Author: lugia574 <66871221+lugia574@users.noreply.github.com>
Date:   Sun Jun 18 20:55:15 2023 +0900

    Message 2

commit 53b9c02e4a18bc824aa8bf572946a3670579ea7d
Author: lugia574 <66871221+lugia574@users.noreply.github.com>
Date:   Sun Jun 18 20:53:22 2023 +0900

    Message 1
```

이 상태일때 R3 상태로 돌아가고 싶어

이때 reset과 다르게 얘는 R4 의 커밋 id 를 써줘야 R3 상태로 돌아감

```git
git revert b8a7db79740d6b5d4d74bcc495d5c930591a893c
```

이럼 에디터가 뜨는데

막 수정 이름 쓰라고 해 써주면

```git
$ git log
commit 15473a8c06d0ee4e56b27361a2525bfe853a9265 (HEAD -> master)
Author: lugia574 <66871221+lugia574@users.noreply.github.com>
Date:   Mon Jun 19 20:14:08 2023 +0900

    "revert r3 haha"
    Revert "R4"

    This reverts commit b8a7db79740d6b5d4d74bcc495d5c930591a893c.

commit b8a7db79740d6b5d4d74bcc495d5c930591a893c
Author: lugia574 <66871221+lugia574@users.noreply.github.com>
Date:   Mon Jun 19 20:05:23 2023 +0900

    R4

commit 733bd777f782a8c432d179ae8ec8bd537ab1807f
Author: lugia574 <66871221+lugia574@users.noreply.github.com>
Date:   Mon Jun 19 20:04:56 2023 +0900

    R3

commit 849541d3adb6aa0797ad7003b3782fd105ca00b8
Author: lugia574 <66871221+lugia574@users.noreply.github.com>
:
commit 15473a8c06d0ee4e56b27361a2525bfe853a9265 (HEAD -> master)
Author: lugia574 <66871221+lugia574@users.noreply.github.com>
Date:   Mon Jun 19 20:14:08 2023 +0900

    "revert r3 haha"
    Revert "R4"

    This reverts commit b8a7db79740d6b5d4d74bcc495d5c930591a893c.


commit b8a7db79740d6b5d4d74bcc495d5c930591a893c
Author: lugia574 <66871221+lugia574@users.noreply.github.com>
Date:   Mon Jun 19 20:05:23 2023 +0900

    R4

commit 733bd777f782a8c432d179ae8ec8bd537ab1807f
Author: lugia574 <66871221+lugia574@users.noreply.github.com>
Date:   Mon Jun 19 20:04:56 2023 +0900

    R3

commit 849541d3adb6aa0797ad7003b3782fd105ca00b8
Author: lugia574 <66871221+lugia574@users.noreply.github.com>
Date:   Sun Jun 18 20:55:15 2023 +0900

    Message 2

commit 53b9c02e4a18bc824aa8bf572946a3670579ea7d
Author: lugia574 <66871221+lugia574@users.noreply.github.com>
Date:   Sun Jun 18 20:53:22 2023 +0900

    Message 1
```

이렇게 수정이 기록된 형태로 나옴

그리고 코드는 R3 형태임

※ 만약에 메시지 1 상태로 revert 하고 싶다면 메시지 2 값으로 revert 하면 안됨!

하나하나 역산으로 넘어가야함!!

## 출처

- [생활코딩 Git 1](https://www.youtube.com/watch?v=9btOcOLjb30&list=PLuHgQVnccGMCNJESahrVV-uYGMNYK_vMf&index=1)

- [생활코딩 Git 2](https://opentutorials.org/module/3762)
