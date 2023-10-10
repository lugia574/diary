// 근데 이러면 초기화됨
function solution(s) {
  var answer = true;

  s.forEach((e) => {
    let size = stack.length;
    if (size == 0) {
      stack.push(e);
    } else {
      if (stack[size - 1] === "(" && e === ")") {
        stack.pop();
      } else {
        stack.push(e);
      }
    }
  });
  if (stack.length > 0) answer = false;
  return answer;
}

// 그래서 이렇게 그냥 count 로 조져야함
// 는 안되는데???? >> 는 내가 어련히 바꿈
function solution(s) {
  let arr = s.split("");
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") cnt += 1;
    else if (arr[i] === ")") {
      if (cnt === 0) return false;
      cnt -= 1;
    }
  }

  if (cnt === 0) return true;
  else return false;
}
// 이렇게 하라고 하데???
function solution(s) {
  let cum = 0;
  for (let paren of s) {
    cum += paren === "(" ? 1 : -1;
    if (cum < 0) {
      return false;
    }
  }
  return cum === 0 ? true : false;
}

///////// 이진 변환 반복하기
function binaryScale(len) {
  const answer = len.toString(2);
  return answer;
}

function solution(s) {
  let conversion = 0;
  let zeroCount = 0;
  let arr = s.split("");

  while (arr.length > 1) {
    conversion += 1;
    let tmp = [];
    for (const i of arr) {
      if (i === "1") tmp.push(i);
      else {
        zeroCount += 1;
      }
    }
    arr = binaryScale(tmp.length);
  }
  return [conversion, zeroCount];
}
