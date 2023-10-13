function solution(clothes) {
  let answer = 1;
  let map = new Map(); // 그냥 {} 이거 오브젝트 써도 되긴하는데 Map 을 쓰는걸 더 권장하데? 근데 그냥 수틀리면 object 쓰자
  const len = clothes.length;

  for (let i = 0; i < len; i++) {
    const clothingType = clothes[i][1];
    const cnt = (map.has(clothingType) ? map.get(clothingType) : 0) + 1;
    map.set(clothingType, cnt);
  }

  for (let s of map.keys()) {
    answer *= map.get(s) + 1;
  }

  answer -= 1;

  return answer;
}

// 베스트 앨범ㄴ
function solution(genres, plays) {
  const len = genres.length;
  const map = new Map();

  for (let i = 0; i < len; i++) {
    const genre = genres[i];
    map.set(genre, (map.get(genre) || 0) + plays[i]);
  }

  const ordered = [];

  while (map.size > 0) {
    let max = -1;
    let maxKey = "";

    for (const key of map.keys()) {
      const tmp = map.get(key);
      if (tmp > max) {
        max = tmp;
        maxKey = key;
      }
    }

    ordered.push(maxKey);
    map.delete(maxKey);
  }

  const result = [];

  for (const g of ordered) {
    const list = [];

    for (let i = 0; i < len; i++) {
      if (genres[i] === g) {
        list.push(new Music(genres[i], plays[i], i));
      }
    }

    list.sort((a, b) => b.play - a.play); // 내림차순 소팅
    result.push(list[0]); // 1개는 무조건 수록

    if (list.length > 1) {
      // 더 수록할 곡이 있으면 (장르 내의 노래가 1개보다 많으면) 수록
      result.push(list[1]);
    }
  }

  // print result
  const answer = [];

  for (let i = 0; i < result.length; i++) {
    answer[i] = result[i].idx;
  }

  return answer;
}

class Music {
  constructor(genre, play, idx) {
    this.genre = genre;
    this.play = play;
    this.idx = idx;
  }
}
