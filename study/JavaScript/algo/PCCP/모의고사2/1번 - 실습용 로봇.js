// https://school.programmers.co.kr/learn/courses/20848/lessons/255904?language=javascript

const solution = (command) => {
  const currentLoaction = [0, 0];
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  let dir = 0;
  [...command].forEach((c) => {
    if (c === "R") dir = (dir + 1) % 4;
    else if (c === "L") dir = dir - 1 < 0 ? 3 : (dir - 1) % 4;
    else if (c === "G") {
      currentLoaction[0] += dx[dir];
      currentLoaction[1] += dy[dir];
    } else if (c === "B") {
      currentLoaction[0] -= dx[dir];
      currentLoaction[1] -= dy[dir];
    }
  });
  return currentLoaction;
};
