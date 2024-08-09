function solution(m, musicinfos) {
  let answer = [];
  const size = musicinfos.length;
  const NONE = "(None)";
  m = replaceCode(m);

  for (let idx = 0; idx < size; idx++) {
    let [start, end, title, code] = musicinfos[idx].split(",");
    const playTime = makePlayTime(start, end);
    code = replaceCode(code);

    let playedMelody = "";
    for (let i = 0; i < playTime; i++) {
      playedMelody += code[i % code.length];
    }
    if (playedMelody.includes(m)) {
      answer.push([title, playTime]);
    }
  }

  answer.sort((a, b) => {
    if (b[1] === a[1]) {
      return;
    }
    return b[1] - a[1];
  });

  return answer.length ? answer[0][0] : NONE;
}

const makePlayTime = (start, end) => {
  const [startHour, startMintue] = start.split(":");
  const [endHour, endMintue] = end.split(":");

  const s = parseInt(startHour) * 60 + parseInt(startMintue);
  const e = parseInt(endHour) * 60 + parseInt(endMintue);
  return e - s;
};

const replaceCode = (code) => {
  code = code.replaceAll("A#", "a");
  code = code.replaceAll("B#", "b");
  code = code.replaceAll("C#", "c");
  code = code.replaceAll("D#", "d");
  code = code.replaceAll("F#", "f");
  code = code.replaceAll("G#", "g");
  return code;
};
