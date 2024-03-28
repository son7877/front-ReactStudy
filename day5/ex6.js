// 자바스크립트도 클래스는 존재함
// class Person {
//   age;
//   name;
//   constructor(age, name) {
//     this.age = age;
//   }
// }
// const person = new Person(1, "32");
// person.age;
const name = "fdsa";
const obj = { name }; // value가 자동으로 들어가짐
console.log(obj);
const observer = new IntersectionObserver((entries, observer) => {
  //처음에 실행이 되고 타겟들이 보이면 다시 호출된다.
  entries.forEach((entrie) => {
    if (entrie.isIntersecting) {
      console.log("확인");
      //클래스 이름을 바꾸는 방식도 가능
      entrie.target.className = "box show";
    } else {
      console.log("미확인");
      entrie.target.className = "box";
    }
  });
});

const target = document.getElementsByClassName("box")[3];
observer.observe(target); //이 타켓을 감시한다.
