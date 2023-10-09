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

// const s = "1 2 3 4";
// const res = "1 4";
// const answer = solution(s);
// console.log(res === answer, answer);
