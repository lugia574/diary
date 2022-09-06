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
