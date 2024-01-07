function solution(n) {
  let answer = [];
  const arr = Array.from(Array(n), () => new Array(n).fill(0));

  const dx = [1, 0, -1];
  const dy = [0, 1, -1];
  let x = 0;
  let y = 0;
  let dir = 0;
  let num = 1;

  while (true) {
    arr[x][y] = num++;
    let nx = dx[dir] + x;
    let ny = dy[dir] + y;
    if (0 > nx || nx === n || 0 > ny || ny === n || arr[nx][ny] !== 0) {
      dir = (dir + 1) % 3;
      nx = dx[dir] + x;
      ny = dy[dir] + y;
      if (0 > nx || nx === n || 0 > ny || ny === n || arr[nx][ny] !== 0) break;
    }

    x = nx;
    y = ny;
  }
  answer = arr.flat().filter((num) => num > 0);
  return answer;
}

const n = 4;
const result = [1, 2, 9, 3, 10, 8, 4, 5, 6, 7];

console.log(solution(n));
