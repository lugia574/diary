// 도넛 n:n
// 막대 n:n-1
// 8자 n:2n+1

// https://velog.io/@mino0121/ProgrammersPython-도넛과-막대그래프

// 각각의 그래프는 다음과 같은 조건을 통해 구분할 수 있다
// '생성된 정점'은 나가는 간선의 수가 2 이상이고, 들어오는 간선의 수가 0이다.
// '막대 모양 그래프'의 수는 나가는 간선의 수가 0, 들어오는 간선의 수가 1인 노드의 개수와 같다.
// '8자 모양 그래프'의 수는 나가는 간선의 수가 2, 들어오는 간선의 수도 2인 노드의 개수와 같다.
// '도넛 모양 그래프'는 '생성된 정점'의 나가는 간선의 수에서 막대 모양 그래프와 8자 모양 그래프의 개수를 빼서 구한다.

function solution(edges) {
  const countEdges = (edges) => {
    const edgeCounts = {};

    for (const [a, b] of edges) {
      // 각 노드별로 간선의 수를 추가할 객체를 생성 -
      // .hasOwnProperty() 함수를 이용해 객체의 키 값 추가
      if (!edgeCounts.hasOwnProperty(a)) {
        edgeCounts[a] = [0, 0];
      }
      if (!edgeCounts.hasOwnProperty(b)) {
        edgeCounts[b] = [0, 0];
      }

      // output edge와 input edge의 개수를 추가
      edgeCounts[a][0] += 1; // a는 n번 노드에서 나가는 간선
      edgeCounts[b][1] += 1; // b는 n번 노드로 들어오는 간선
    }
    return edgeCounts;
  };

  const checkAnswer = (edgeCounts) => {
    const answer = [0, 0, 0, 0];

    for (const key in edgeCounts) {
      const counts = edgeCounts[key];

      // 생성된 정점의 번호 확인
      if (counts[0] >= 2 && counts[1] === 0) {
        answer[0] = parseInt(key);
      }
      // 막대 모양 그래프의 수 확인
      else if (counts[0] === 0 && counts[1] > 0) {
        answer[2] += 1;
      }
      // 8자 모양 그래프의 수 확인
      else if (counts[0] >= 2 && counts[1] >= 2) {
        answer[3] += 1;
      }
    }
    // 도넛 모양 그래프의 수 확인
    answer[1] = edgeCounts[answer[0]][0] - answer[2] - answer[3];

    return answer;
  };

  const edgeCounts = countEdges(edges);
  const answer = checkAnswer(edgeCounts);

  return answer;
}
