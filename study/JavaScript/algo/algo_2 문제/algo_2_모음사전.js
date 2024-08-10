// 아 콧물 계속 나와서 집중이 안돼 ㅠㅠㅠㅠ
// 용의 콧물~
function solution(word) {
  var answer = 0;
  const alpha = ["A", "E", "I", "O", "U"];
  let dic = {};
  let index = 0;
  const wordCreate = (w) => {
    dic[w] = index++;
    if (w.length === 5) return;
    for (let i = 0; i < 5; i++) {
      wordCreate(w + alpha[i]);
    }
  };
  wordCreate("");
  return dic[word];
}
