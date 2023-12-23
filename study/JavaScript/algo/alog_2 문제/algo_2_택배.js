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
