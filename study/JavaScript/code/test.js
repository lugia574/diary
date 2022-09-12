let vscope = "global";
function fscope() {
  let vscope = "global";
  alert(vscope);
}
fscope();

let test = "test2";

{
  let test = "test";
  console.log("안에꺼", test);
}

console.log("밖에꺼" + test);

function ConstructorTest(num, num2) {
  // this = {}
  this.result = num + num2;
  this.answer = function () {
    return this.result;
  };
  // return this
}

let sumTest = ConstructorTest(65, 55);
console.log(sumTest);
