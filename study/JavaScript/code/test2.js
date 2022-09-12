function ConstructorUltra() {
  // this = {}
  this.Ultra = true;
  // retrun this
}

let ConstructorSuper = new ConstructorUltra();

// console.log(ConstructorSuper.Ultra);

// let ConstructorSub = new ConstructorSuper();

// console.log(ConstructorSub.Ultra);

const age = 20;
if (age > 19) {
  var txt = "성인";
  let txt2 = "상인";
  const txt3 = "색인";
}

console.log(txt); // '성인'
console.log(txt2); // ReferenceError
console.log(txt3); // ReferenceError
