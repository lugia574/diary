// https://youtu.be/DjpG-uz-gMc?si=8kTjhn064IMBPvQp

// 왜 함수 안에서 또 함수를 return 하는 걸까?
// 클로저 함수를 호출해서 꼭 변수에 할당해야하는가?
// 도대체 함수 바깥에서 스코프에 접근한다는게 뭐야?

const closerFunc = () => {
  let count = 0;

  const getCount = () => {
    return count;
  };

  const increaseCount = () => {
    count++;
  };

  const decreaseCount = () => {
    count--;
  };

  return { getCount, increaseCount, decreaseCount };
};

function main() {
  const counterFunc = closerFunc();

  // 변수에 담아서 쓰기
  console.log(counterFunc.getCount());
  counterFunc.increaseCount();
  console.log(counterFunc.getCount());
  counterFunc.decreaseCount();
  console.log(counterFunc.getCount());
  counterFunc.increaseCount; // 1

  console.log("=== 안 담고 그냥 써버리기 ===");
  closerFunc().increaseCount();
  console.log(closerFunc().getCount()); // 몇일까
}

main();

// 나의 답변
// 왜 함수 안에서 또 함수를 return 하는 걸까?
// >> 그렇게 해야 함수 안 변수에 접근이 가능함

// 클로저 함수를 호출해서 꼭 변수에 할당해야하는가?
// >> 그렇게 하지 않으면 매번 새로운 클로저 함수로 접근하는거라 기존의 변수 접근을 할 수 가 없음

// 도대체 함수 바깥에서 스코프에 접근한다는게 뭐야?
// >> 글쎼 뭔뜻일까 get, increase, decrease 등의 함수로 해당 클로저 함수 내 변수로 접근한다는 소리 아님?
