function solution(n, m, hole) {
  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }, () => [-1, -1])
  );
  dp[1][1][0] = 0;

  const mp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  for (const [x, y] of hole) {
    mp[x][y] = 1;
  }

  const q = [];
  q.push([1, 1, 0]);

  while (q.length > 0) {
    const [x, y, b] = q.shift();

    const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    for (const [dx, dy] of directions) {
      for (let s = 0; s < 2; s++) {
        if (b === 1 && s === 1) continue;
        const nx = x + dx * (s + 1);
        const ny = y + dy * (s + 1);
        const nb = b | s;

        if (
          nx < 1 ||
          ny < 1 ||
          nx > n ||
          ny > m ||
          mp[nx][ny] > 0 ||
          dp[nx][ny][nb] !== -1
        )
          continue;

        q.push([nx, ny, nb]);
        dp[nx][ny][nb] = dp[x][y][b] + 1;
      }
    }
  }

  let res = dp[n][m][1];
  if (res === -1 || (dp[n][m][0] >= 0 && res > dp[n][m][0])) {
    res = dp[n][m][0];
  }

  return res;
}
