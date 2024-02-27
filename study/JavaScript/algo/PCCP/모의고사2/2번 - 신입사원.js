// python 이라면
// import heapq

// def solution(ability, number):
//     hq = []
//     for val in ability:
//         heapq.heappush(hq, val)

//     for _ in range(number):
//         x = heapq.heappop(hq)
//         y = heapq.heappop(hq)
//         heapq.heappush(hq, x+y)
//         heapq.heappush(hq, x+y)
//     return sum(hq)

// 근데 js 는 우선순위 q 가 없어서
// 직접 구현해야해함
class Heap {
  constructor() {
    this.heap = [];
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  heappush(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = parseInt((curIdx - 1) / 2);
    while (this.heap[parIdx] > this.heap[curIdx]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = parseInt((curIdx - 1) / 2);
    }
  }
  heappop() {
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    let curIdx = 0;
    let leftIdx = curIdx * 2 + 1;
    let rightIdx = curIdx * 2 + 2;
    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] < this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }
    while (
      this.heap[leftIdx] < this.heap[curIdx] ||
      this.heap[rightIdx] < this.heap[curIdx]
    ) {
      const minIdx =
        this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2 + 1;
      rightIdx = curIdx * 2 + 2;
    }
    return min;
  }
}
function solution(ability, number) {
  var answer = 0;
  const heap = new Heap();
  ability.map((a) => {
    heap.heappush(a);
  });
  for (let i = 0; i < number; i++) {
    const a = heap.heappop();
    const b = heap.heappop();
    heap.heappush(a + b);
    heap.heappush(a + b);
  }
  answer = heap.heap.reduce((acc, cur) => {
    return acc + cur;
  });
  return answer;
}
