// 할인 행사
// 아 문제를 제대로 안읽어서 한 20분 잡아 먹은듯
// 푸는데 40 걸렸는데 실질적인 푸는 시간은 20분대 일듯?
// 와 이것도 옛날에 못 풀던거였는데 풀었네 ㅋ
function solution(want, number, discount) {
  var answer = 0;
  let basket = {};
  let basketLen = 0;
  const wantLen = want.length;

  const listCheck = () => {
    for (let i = 0; i < wantLen; i++) {
      if (basket[want[i]] != number[i]) return false;
    }
    return true;
  };

  const objAdd = (i) => {
    if (discount[i] in basket) basket[discount[i]]++;
    else basket[discount[i]] = 1;
  };

  for (let i = 0; i < discount.length; i++) {
    if (basketLen < 10) {
      objAdd(i);
      basketLen++;
      continue;
    }

    if (listCheck()) answer++;
    basket[discount[i - 10]]--;
    objAdd(i);
  }
  if (listCheck()) answer++;
  return answer;
}
