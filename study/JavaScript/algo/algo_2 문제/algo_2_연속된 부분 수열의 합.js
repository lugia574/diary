function solution(sequence, k) {
  let answer = [];
  const len = sequence.length;
  let seqSum = 0;
  const stack = [];

  for (let i = 0; i < len; i++) {
    while (seqSum + sequence[i] > k && stack) seqSum -= sequence[stack.shift()];

    stack.push(i);
    seqSum += sequence[i];
    if (seqSum === k) answer.push([stack[0], stack[stack.length - 1]]);
  }
  answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
  return answer[0];
}

// 투 포인트로 다시 풀어야해
function solution(sequence, k) {
  let answer = [];
  const len = sequence.length;
  const prePix = new Array(len + 1).fill(0);
  prePix[1] = sequence[0];
  for (let i = 1; i < len; i++) prePix[i + 1] = sequence[i] + prePix[i];

  let left = 0;
  let right = 1;

  while (left <= right) {
    const seqSum = prePix[right] - prePix[left];
    if (seqSum === k) {
      answer.push([left, right - 1]);
      left++;
    } else if (seqSum < k) right++;
    else left++;
  }

  answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
  return answer[0];
}

const sequence = [1, 2, 3, 4, 5];
const k = 7;
const result = [2, 3];

console.log(solution(sequence, k));
