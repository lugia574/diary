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

// 최빈값

function solution(array) {
  // array의 길이가 1일 경우 갯수가 하나이기에
  // 그 값을 반환해준다.
  if (array.length === 1) return array[0];

  const obj = {};
  const answer = [];

  // array를 forEach() 반복문을 돌려
  // obj에 값이 없으면 값을 만들고 1을 넣어주고
  // obj에 값이 있으면 기존 값 +1을 해준다.
  array.forEach((n) => {
    obj[n] = ++obj[n] || 1;
  });

  // 값과 그 값의 갯수를 정의해 둔 obj를 array에 넣어준다.
  // ex) [[1, 1], [2, 1], [3, 3], [4, 1]]
  for (let key in obj) {
    answer.push([key, obj[key]]);
  }

  // answer 배열을 갯수 기준으로 내림차순 정렬을 해준다.
  // ex) [[3, 3], [4, 1], [2, 1], [1, 1]]
  answer.sort((a, b) => b[1] - a[1]);

  // 최빈값이 여러 개면 -1을 반환해야 하기 때문에 확인한다.
  if (answer.length > 1 && answer[0][1] === answer[1][1]) return -1;

  // 여러개가 아니라면 정렬한 처음 값을 반환한다.
  return Number(answer[0][0]);
}
