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
// 이렇게 하면 비어 있는 생태로 길이만큼
const emptyFullArr1 = new Array(길이);

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

// 키패드 누르기
// 이거 고생깨나 했다
function solution(numbers, hand) {
  const loc = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  var answer = "";
  let leftHand = loc["*"];
  let rightHand = loc["#"];

  const getDistance = (cur, next) =>
    Math.abs(next[0] - cur[0]) + Math.abs(next[1] - cur[1]);

  numbers.forEach((e) => {
    if (e === 1 || e === 4 || e === 7) {
      leftHand = loc[e];
      answer += "L";
      return;
    } else if (e === 3 || e === 6 || e === 9) {
      rightHand = loc[e];
      answer += "R";
      return;
    }

    // 위치 길이
    const ld = getDistance(leftHand, loc[e]);
    const rd = getDistance(rightHand, loc[e]);
    if (ld > rd) {
      rightHand = loc[e];
      answer += "R";
    } else if (ld < rd) {
      leftHand = loc[e];
      answer += "L";
    } else {
      answer += hand === "right" ? "R" : "L";
      rightHand = hand === "right" ? loc[e] : rightHand;
      leftHand = hand === "right" ? leftHand : loc[e];
    }
  });
  return answer;
}

// 공원 산책
// 너무 코드가 길다 굳이 board를 안해도 될꺼 같은데 어차피 X 랑 n, m 만 거르면 되는거지
function solution(park, routes) {
  const dir = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
  let x = 0;
  let y = 0;
  const n = park.length;
  const m = park[1].length;
  let board = [];
  let chek = false;

  for (let i = 0; i < n; i++) {
    board.push([...park[i]]);
    if (chek) continue;
    for (let j = 0; j < m; j++) {
      if (board[i][j] === "S") {
        x = i;
        y = j;
        chek = true;
        break;
      }
    }
  }

  while (routes.length > 0) {
    const loc = routes.shift().split(" ");
    const nd = dir[loc[0]];
    let nx = x;
    let ny = y;
    let ok = true;
    for (let i = 0; i < parseInt(loc[1]); i++) {
      nx += nd[0];
      ny += nd[1];
      if (0 > nx || nx >= n || 0 > ny || ny >= m || board[nx][ny] === "X") {
        ok = false;
        break;
      }
    }
    if (!ok) continue;
    board[x][y] = "O";
    board[nx][ny] = "S";
    x = nx;
    y = ny;
  }
  return [x, y];
}

// 달리기 경주
// 단순히 indexOf 를 사용할시 무조건 시간초과가 걸리도록 설계되어 있음
// 그렇기에 딕셔너리를 사용해서 풀어야함
// 이걸 좀 생각을 잘 못했다
function solution(players, callings) {
  let dic = {};
  players.forEach((name, rank) => (dic[name] = rank));
  for (let i = 0; i < callings.length; i++) {
    // 딕셔너리(오브젝트)
    const curRank = dic[callings[i]];
    dic[callings[i]] -= 1;
    dic[players[curRank - 1]] += 1;

    // 순서바꾸기
    let tmp = players[curRank];
    players[curRank] = players[curRank - 1];
    players[curRank - 1] = tmp;
  }

  return players;
}

// 신규 아이디 추천
// 이거 완전 정규표현식 문제자너 ㅋㅋㅋㅋ
// 아 정규표현식 어렵다 어려워
function solution(new_id) {
  //1, 2단계
  new_id = new_id.toLowerCase().replace(/[^a-z0-9-_\.]/g, "");

  // 3 ~ 6단계
  new_id = new_id.replace(/\.+/g, ".").replace(/^\.|\.$/g, "");
  console.log(new_id);
  if (new_id.length === 0) new_id = "a";
  else if (new_id.length > 15) new_id = new_id.substring(0, 15);
  new_id = new_id.replace(/\.*$/, "");

  // 7단계
  while (new_id.length <= 2) new_id += new_id[new_id.length - 1];

  return new_id;
}

// 개인정보 수집 유효기간
function solution(today, terms, privacies) {
  let current = today.split(".").map((v) => +v);
  let termsKind = {};
  terms.forEach((v) => {
    let [kind, period] = v.split(" ");
    termsKind[kind] = period;
  });

  let result = [];

  privacies.forEach((v, i) => {
    let [past, kind] = v.split(" ");
    let [y, m, d] = past.split(".").map((v) => +v);
    m += +termsKind[kind];
    d--;

    if (m > 12) {
      if (m % 12 === 0) {
        y += parseInt(m / 12) - 1;
        m = 12;
      } else {
        y += parseInt(m / 12);
        m = m % 12;
      }
    }
    if (d === 0) {
      m--;
      d = 28;
      if (m === 0) {
        y--;
        m = 12;
      }
    }
    if (y < current[0]) {
      result.push(i + 1);
      return;
    } else if (y === current[0]) {
      if (m < current[1]) {
        result.push(i + 1);
        return;
      } else if (m === current[1]) {
        if (d < current[2]) {
          result.push(i + 1);
          return;
        }
      }
    }
  });
  return result;
}

// 신고 결과 받기
// 캬 확실히 내가 실력이 늘었다는게 느껴진다 저번에는 손도 못대던 문제였는데 어떻게 이걸 푸냐 ㅋ 그것도 js ㅋㅋ
function solution(id_list, report, k) {
  const userSize = id_list.length;
  let answer = Array(userSize).fill(0);
  const reportSet = Array.from({ length: userSize }, () =>
    Array(userSize).fill(0)
  );
  const reportCountArr = Array(userSize).fill(0);
  const userCode = {};
  id_list.map((name, idx) => {
    userCode[name] = idx;
  });

  for (let i = 0; i < report.length; i++) {
    let [a, b] = report[i].split(" ");
    a = userCode[a];
    b = userCode[b];
    if (reportSet[a][b] === 1) continue;
    reportSet[a][b] = 1;
    reportCountArr[b]++;
  }

  // 신고될 애들 구하기
  let blacklist = [];
  for (let i = 0; i < userSize; i++)
    if (reportCountArr[i] >= k) blacklist.push(i);

  for (let i = 0; i < userSize; i++) {
    for (let j = 0; j < blacklist.length; j++) {
      if (reportSet[i][blacklist[j]] === 1) answer[i]++;
    }
  }
  return answer;
}

// 신고결과 받기 best 풀이 방법
// 확실히 쌈박하긴하네 바로 set, split 로 전처리 해서 박아버리자너
function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}
