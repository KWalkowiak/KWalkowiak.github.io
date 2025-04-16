const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");
const displayTab = document.getElementById("display-table");
const tabtainer = document.querySelector(".tabtainer");

function updateTabtainerVisibility() {
  if (displayTab.getElementsByTagName("tr").length > 0) {
    tabtainer.style.display = "flex";
  }
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let nameValue = document.getElementById("imie").value;
  let mailValue = document.getElementById("e-mail").value;
  let textValue = document.getElementById("text").value;
  const msg = document.createElement("tr");
  msg.innerHTML = `<td>${nameValue}</td><td>${mailValue}</td><td class="text-td">${textValue}</td>`;
  displayTab.append(msg);
  updateTabtainerVisibility();
});
