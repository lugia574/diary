function solution(arr) {
  let answer = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (answer.length > 0 && answer[answer.length - 1] == arr[i]) continue;
    answer.push(arr[i]);
  }

  return answer;
}

const arr = [1, 1, 3, 3, 0, 1, 1];

console.log(solution(arr));

/// 기능개발
function solution(progresses, speeds) {
  const queue = [];

  for (let i = 0; i < progresses.length; i++) {
    queue.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  const answer = [];

  while (queue.length > 0) {
    const day = queue.shift(); // 요런것도 있네 몰랐다
    let count = 1;

    while (queue.length > 0 && day >= queue[0]) {
      count++;
      queue.shift();
    }

    answer.push(count);
  }

  return answer;
}

// Example usage:
const progresses = [93, 30, 55];
const speeds = [1, 30, 5];
const result = solution(progresses, speeds);
console.log(result); // This will print the result in an array.
