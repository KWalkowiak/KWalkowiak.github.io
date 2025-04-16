const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");
const display = document.querySelector(".display-form");
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let nameValue = document.getElementById("imie").value;
  let mailValue = document.getElementById("e-mail").value;
  const msg = document.createElement("p");
  msg.innerText = `${nameValue} ${mailValue}`;
  display.append(msg);
});
