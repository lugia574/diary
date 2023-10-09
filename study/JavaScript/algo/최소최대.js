function max_min_solution(s) {
  var answer = "";
  var list = s.split(" ");
  var max = Math.max(...list);
  var min = Math.min(...list);
  answer = min + " " + max;
  return answer;
}

function JadenCase_solution(s) {
  let answer = "";
  let newStr = s.toLowerCase();
  answer = newStr[0].toUpperCase();
  for (let i = 1; i < newStr.length; i++) {
    if (newStr[i - 1] == " ") {
      answer += newStr[i].toUpperCase();
    } else {
      answer += newStr[i];
    }
  }
  console.log(answer);
  return answer;
}

// JavaScript의 sort() 메서드는 기본적으로 문자열로 변환하여 사전식(lexical)으로 정렬합니다.
// 그렇기 때문에 기본 sort()를 사용하면 원하는 대로 숫자를 정렬할 수 없을 수 있습니다.
// 예를 들어, 배열 [1, 11, 2]를 정렬하면 기본 sort()를 사용하면 [1, 11, 2]가 되고, 이것은 숫자의 크기대로 정렬되지 않습니다.

// 따라서 숫자를 제대로 정렬하려면 비교 함수(comparator function)를 sort() 메서드에 제공해야 합니다.
// 비교 함수를 제공하면 숫자를 올바른 순서로 정렬할 수 있습니다. a - b 형태의 비교 함수는 오름차순 정렬을 수행하며 b - a 형태의 비교 함수는 내림차순 정렬을 수행합니다.

// 따라서 배열 A와 B를 올바른 순서로 정렬하려면 비교 함수를 제공해야 합니다.
// 이를 위해 (a, b) => a - b와 (a, b) => b - a를 사용하여 오름차순 및 내림차순 정렬을 수행한 것입니다.

// 따라서 비교 함수 없이 A.sort() 및 B.sort()를 사용하면 예상치 않은 결과가 나타날 수 있으므로,
// 숫자 배열을 올바르게 정렬하려면 비교 함수를 사용하는 것이 좋습니다.

function solution(A, B) {
  A.sort((a, b) => a - b); // 배열 A 오름차순 정렬
  B.sort((a, b) => b - a); // 배열 B 내림차순 정렬

  let answer = 0;
  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}

// const s = "1 2 3 4";
// const res = "1 4";
// const answer = solution(s);
// console.log(res === answer, answer);
