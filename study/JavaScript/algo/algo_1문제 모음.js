// 약수들의 합
const cd = (a) => {
  const cdSet = new Set();
  const sqrtNum = Math.floor(Math.sqrt(a)) + 1;
  for (let i = 1; i < sqrtNum; i++) {
    if (a % i === 0) {
      cdSet.add(i);
      cdSet.add(a / i);
    }
  }
  return Array.from(cdSet);
};
function solution(n) {
  const arr = cd(n);
  return arr.reduce((a, cur) => a + cur, 0);
}

// 자리수 더하기
function solution(n) {
  return [...n.toString()].reduce((a, cur) => parseInt(a) + parseInt(cur), 0);
}

// 정수인지 실수인지 판별
Number.isInteger(숫자);

// 슬라이스
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}

// 아스키 코드로 문자sort
function solution(s) {
  var answer = "";
  const arr = [...s].sort((a, b) => b.charCodeAt() - a.charCodeAt());
  return arr.join("");
}

// 최대공약수, 최소공배수 섹섹
function solution(n, m) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const gcdNum = gcd(n, m);
  return [gcdNum, (m * n) / gcdNum];
}

// toUpperCase, toLowerCase 둘다 쓴 문제
// 이상한 문자 만들기
function solution(s) {
  const arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    const word = [...arr[i]];
    for (let j = 0; j < word.length; j++) {
      if (j % 2 === 0) word[j] = word[j].toUpperCase();
      else word[j] = word[j].toLowerCase();
    }
    arr[i] = word.join("");
  }
  return arr.join(" ");
}

// 삼총사
// 자체 combination 함수 만들었음
function solution(number) {
  let answer = 0;
  const combin = (arr, idx, com, l) => {
    if (l === 3) {
      if (com.reduce((a, cur) => a + cur, 0) === 0) answer++;
    }

    for (let i = idx; i < arr.length; i++) {
      com.push(arr[i]);
      combin(arr, i + 1, com, l + 1);
      com.pop();
    }
  };
  combin(number, 0, [], 0);
  return answer;
}

// 시저암호
// a 97 z 122
// A 65 Z 90
function solution(s, n) {
  let answer = "";
  const arr = [...s];
  arr.forEach((e) => {
    const charNum = e.charCodeAt();
    if (64 < charNum && charNum < 91)
      answer += String.fromCharCode(
        charNum + n > 90 ? charNum + n - 91 + 65 : charNum + n
      );
    else if (96 < charNum && charNum < 123)
      answer += String.fromCharCode(
        charNum + n > 122 ? charNum + n - 123 + 97 : charNum + n
      );
    else answer += e;
  });
  return answer;
}

// 문자열 마음대로 정렬하기
// 아 문자열 정렬 어렵네~
// 자세한건 https://gurtn.tistory.com/184 여기 보고 합시다~
function solution(strings, n) {
  strings.sort(
    (a, b) =>
      [...a][n].charCodeAt() - [...b][n].charCodeAt() || (a < b ? -1 : 1)
  );
  return strings;
}
