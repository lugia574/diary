function solution(numbers) {
  let answer = [];
  for (let num of numbers) {
    if (num % 2 === 0) {
      answer.push(num + 1);
      continue;
    }
    const numBinary = num.toString(2);
    const position = numBinary.lastIndexOf("0");

    if (position === -1) {
      answer.push(parseInt("10" + numBinary.slice(1), 2));
      continue;
    }
    const value =
      numBinary.slice(0, position) + "10" + numBinary.slice(position + 2);
    answer.push(parseInt(value, 2));
  }
  return answer;
}
