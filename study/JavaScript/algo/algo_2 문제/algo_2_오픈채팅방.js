// 그냥 객체랑 로그 기억하는 배열 이용하면 될꺼 같은데
// 너무 쉽고
function solution(record) {
  const answer = [];
  const log = [];
  const user = {};
  for (let i = 0; i < record.length; i++) {
    const [order, id, nickname] = record[i].split(" ");
    if (order === "Change") {
      user[id] = nickname;
      continue;
    }
    if (order === "Enter") {
      user[id] = nickname;
      log.push([0, id]);
    } else if (order === "Leave") {
      log.push([1, id]);
    }
  }

  for (let i = 0; i < log.length; i++) {
    const [logOrder, logId] = log[i];
    let message = "";
    if (log_order === 0) message = `${user[log_id]}님이 들어왔습니다.`;
    else message = `${user[log_id]}님이 나갔습니다.`;
    answer.push(message);
  }
  return answer;
}
