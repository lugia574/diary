console.log("실행한다");
// const liList = document.getElementsByTagName("li");
//
// console.log(liList);

// console.log(liList["length"]);

// for (let i = 0; i < liList.length; i++) {
//   console.log("실행", liList[i]);
//   liList[i].style.color = "red";
// }

const lis = document.getElementsByClassName("active");
for (let i = 0; i < lis.length; i++) {
  lis[i].style.color = "red";
}
