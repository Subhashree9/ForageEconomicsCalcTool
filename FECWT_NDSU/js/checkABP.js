function checkABP() {
  var checkStatus = document.getElementById("ckb").checked
  if (checkStatus == false) {
    document.getElementById("ABP").disabled = true;
    document.getElementById("ABP").style.color = "grey";
  } else {
    document.getElementById("ABP").disabled = false;
    alert("Abled");
  }
}