// 단순히 2중 포문으로 하면 무조건 시초임
// 그럼 어떻게 하냐
// 와씨 오랜만에 머리 쓰는거 풀어서 고생했네 ㅋㅋ
// 이거 스택문제임
// answer 배열을 numbers.length 만큼 -1 로 초기화 해놓고
// 0 부터 반복문을 돌며선 stack 에 박아
// 현재값이 stack 에 박힌 최상단에 보다 크면 while 문을 돌리며 해당 값을 answer에 박아주는거지

function solution(numbers) {
  const SIZE = numbers.length;
  let answer = new Array(SIZE).fill(-1);

  const stack = [];
  for (let i = 0; i < SIZE; i++) {
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i])
      answer[stack.pop()] = numbers[i];
    stack.push(i);
  }
  return answer;
}
