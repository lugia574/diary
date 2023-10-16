// https://velog.io/@gagaeun/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%B6%84%EC%88%98%EC%9D%98-%EB%8D%A7%EC%85%88
// 아니 최대공약수 푸는걸 왜 기억을 못해 멍청한 새끼야 진짜 어유 천치새끼가 아주
function solution(numer1, denom1, numer2, denom2) {
  let numer = numer1 * denom2 + numer2 * denom1;
  let denom = denom1 * denom2;
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const gcdNum = gcd(denom, numer);
  return [numer / gcdNum, denom / gcdNum];
}

//////
// 이건 reduce 함수 배열 순회하면서 a를 뽑아서 b (기존값)에 적용하는거 맨 뒤 매개변수는 기존값 세팅
function solution(numbers) {
  const sumNum = numbers.reduce((a, b) => a + b, 0);
  return sumNum / numbers.length;
}

/// repeat 애는 또 뭐냐 보니까 뭔소린지는 알겠는데 흠흠흠
function solution(my_string, n) {
  var answer = [...my_string].map((v) => v.repeat(n)).join("");
  console.log(answer);
  return answer;
}

// 맵을 이렇게 해버리네
function solution(strlist) {
  return strlist.map((el) => el.length);
}

// 이건 생각 못했네
// 대충 abcdea 라는 문자열 있을때 letter 값이 a 면 bcde 반환 해주는건데 이걸 이렇게 하네
function solution(my_string, letter) {
  const answer = my_string.split(letter).join("");
  return answer;
}
