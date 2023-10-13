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
