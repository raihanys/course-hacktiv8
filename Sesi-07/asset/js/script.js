var formMenu = document.getElementById("input-form");
formMenu.style.display = "none";

function editForm() {
  if (formMenu.style.display === "none") {
    formMenu.style.display = "block";
  } else {
    formMenu.style.display = "none";
  }

  var name = document.getElementById("pName").innerHTML;
  var role = document.getElementById("pRole").innerHTML;
  var gender = document.getElementById("pGender").innerHTML;
  var address = document.getElementById("pAddress").innerHTML;
  var date = document.getElementById("pDate").innerHTML;
  var job = document.getElementById("pJob").innerHTML;
  var hobby = document.getElementById("pHobby").innerHTML;

  document.getElementById("inpName").value = name;
  document.getElementById("inpRole").value = role;
  document.getElementById("inpGender").value = gender;
  document.getElementById("inpAddress").value = address;
  document.getElementById("inpDate").value = date;
  document.getElementById("inpJob").value = job;
  document.getElementById("inpHobby").value = hobby;
}

function simpanForm() {
  var newName = document.getElementById("inpName").value;
  var newRole = document.getElementById("inpRole").value;
  var newGender = document.getElementById("inpGender").value;
  var newAddress = document.getElementById("inpAddress").value;
  var newDate = document.getElementById("inpDate").value;
  var newJob = document.getElementById("inpJob").value;
  var newHobby = document.getElementById("inpHobby").value;

  document.getElementById("pName").innerHTML = newName;
  document.getElementById("pRole").innerHTML = newRole;
  document.getElementById("pGender").innerHTML = newGender;
  document.getElementById("pAddress").innerHTML = newAddress;
  document.getElementById("pDate").innerHTML = newDate;
  document.getElementById("pJob").innerHTML = newJob;
  document.getElementById("pHobby").innerHTML = newHobby;

  formMenu.style.display = "none";
}

function showMenu() {
  var menu = document.getElementById("menu");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
}
