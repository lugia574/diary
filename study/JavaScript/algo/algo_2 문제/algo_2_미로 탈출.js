const BFS = (start, board, target) => {
  let time = 0;
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  board[start[0]][start[1]] = "X";
  const que = [start];

  while (que.length > 0) {
    let size = que.length;
    for (let i = 0; i < size; i++) {
      const [x, y] = que.shift();
      for (let d = 0; d < 4; d++) {
        let nx = x + dx[d];
        let ny = y + dy[d];

        if (
          nx < 0 ||
          board.length <= nx ||
          ny < 0 ||
          board[0].length <= ny ||
          board[nx][ny] === "X"
        )
          continue;
        if (target === board[nx][ny]) return time + 1;

        que.push([nx, ny]);
        board[nx][ny] = "X";
      }
    }
    time++;
  }
  return -1;
};

function solution(maps) {
  const mapSize = maps.length;
  let leverLoc;
  let startLoc;

  let board1 = maps.map((e) => e.split(""));
  let board2 = maps.map((e) => e.split(""));

  for (let i = 0; i < mapSize; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] === "L") leverLoc = [i, j];
      if (maps[i][j] === "S") startLoc = [i, j];
    }
  }

  const a = BFS(
    startLoc,
    board1.map((row) => [...row]),
    "L"
  );
  const b = BFS(
    leverLoc,
    board2.map((row) => [...row]),
    "E"
  );

  if (a === -1 || b === -1) return -1;

  return a + b;
}
