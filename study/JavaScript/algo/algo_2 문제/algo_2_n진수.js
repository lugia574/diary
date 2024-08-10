// 보니까 별거 아닌거 같은데 걍 귀찮고 짜증나는 문제
// 이렇게 막 풀려고 했는데
function solution(n, t, m, p) {
  let answer = "";
  const check = () => answer.length === t;
  let num = 0;
  while (num < 10) {
    if (check()) break;
    let nBase = num.toString(n);
    let baseLen = nBase.length;

    while (baseLen >= m) {
      if (check()) break;
      answer += nBase.slice(0, m)[p - 1];
      nBase = nBase.slice(m);
      baseLen = nBase.length;
    }

    console.log(
      "원래 숫자: ",
      num,
      "변환숫자 : ",
      num.toString(n),
      "answer:",
      answer
    );
    num++;
  }
  return answer;
}

// 근데 그냥
// 이렇게 푸는게 훨씬 좋을듯해서 바꿧는데 해결됨 ㅋ
function solution(n, t, m, p) {
  var answer = "";
  let num = 0;
  let str = "";
  while (answer.length < t) {
    while (str.length < m) {
      str += num.toString(n);
      num++;
    }

    while (str.length >= m) {
      answer += str.slice(0, m)[p - 1];
      str = str.slice(m);
    }
  }
  return answer.slice(0, t).toUpperCase();
}
