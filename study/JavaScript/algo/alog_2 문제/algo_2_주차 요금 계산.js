// 또 존나 귀찮은 문제 나왔다
function solution(fees, records) {
  let answer = [];
  const LAST_MINUTE_OF_DAY = 1439;
  const inTime = {};
  const totalUseTime = {};
  const check = (m, num) => {
    if (num in totalUseTime) totalUseTime[num] += m - inTime[num];
    else totalUseTime[num] = m - inTime[num];
  };

  // records 돌리기
  for (let i = 0; i < records.length; i++) {
    let [t, num, order] = records[i].split(" ");
    num = parseInt(num);
    const m = parseInt(t.slice(0, 2)) * 60 + parseInt(t.slice(3));
    if (order === "IN") {
      inTime[num] = m;
    } else if (order === "OUT") {
      check(m, num);
      inTime[num] = -1;
    }
  }

  // 출차 내역 없는거
  Object.keys(inTime).forEach((k) => {
    if (inTime[k] > -1) {
      check(LAST_MINUTE_OF_DAY, k);
    }
  });

  // 요금 구하기
  Object.keys(totalUseTime).forEach((k) => {
    if (totalUseTime[k] === 0) {
      answer.push(0);
      return;
    }
    let cost = 0;
    totalUseTime[k] -= fees[0];
    if (totalUseTime[k] > 0)
      cost = fees[1] + Math.ceil(totalUseTime[k] / fees[2]) * fees[3];
    else cost = fees[1];

    answer.push(cost);
  });
  return answer;
}
