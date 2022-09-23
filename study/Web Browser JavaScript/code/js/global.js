const myName = "Bigtop";

const getMyName = () => {
  return myName;
};

console.log("변수 출력", window.myName); // Bigtop
console.log("함수 출력", window.getMyName()); // Bigtop
