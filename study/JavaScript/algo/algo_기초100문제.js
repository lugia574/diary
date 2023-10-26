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
