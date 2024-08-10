// 틀린거
function solution(number, k) {
  let answer = 0;
  const len = number.length;
  const recur = (idx, cnt, num) => {
    if (idx > len) return;
    if (cnt == len - k) {
      answer = Math.max(answer, parseInt(num));
      return;
    }
    const addNum = number[idx];
    recur(idx + 1, cnt, num);
    recur(idx + 1, cnt + 1, num + addNum);
  };

  recur(0, 0, "");
  return answer.toString();
}

// 정답
function solution(number, k) {
  const arr = [];
  for (let i = 0; i < number.length; i++) {
    // 배열 마지막 숫자와 현재 숫자를 비교하며 현재 숫자가 더 크면 해당 숫자를 pop함
    while (arr.length > 0 && arr[arr.length - 1] < number[i] && k > 0) {
      // 현재 숫자보다 큰 수가 나올때까지 최대 k번 반복함
      k--;
      arr.pop();
    }
    arr.push(number[i]);
  }
  arr.splice(number.length - k, k); // 모든 숫자를 비교한 후 k가 0보다 크면 남은 k만큼 뒤에서 제거함
  return arr.join("");
}
