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
