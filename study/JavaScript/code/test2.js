function ConstructorUltra() {
  // this = {}
  this.Ultra = true;
  // retrun this
}

let ConstructorSuper = new ConstructorUltra();

console.log(ConstructorSuper.Ultra);

let ConstructorSub = new ConstructorSuper();

console.log(ConstructorSub.Ultra);
