function toggleSwitch() {
  var Togg = document.getElementById("switch").checked
  if (Togg == true) {
    document.getElementById("Ar").value = document.getElementById("Ar").value * 0.404;
  }
}
// var ArGet = document.getElementById("Ar").value;

// if (remember == false) {
//   document.getElementById("nAr").innerHTML = ArGet;
// } else {
//   document.getElementById("nAr").innerHTML = (ArGet * 0.404686).toFixed(0);
// }

