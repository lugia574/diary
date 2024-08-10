function solution(n, wires) {
  let answer = Infinity;
  const node = Array.from({ length: n + 1 }, () => []);

  // 그래프 생성
  for (const [v1, v2] of wires) {
    node[v1].push(v2);
    node[v2].push(v1);
  }

  // BFS를 이용한 연결된 노드 개수 계산
  const bfs = (start, removeEdge) => {
    const visited = new Array(n + 1).fill(false);
    const queue = [start];
    visited[start] = true;
    let count = 0;

    while (queue.length) {
      const cur = queue.shift();
      count++;

      for (const next of node[cur]) {
        // 제거할 간선은 건너뜁니다.
        if (
          (cur === removeEdge[0] && next === removeEdge[1]) ||
          (cur === removeEdge[1] && next === removeEdge[0])
        )
          continue;

        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      }
    }

    return count;
  };

  for (const edge of wires) {
    const [v1, _] = edge;
    const size1 = bfs(v1, edge);
    const size2 = n - size1;
    answer = Math.min(answer, Math.abs(size1 - size2));
  }

  return answer;
}
