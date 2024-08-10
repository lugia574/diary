// 압축
// 또또 그지같은 설명
// 와 진짜 문제 이해하는데 한참 걸렸다 진짜 개빡세
// 존나 힘들어 ㅅㅂ 그래도 직접 푼게 어디냐
function solution(msg) {
  var answer = [];
  let dic = {};
  for (let i = 1; i < 27; i++) dic[String.fromCharCode(i + 64)] = i;
  const msgLen = msg.length;
  let codeNum = 27;
  let stack = [];
  for (let i = 0; i < msgLen + 1; i++) {
    if (stack.length > 0) {
      const nextWord = stack.join("") + msg[i];
      if (!(nextWord in dic)) {
        dic[nextWord] = codeNum;
        answer.push(dic[stack.join("")]);
        codeNum++;
        stack = [];
      }
    }
    if (i < msgLen) stack.push(msg[i]);
  }

  return answer;
}
