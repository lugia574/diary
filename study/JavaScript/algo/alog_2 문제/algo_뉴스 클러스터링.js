// [1차] 뉴스 클러스터링
// 아 오늘 솔직히 하기 귀찮다
// 풀긴 했는데 너무 복잡하게 풀었는데

function solution(str1, str2) {
  var answer = 0;
  const W = 65536;
  const combBoolean = (arr, i) => {
    const pattern = /[a-zA-Z]/;
    if (pattern.test(arr[i]) && pattern.test(arr[i + 1])) return true;
    return false;
  };
  const dicAdd = (dic, e) => {
    if (e in dic) dic[e] += 1;
    else dic[e] = 1;
  };

  // 조합 만들기
  let dic1 = {};
  let dic2 = {};
  let union = {};
  for (let i = 0; i < str1.length - 1; i++)
    if (combBoolean(str1, i))
      dicAdd(dic1, str1.substring(i, i + 2).toUpperCase());
  for (let i = 0; i < str2.length - 1; i++)
    if (combBoolean(str2, i))
      dicAdd(dic2, str2.substring(i, i + 2).toUpperCase());

  // 조합유사도 확인
  let interCnt = 0;
  let unionCnt = 0;

  let ok = true;
  for (let k of Object.keys(dic1)) {
    if (k in dic2) {
      interCnt += Math.min(dic1[k], dic2[k]);
      union[k] = Math.max(dic1[k], dic2[k]);
    } else {
      union[k] = dic1[k];
    }
    if (dic1[k] != dic2[k]) ok = false;
  }

  for (let k of Object.keys(dic2)) {
    if (k in union) continue;
    union[k] = dic2[k];
  }

  for (let k of Object.keys(union)) unionCnt += union[k];

  if (unionCnt === 0 && interCnt === 0) return W;
  if (interCnt === 0 && unionCnt > 0) return 0;
  if (ok) return W;
  answer = Math.floor((interCnt / unionCnt) * W);
  return answer;
}

// 애들은 이렇게 품
// 훨씬 깔끔하네
// 그리고 필터라는 것도 이쁘게 썻고
function solution(str1, str2) {
  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);
      if (node.match(/[A-Za-z]{2}/)) {
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;

  set.forEach((item) => {
    const has1 = arr1.filter((x) => x === item).length;
    const has2 = arr2.filter((x) => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });
  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}
