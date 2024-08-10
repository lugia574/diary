function solution(book_time) {
  let answer = [];
  const timeArr = [];

  // 싹다 분으로 변경
  book_time.forEach((items) => {
    const tmp = [];
    items.forEach((time) => {
      const [hour, mintue] = time.split(":");
      tmp.push(parseInt(hour) * 60 + parseInt(mintue));
    });
    timeArr.push(tmp);
  });
  // 시작 시간 빠른순으로 정렬
  timeArr.sort((a, b) => a[0] - b[0]);

  while (timeArr.length) {
    const [start, end] = timeArr.shift();
    if (answer.length === 0) {
      answer.push(end);
      continue;
    }

    let isfull = true;
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] <= start) {
        answer[i] = end + 10;
        isfull = false;
        break;
      }
    }
    if (isfull) answer.push(end + 10);
  }

  return answer.length;
}
