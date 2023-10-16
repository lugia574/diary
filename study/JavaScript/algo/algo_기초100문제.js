// https://velog.io/@gagaeun/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%B6%84%EC%88%98%EC%9D%98-%EB%8D%A7%EC%85%88
// 아니 최대공약수 푸는걸 왜 기억을 못해 멍청한 새끼야 진짜 어유 천치새끼가 아주
function solution(numer1, denom1, numer2, denom2) {
  let numer = numer1 * denom2 + numer2 * denom1;
  let denom = denom1 * denom2;
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const gcdNum = gcd(denom, numer);
  return [numer / gcdNum, denom / gcdNum];
}
