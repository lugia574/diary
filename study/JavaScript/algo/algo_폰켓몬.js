function solution(nums) {
  const noDuplicationPokemon = new Set(nums);
  const pokemonVarietyCount = noDuplicationPokemon.size;
  const pokemonCount = nums.length;
  return pokemonVarietyCount > pokemonCount / 2
    ? pokemonCount / 2
    : pokemonVarietyCount;
}

/// 완주하지 못한 선수
// 딕셔너리는 이렇게 사용하세여~
function solution(participant, completion) {
  const hash = {};
  for (let i = 0; i < participant.length; i++) {
    let val = participant[i];
    if (!hash[val]) hash[val] = 0;
    hash[val]++;
  }

  completion.forEach((val) => hash[val]--);

  for (let key in hash) if (hash[key]) return key;
}
