console.log("연결됐음");
let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
    console.log("버튼1 클릭");
    // 버튼1을 클릭했을 때 실행할 코드
});

// 함수선언
function greet(name){
  return `안녕, ${name}님!`;
}
console.log(greet("이은")); //콘솔을 통해 호출함