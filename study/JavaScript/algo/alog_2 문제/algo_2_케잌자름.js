// 딱봐도 이것도 무턱대고 했다가는 시간초과 걸림
// slice 해서 set 으로 박아서 size 하는건 시초 걸림 하긴 이것도 n^2 되겠다
// 이분 탐색으로 해야하는거 아녀?
// 흠 말이되나  뭘 기준으로 올라가고 내려가고 그만두는데
// set 을 이용하는게 맞는거 같은데
// 객체를 이용한 방법이 있긴 해 근데 이럼 2N 인데 상관 없을려나
// 객체로 풀긴함
function solution(topping) {
  let answer = 0;
  const SIZE = topping.length;
  const lt = { len: 0 };
  const rt = { len: 0 };
  for (let i = 0; i < SIZE; i++) {
    if (topping[i] in lt) {
      lt[topping[i]]++;
      continue;
    }
    lt[topping[i]] = 1;
    lt["len"]++;
  }

  for (let i = SIZE - 1; i > -1; i--) {
    if (topping[i] in rt) rt[topping[i]]++;
    else {
      rt[topping[i]] = 1;
      rt["len"]++;
    }
    lt[topping[i]]--;
    if (lt[topping[i]] === 0) lt["len"]--;
    if (lt["len"] === rt["len"]) answer++;
  }

  return answer;
}
