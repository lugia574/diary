function solution(n) {
  var answer = "";

  while (n > 0) {
    if (n % 3 === 0) {
      answer += "4";
      n = Math.floor(n / 3) - 1;
    } else {
      answer += n % 3;
      n = Math.floor(n / 3);
    }
  }

  return [...answer].reverse().join("");
}
