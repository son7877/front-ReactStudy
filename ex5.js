const onClickHandler = () => alert("버튼!");
// const interval = setInterval(() => {
//   alert("hello");
// }, 5000);
const onClickStopIntervalHandler = () => clearInterval(interval);
const onClickRemove = () => {
  const re = document.getElementById("hide");
  // null, undefined, NaN, 0 ---> false
  if (re) return re.remove();
  const body = document.getElementsByTagName("body");
  const p = document.createElement("p");
  p.setAttribute("id", "hide"); // 속성(id) 아이디(hide)부여
  p.innerHTML = "show me the money";
  body[0].append(p);
};

const onClickRemoveTable = () => {
  const teams = document.getElementById("teams");
  if (teams) return teams.remove();
};
