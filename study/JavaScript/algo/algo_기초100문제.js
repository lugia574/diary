// https://velog.io/@gagaeun/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%B6%84%EC%88%98%EC%9D%98-%EB%8D%A7%EC%85%88
// 아니 최대공약수 푸는걸 왜 기억을 못해 멍청한 새끼야 진짜 어유 천치새끼가 아주
function solution(numer1, denom1, numer2, denom2) {
  let numer = numer1 * denom2 + numer2 * denom1;
  let denom = denom1 * denom2;
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const gcdNum = gcd(denom, numer);
  return [numer / gcdNum, denom / gcdNum];
}

//////
// 이건 reduce 함수 배열 순회하면서 a를 뽑아서 b (기존값)에 적용하는거 맨 뒤 매개변수는 기존값 세팅
function solution(numbers) {
  const sumNum = numbers.reduce((a, b) => a + b, 0);
  return sumNum / numbers.length;
}

/// repeat 애는 또 뭐냐 보니까 뭔소린지는 알겠는데 흠흠흠
function solution(my_string, n) {
  var answer = [...my_string].map((v) => v.repeat(n)).join("");
  console.log(answer);
  return answer;
}

// 맵을 이렇게 해버리네
function solution(strlist) {
  return strlist.map((el) => el.length);
}

// 이건 생각 못했네
// 대충 abcdea 라는 문자열 있을때 letter 값이 a 면 bcde 반환 해주는건데 이걸 이렇게 하네
function solution(my_string, letter) {
  const answer = my_string.split(letter).join("");
  return answer;
}

// 최빈값

function solution(array) {
  // array의 길이가 1일 경우 갯수가 하나이기에
  // 그 값을 반환해준다.
  if (array.length === 1) return array[0];

  const obj = {};
  const answer = [];

  // array를 forEach() 반복문을 돌려
  // obj에 값이 없으면 값을 만들고 1을 넣어주고
  // obj에 값이 있으면 기존 값 +1을 해준다.
  array.forEach((n) => {
    obj[n] = ++obj[n] || 1;
  });

  // 값과 그 값의 갯수를 정의해 둔 obj를 array에 넣어준다.
  // ex) [[1, 1], [2, 1], [3, 3], [4, 1]]
  for (let key in obj) {
    answer.push([key, obj[key]]);
  }

  // answer 배열을 갯수 기준으로 내림차순 정렬을 해준다.
  // ex) [[3, 3], [4, 1], [2, 1], [1, 1]]
  answer.sort((a, b) => b[1] - a[1]);

  // 최빈값이 여러 개면 -1을 반환해야 하기 때문에 확인한다.
  if (answer.length > 1 && answer[0][1] === answer[1][1]) return -1;

  // 여러개가 아니라면 정렬한 처음 값을 반환한다.
  return Number(answer[0][0]);
}

/// 이게 뭐시다냐
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const n = Number(input[0]);
  let logStr = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      logStr += "*";
    }
    logStr += "\n";
  }
  console.log(logStr);
});

// 정규표현식 개머싯어~
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}

// map 이용해서 순서
function solution(emergency) {
  let order = new Map();
  let desc = [...emergency].sort((a, b) => b - a);
  for (let i = 0; i < desc.length; i++) {
    order.set(desc[i], i + 1);
  }
  return emergency.map((v) => order.get(v));
}

// 팩토리얼
function solution(balls, share) {
  const fac = (num) => (num === 0 ? 1 : num * fac(num - 1));

  return Math.round(fac(balls) / fac(balls - share) / fac(share));
}

// 아스키 코드
function solution(my_string) {
  let answer = "";
  [...my_string].forEach((x) => {
    if (x.charCodeAt() > 96) answer += x.toUpperCase();
    else answer += x.toLowerCase();
  });

  // String.fromCharCode(숫자) 숫자 > 코드값
  return answer;
}

// 정규표현식 하아하ㅏㅏ아
function solution(my_string) {
  return my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map((n) => Number(n));
}

// 흠 풀면서 딱히 쓸게 없었음 ㅋㅋ
// toLowerCase(); toUpperCase(); 이것을 기억하자
const fn = (e) => {
  e = e.toLowerCase;
  // or
  e = e.toUpperCase;
  return e;
};

// 이거 dp 아닌가???
// 아닌가 걍 누적합인가??
// 는 그냥 1차원적으로 품 애초에 dp, 누적합 할 정도로 복잡한 문제가 아님
// 기억해야할껀 변수.toString(); 라는거.
function solution(i, j, k) {
  var answer = 0;
  for (let idx = i; idx < j + 1; idx++) {
    const s = [...idx.toString().split("")];
    s.forEach((e) => {
      if (parseInt(e) === k) answer++;
    });
  }
  return answer;
}

// 스택으로 풀었음
function solution(my_string) {
  var answer = 0;
  const arr = [...my_string];
  let stack = [];
  arr.forEach((e) => {
    if (isNaN(e)) {
      if (stack.length === 0) return;
      answer += parseInt(stack.join(""));
      stack = [];
    } else {
      stack.push(e);
    }
  });
  if (stack.length > 0) answer += parseInt(stack.join(""));
  return answer;
}
// 와 시바 역시 정규표현식이 짜세긴 해
function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}

// 이진수 더하기
const solution = (bin1, bin2) =>
  (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);

// 근본으로 한다면
// 음 근데 어렵다
function solution(bin1, bin2) {
  // 1. 두 이진수 문자열을 정수로 변환하고 더합니다.
  let temp = Number(bin1) + Number(bin2);
  // 2. 더한 결과를 문자열로 변환한 뒤, 뒤집고 각 자릿수를 정수 배열로 저장합니다.
  temp = [...temp.toString()].reverse().map((v) => +v);

  // 3. 자릿수를 11자리로 맞추기 위해 부족한 자릿수에 0을 추가합니다.
  for (let i = temp.length; i < 11; i++) {
    temp.push(0);
  }

  // 4. 각 자릿수를 검사하면서 2 이상인 경우, 다음 자릿수로 올림을 처리합니다.
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === 2) {
      temp[i] = 0;
      temp[i + 1]++;
    } else if (temp[i] === 3) {
      temp[i] = 1;
      temp[i + 1]++;
    }
  }
  // 5. 처리한 결과를 문자열로 변환하고, 다시 뒤집어서 이진수 문자열로 반환합니다.
  return Number(temp.reverse().join("")).toString();
}

/// 문자열 자르기

function solution(my_str, n) {
  var answer = [];
  for (let i = 0; i < my_str.length; i += n) {
    answer.push(my_str.substr(i, n));
  }
  return answer;
}

// x 축 기준으로 먼저 배열 정렬을 해주고
// 인덱스가 0, 1인 애들을 비교하면 x축이 같기 때문에 y, 즉, 세로의 길이를 구할 수 있고,
// 인덱스가 0, 2인 애들을 비교하면 y축 값이 다르든 말든 x, 즉, 가로의 길이를 구할 수 있다.
function solution(dots) {
  dots.sort((a, b) => a[0] - b[0]);
  return Math.abs(dots[0][1] - dots[1][1]) * Math.abs(dots[1][0] - dots[2][0]);
}

/// 와씨 구현 문제 진짜 ㅋㅋㅋ
function solution(polynomial) {
  let answer = "";
  const s = polynomial.split(" ");
  const numHash = {};
  numHash["x"] = 0;
  numHash["num"] = 0;

  s.forEach((e) => {
    if (e[0] === "+") return;
    const size = e.length;
    if (e[size - 1] === "x") {
      if (size > 1) numHash["x"] += parseInt(e.substr(0, size - 1));
      else numHash["x"] += 1;
    } else numHash["num"] += parseInt(e);
  });

  for (key in numHash) {
    if (numHash[key] === 0) continue;
    if (key === "num")
      answer += answer.length > 0 ? " + " + numHash[key] : numHash[key];
    else answer += numHash[key] > 1 ? numHash[key] + key : key;
  }
  return answer;
}

// 삼각형의 가장 긴 변의 길이가 나머지 두 변의 길이의 합보다 작아야합니다
// max = 주어진 두 변 중 긴 한 변
// min = 주어진 두 변 중 짧은 한 변

// case1: 주어진 두 변의 길이 중 하나가 가장 긴 변일 경우
// max < min + (다른 한 변)
// max - min < (다른 한 변)

// case2: 주어진 두 변 외에 다른 긴 변이 있는 경우
// (다른 한 변) < max + min

// 두 케이스를 조합하면
// max - min < (다른 한 변) < max + min 이므로
// (다른 한 변)이 나올 수 있는 가짓수는
// (max + min) - (max - min) - 1 = min * 2 - 1 입니다
function solution(sides) {
  let count = 0;
  const max = Math.max(...sides);
  const min = Math.min(...sides);
  for (let i = max - min + 1; i < max + min; i++) {
    count++;
  }
  return count;
}

// BFS 다
// const visited = Array.from({ length: n }, () => Array(n).fill(0)); <<<<<<< 빈 배열 만들기
// const arr = Array.from({length: 10}, x => 0); <<<<<<<<<<<<< 1차 배열은 이러케
function solution(board) {
  const n = board.length;

  let answer = n * n;
  const visited = Array.from({ length: n }, () => Array(n).fill(0));
  const dx = [0, 1, 1, 1, 0, -1, -1, -1];
  const dy = [-1, -1, 0, 1, 1, 1, 0, -1];

  const queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j] === 0 && board[i][j] === 1) {
        answer -= 1;
        visited[i][j] = 1;
        queue.push([i, j]);
      }
    }
  }

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (0 <= nx && nx < n && 0 <= ny && ny < n) {
        if (visited[nx][ny] === 1) continue;
        visited[nx][ny] = 1;
        answer -= 1;
      }
    }
  }

  return answer;
}

// DFS 다 근데 보기에는 좀 별로다
function solution(board) {
  const n = board.length;

  const dfs = (x, y) => {
    if (x < 0 || x >= n || y < 0 || y >= n) {
      return;
    }

    if (visited[x][y] === 1 || board[x][y] === 0) {
      return;
    }

    visited[x][y] = 1;

    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      dfs(nx, ny);
    }
  };

  let answer = n * n;
  const visited = Array.from({ length: n }, () => Array(n).fill(0));
  const dx = [0, 1, 1, 1, 0, -1, -1, -1];
  const dy = [-1, -1, 0, 1, 1, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j] === 0 && board[i][j] === 1) {
        answer -= 1;
        dfs(i, j);
      }
    }
  }

  return answer;
}

// 기울기 아 난 수학 너무 약해
function solution(dots) {
  if (calculateSlope(dots[0], dots[1]) === calculateSlope(dots[2], dots[3]))
    return 1;
  if (calculateSlope(dots[0], dots[2]) === calculateSlope(dots[1], dots[3]))
    return 1;
  if (calculateSlope(dots[0], dots[3]) === calculateSlope(dots[1], dots[2]))
    return 1;
  return 0;
}

function calculateSlope(arr1, arr2) {
  return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
}

// 먼소리냐 등수매기기
// https://velog.io/@hedakim/프로그래머스-Javascript-등수-매기기
// 이게 훨씬 이해하기 쉽네 https://www.youtube.com/watch?v=5nN02Qdklvc
function solution(score) {
  // 1. score의 길이와 동일하고, 모든 요소가 1인 배열을 선언한다.
  let answer = new Array(score.length).fill(1);

  // 2. score 배열의 각 평균 점수를 계산한 배열 avg를 선언한다.
  const avg = score.map((e) => (e[0] + e[1]) / 2);

  // 3. 이중 for문을 사용, i번째 값보다 큰 j값이 있다면 i의 값에 1을 더한다.
  for (let i = 0; i < avg.length; i++) {
    for (let j = 0; j < avg.length; j++) {
      if (avg[i] < avg[j]) answer[i]++;
    }
  }

  return answer;
}

// 배열로 체크
function solution(lines) {
  var answer = 0;
  let lineMap = new Array(200).fill(0); // 선분들이 놓일 공간
  lineMap.fill(0);

  for (let i = 0; i < 3; i++) {
    let left = lines[i][0];
    let right = lines[i][1];

    for (let j = left; j < right; j++) {
      lineMap[j + 100] += 1;
    }
  }

  for (let i in lineMap) {
    if (lineMap[i] > 1) {
      answer += 1;
    }
  }

  return answer;
}

/// sort 진심 역겹
// 이러면 n 의 가까운순으로 정렬하데 같은 값이면 큰값으로 정렬이 된다고??
// || 가 앞에 식이 0 이 될 경우 하라는거야?
// 네, JavaScript에서 || (논리 OR 연산자)는 앞에 있는 표현식이 0, null, undefined,
// 빈 문자열 또는 false와 같이 falsy한 값인 경우, 그 결과가 뒤에 있는 표현식의 값을 따릅니다.
// 따라서 Math.abs(a - n) - Math.abs(b - n) || b - a에서:

// Math.abs(a - n) - Math.abs(b - n)가 0이면, b - a로 판단됩니다.
// Math.abs(a - n) - Math.abs(b - n)가 0이 아니라면, Math.abs(a - n) - Math.abs(b - n)로 판단됩니다.
// 이것은 기본적으로 정렬의 우선순위를 설정하는 것이며, 정렬을 수행할 때 특정 조건을 만족하는 요소들을 앞으로 두거나 뒤로 두고자 할 때 유용합니다.
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

// 문자열 문제의 마스터키 >>> 정규식 시벌 ㅋㅋ 그냥 ㅈ사기 그자체 ㅋㅋ
function solution(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex.test(word)) answer++;
  });

  return answer;
}

// 모야모야 내가 푼 방식이랑 완젼 똑같자너~~ ㅋㅋㅋ 개꿀띠야~
// https://leejams.github.io/%EC%97%B0%EC%86%8D%EB%90%9C-%EC%88%98%EC%9D%98-%ED%95%A9/
function solution(num, total) {
  let answer = [];
  let start = Math.ceil(total / num - Math.floor(num / 2));

  for (let i = 0; i < num; i++) answer.push(start++);

  return answer;
}
