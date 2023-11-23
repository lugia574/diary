// k진수에서 소수 개수 구하기
// 설명이 좀 개 같네
// so easy
function solution(n, k) {
  var answer = 0;
  const binary = n.toString(k);

  let stack = [];
  const isPrime = (e) => {
    if (e === 1 || e === 0) return;
    const sqrtNum = Math.floor(Math.sqrt(e)) + 1;
    for (let i = 2; i < sqrtNum; i++) if (e % i === 0) return;
    answer++;
  };

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "0" && stack.length > 0) {
      isPrime(parseInt(stack.join("")));
      stack = [];
    } else if (binary[i] != "0") stack.push(binary[i]);
  }
  if (stack.length > 0) isPrime(parseInt(stack.join("")));
  return answer;
}
