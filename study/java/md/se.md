문제 1

앞뒤가 똑같은 팰린드롬

자연수 n, m 이 매겨변수로 주어질때

n 이상 m 이하의 자연수 중 팰린드롬 숫자의 개수를 return하도록 함수를 짜라

제한사항 : m 은 500,000 이하 자연수, n 은 m 이하 자연수

n = 1, m = 100, res = 18
n = 100, m = 300, res = 20

예시1
1 이상 100 이하 팰린드롬은 18개
1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99

예시 2
100 이상 300 이하 팰린드롬은 20개

101, 111, 121, 131, 141, 151, 161, 171, 181, 191,
202, 212, 222, 232, 242, 252, 262, 272, 282, 292

```py
def solution(n, m):
    answer = 0

    return answer
```

---

문제 2

연수실에 있는 총 n 마리 포켓몬 중에 n/2 마리를 가져도 좋데

포켓몬의 종류에 따라 번호를 붙혀 구분해서 같은 종류의 포켓몬은 같은 번호를 가지고 있음

예를 들어 총 4마리가 있고 각 번호가 [3, 1, 2, 3] 이라면

3번 종류가 2 마리 1 번이 1마리 2 번이 한마리 이렇게 있는거

이때 4마리를 가져가는 방법은 총 6가지가 있음

3, 3
3, 1
3, 2
1, 2
1, 3
2, 3

이 중 포켓몬 종류수를 최댓값으로 가질 수 있는 값은 2임

다양한 포켓몬을 가지길 원하기 때문에 최대한 많은 종류의 포켓몬을 포함해서 n/2 마리를 선택할려고 함

n/2 마리 선택하는 방법 중, 가장 많은 종류를 선택하는 방법을 찾아, 그때의 포켓몬 번호 개수를 return

제한 사항:

nums 는 포켓몬 종류 번호가 담긴 1차원 배열

nums 길이는 1 이상 10_000 이하의 자연수, 항상 짝수로 주어짐

포켓몬 종류 번호는 1 이상 200_000 이하의 자연수로 이루어짐

가장 많은 종류의 포켓몬을 선택하는 방법이 여러 가지인 경우에도,

선택할수 있는 포켓몬 종류 갯수 최댓값만 리턴하면 됨

예시 1

nums = [3, 1, 2, 3]
res = 2

예시 2

nums = [3, 3, 3, 2, 2, 1]
res = 3

예시 3

nums = [3, 3, 3, 2, 2, 2]
res = 2
