const solution = (menu, order, k) => {
  let answer = 0;
  const stack = [];

  order.forEach((o, idx) => {
    const arrivalTime = idx * k;
    while (stack.length > 0 && stack[0] <= arrivalTime) {
      stack.shift();
    }
    const clearTime =
      menu[o] + (stack.length > 0 ? stack[stack.length - 1] : arrivalTime);
    stack.push(clearTime);

    answer = Math.max(stack.length, answer);
  });
  return answer;
};
