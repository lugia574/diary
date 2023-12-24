function solution(order) {
  const answer = [];
  const stack = [];
  let idx = 0;
  for (let i = 1; i < order.length + 1; i++) {
    if (order[idx] === i) {
      answer.push(i);
      idx++;
    } else stack.push(i);

    while (stack.length && stack[stack.length - 1] === order[idx]) {
      answer.push(stack.pop());
      idx++;
    }
  }
  return answer.length;
}


function solution2(n) {
  if (n <= 2) return n;

  let prev1 = 1;
  let prev2 = 2;

  for (let i = 3; i <= n; i++) {
      const current = (prev1 + prev2) % 1000000007;
      prev1 = prev2;
      prev2 = current;
  }

  return prev2;
}