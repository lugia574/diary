// 약수들의 합
const cd = (a) => {
  const cdSet = new Set();
  const sqrtNum = Math.floor(Math.sqrt(a)) + 1;
  for (let i = 1; i < sqrtNum; i++) {
    if (a % i === 0) {
      cdSet.add(i);
      cdSet.add(a / i);
    }
  }
  return Array.from(cdSet);
};
function solution(n) {
  const arr = cd(n);
  return arr.reduce((a, cur) => a + cur, 0);
}

// 자리수 더하기
function solution(n) {
  return [...n.toString()].reduce((a, cur) => parseInt(a) + parseInt(cur), 0);
}

// 정수인지 실수인지 판별
Number.isInteger(숫자);

// 슬라이스
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}

// 아스키 코드로 문자sort
function solution(s) {
  var answer = "";
  const arr = [...s].sort((a, b) => b.charCodeAt() - a.charCodeAt());
  return arr.join("");
}

// 최대공약수, 최소공배수 섹섹
function solution(n, m) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const gcdNum = gcd(n, m);
  return [gcdNum, (m * n) / gcdNum];
}

// toUpperCase, toLowerCase 둘다 쓴 문제
// 이상한 문자 만들기
function solution(s) {
  const arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    const word = [...arr[i]];
    for (let j = 0; j < word.length; j++) {
      if (j % 2 === 0) word[j] = word[j].toUpperCase();
      else word[j] = word[j].toLowerCase();
    }
    arr[i] = word.join("");
  }
  return arr.join(" ");
}

// 삼총사
// 자체 combination 함수 만들었음
function solution(number) {
  let answer = 0;
  const combin = (arr, idx, com, l) => {
    if (l === 3) {
      if (com.reduce((a, cur) => a + cur, 0) === 0) answer++;
    }

    for (let i = idx; i < arr.length; i++) {
      com.push(arr[i]);
      combin(arr, i + 1, com, l + 1);
      com.pop();
    }
  };
  combin(number, 0, [], 0);
  return answer;
}

// 시저암호
// a 97 z 122
// A 65 Z 90
function solution(s, n) {
  let answer = "";
  const arr = [...s];
  arr.forEach((e) => {
    const charNum = e.charCodeAt();
    if (64 < charNum && charNum < 91)
      answer += String.fromCharCode(
        charNum + n > 90 ? charNum + n - 91 + 65 : charNum + n
      );
    else if (96 < charNum && charNum < 123)
      answer += String.fromCharCode(
        charNum + n > 122 ? charNum + n - 123 + 97 : charNum + n
      );
    else answer += e;
  });
  return answer;
}

// 문자열 마음대로 정렬하기
// 아 문자열 정렬 어렵네~
// 자세한건 https://gurtn.tistory.com/184 여기 보고 합시다~
function solution(strings, n) {
  strings.sort(
    (a, b) =>
      [...a][n].charCodeAt() - [...b][n].charCodeAt() || (a < b ? -1 : 1)
  );
  return strings;
}

// 둠스데이 알고리즘
// 아 이런거 몰라잉
function solution(a, b) {
  const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  // 윤년의 일 수
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let count = -1; // 0~365일

  for (let i = 0; i < a - 1; i++) {
    count += month[i];
  }

  return days[(count + b) % 7];
}

// 또는 그냥 date 쓰면
function getDayName(a, b) {
  var tempDate = new Date(2016, a - 1, b);

  return tempDate.toString().slice(0, 3).toUpperCase();
}

// 소수 찾기 좀더 효율적으로 개선한거
function solution(n) {
  let answer = 0;
  const arr = new Array(n + 1).fill(true);

  for (let i = 2; i <= n; ++i) {
    // 이미 소수가 아닌 인덱스는 건너뛴다.
    if (arr[i] === false) {
      continue;
    }
    // 배수는 소수가 아니라 0으로 설정
    for (let k = i * 2; k <= n; k += i) {
      arr[k] = false;
    }
  }
  // 소수의 갯수를 구한다.
  for (let i = 2; i <= n; ++i) {
    if (arr[i] === true) {
      answer++;
    }
  }
  return answer;
}

// js 에서 0으로 채워진 배열 선언하기
// 1차원
const zeroFullArr1 = new Array(길이).fill(0);

// 2차원
const zeroFullArr2 = Array.from({ length: 길이 }, () =>
  new Array(길이).fill(0)
);

// 비밀지도
function solution(n, arr1, arr2) {
  var answer = [];
  const arr = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    let route = (arr1[i] | arr2[i]).toString(2);

    let sp = "";
    if (route.length < n) for (let i = 0; i < n - route.length; i++) sp += "0";
    route = sp + route;

    let row = "";
    for (let i = 0; i < n; i++) {
      if (route[i] === "1") row += "#";
      else if (route[i] === "0") row += " ";
    }
    answer.push(row);
  }
  return answer;
}

// 숫자짝꿍
function solution(X, Y) {
  // 각 숫자의 등장 횟수를 세기 위한 배열
  const countX = new Array(10).fill(0);
  const countY = new Array(10).fill(0);

  // X와 Y에서 각 숫자의 등장 횟수를 센다
  for (let i = 0; i < X.length; i++) {
    countX[parseInt(X[i])]++;
  }
  for (let i = 0; i < Y.length; i++) {
    countY[parseInt(Y[i])]++;
  }

  let result = "";

  // 9부터 0까지의 숫자 중, 두 수에서 공통으로 나타나는 숫자를 찾음
  for (let num = 9; num >= 0; num--) {
    const commonCount = Math.min(countX[num], countY[num]);
    if (commonCount > 0) {
      // 해당 숫자를 두 수에서 최소 등장 횟수만큼 붙임
      result += num.toString().repeat(commonCount);
    }
  }

  // 공통으로 나타나는 숫자가 없는 경우 -1을 반환
  return result === "" ? "-1" : result;
}

// 크레인 인형뽑기 게임
// 아 졸리다 한숨 자고 싶네
function solution(board, moves) {
  var answer = 0;
  const boardSize = board.length;
  const stack = [];
  moves.forEach((loc) => {
    let obj = 0;
    let stackSize = stack.length;
    let x = 0;
    for (let i = boardSize - 1; i > -1; i--) {
      if (board[i][loc - 1] === 0) break;
      obj = board[i][loc - 1];
      x = i;
    }
    board[x][loc - 1] = 0;
    if (obj === 0) return;
    if (stackSize > 0 && stack[stackSize - 1] === obj) {
      stack.pop();
      answer += 2;
    } else stack.push(obj);
  });
  return answer;
}
