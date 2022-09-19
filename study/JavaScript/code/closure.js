let l0 = "l0";

function fn1() {
  function fn2() {
    function fn3() {
      let l3 = "l3";
      console.log(l0, l1, l2, l3);
    }
    let l2 = "l2";
    console.log(l0, l1, l2);
    fn3();
  }
  let l1 = "l1";
  console.log(l0, l1);
  fn2();
}

fn1();

function 더하기함수공장(초기값) {
  function 덧셈(숫자) {
    return 초기값 + 숫자;
  }

  return 덧셈;
}

let 더하기1 = 더하기함수공장(1);
console.log("더하기1 + 1", 더하기1(1));
console.log("더하기1 + 2", 더하기1(2));

let 더하기2 = 더하기함수공장(2);
console.log("더하기2 + 1", 더하기2(1));
console.log("더하기2 + 2", 더하기2(2));
