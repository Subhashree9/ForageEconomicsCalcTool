function chng() {

  function chngvals(minv, maxv, min, val, outBc, max) {
    minBc.value = minv;
    maxBc.value = maxv;
    Bc.min = min;
    Bc.value = val;
    outputBc.innerHTML = outBc;
    Bc.max = max;
  }

  function chngvalsSc(minScv, maxScv, minSc, valSc, outSc, maxSc) {
    minSc.value = minScv;
    maxSc.value = maxScv;
    Sc.min = minSc;
    Sc.value = valSc;
    outputSc.innerHTML = outSc;
    Sc.max = maxSc;
  }

  function chngvalsFrc(minFrcv, maxFrcv, minFrc, valFrc, outFrc, maxFrc) {
    minFrc.value = minFrcv;
    maxFrc.value = maxFrcv;
    Frc.min = minFrc;
    Frc.value = valFrc;
    outputFrc.innerHTML = outFrc;
    Frc.max = maxFrc;
  }

  function chngvalsCc(minCcv, maxCcv, minCc, valCc, outCc, maxCc) {
    minCc.value = minCcv;
    maxCc.value = maxCcv;
    Cc.min = minCc;
    Cc.value = valCc;
    outputCc.innerHTML = outCc;
    Cc.max = maxCc;
  }


  function chngvalsGP(minv, maxv, min, val, outGP, max) {
    minGP.value = minv;
    maxGP.value = maxv;
    GP.min = min;
    GP.value = val;
    outputGP.innerHTML = outGP;
    GP.max = max;
  }

  function chngvalsGY(minv, maxv, min, val, outGY, max) {
    minGY.value = minv;
    maxGY.value = maxv;
    GY.min = min;
    GY.value = val;
    outputGY.innerHTML = outGY;
    GY.max = max;
  }

  function chngvalsBy(minv, maxv, min, val, outBy, max) {
    minBy.value = minv;
    maxBy.value = maxv;
    By.min = min;
    By.value = val;
    outputBy.innerHTML = outBy;
    By.max = max;
  }
  // Min, value, max for grain crop based on harvest index
  // Barley	1094	1458.6	1823
  // Corn	2940	3920	4900
  // Oats	1193	1591.2	1989
  // Wheat	1434	1912.5	2391
  // Millet	563	750	938

  // Alfalfa
  if (document.getElementById("drop").selectedIndex == "0") {
    chngvals(45, 120, 45, 75, 75, 110)
    chngvalsBy(2500, 36000, 2500, 4500, 4500, 36000)
    chngvalsSc(0.5, 100, 0.5, 0.5, 0.5, 100)
    chngvalsFrc(0.5, 100, 0.5, 0.5, 0.5, 100)
    chngvalsCc(0.5, 100, 0.5, 0.5, 0.5, 100)
  }
  // Alfalfa mix
  if (document.getElementById("drop").selectedIndex == "1") {
    chngvals(40, 90, 40, 60, 60, 90)
    chngvalsBy(2500, 36000, 2500, 4000, 4000, 36000)
    chngvalsSc(0.5, 100, 0.5, 0.5, 0.5, 100)
    chngvalsFrc(0.5, 100, 0.5, 0.5, 0.5, 100)
    chngvalsCc(0.5, 100, 0.5, 0.5, 0.5, 100)
  }
  // Barley
  if (document.getElementById("drop").selectedIndex == "2") {
    chngvals(10, 100, 10, 60, 60, 100)
    chngvalsBy(1000, 2000, 1000, 1450, 1450, 2000)
    chngvalsGP(2, 7, 2, 4.5, 4.5, 7)
    chngvalsGY(30, 80, 30, 65, 65, 80)
    chngvalsSc(10, 70, 10, 18, 18, 50)
    chngvalsFrc(20, 100, 20, 50, 50, 100)
    chngvalsCc(10, 80, 10, 35, 35, 80)
  }
  // Corn
  if (document.getElementById("drop").selectedIndex == "3") {
    chngvals(10, 100, 10, 50, 50, 100)
    chngvalsBy(3000, 5000, 3000, 4000, 4000, 5000)
    chngvalsGP(2, 7, 2, 4, 4, 7)
    chngvalsGY(50, 200, 50, 140, 140, 200)
    chngvalsSc(50, 120, 50, 85, 85, 120)
    chngvalsFrc(70, 150, 70, 95, 95, 150)
    chngvalsCc(10, 80, 10, 25, 25, 80)
  }

  // Grain mix
  if (document.getElementById("drop").selectedIndex == "4") {
    chngvals(50, 70, 50, 60, 60, 70)
    chngvalsBy(2500, 50000, 2500, 4000, 4000, 50000)
    chngvalsSc(0.5, 100, 0.5, 20, 20, 100)
    chngvalsFrc(0.5, 100, 0.5, 30, 30, 100)
    chngvalsCc(0.5, 100, 0.5, 20, 20, 100)
  }
  // Grass
  if (document.getElementById("drop").selectedIndex == "5") {
    chngvals(35, 50, 35, 40, 40, 50)
    chngvalsBy(500, 50000, 500, 500, 500, 50000)
    chngvalsSc(0.5, 100, 0.5, 0.5, 0.5, 100)
    chngvalsFrc(0.5, 100, 0.5, 0.5, 0.5, 100)
    chngvalsCc(0.5, 100, 0.5, 0.5, 0.5, 100)
  }
  // Grass mix
  if (document.getElementById("drop").selectedIndex == "6") {
    chngvals(25, 45, 25, 35, 35, 45)
    chngvalsBy(2500, 50000, 2500, 3000, 3000, 50000)
    chngvalsSc(0.5, 100, 0.5, 0.5, 0.5, 100)
    chngvalsFrc(0.5, 100, 0.5, 0.5, 0.5, 100)
    chngvalsCc(0.5, 100, 0.5, 0.5, 0.5, 100)
  }

  // Millet
  if (document.getElementById("drop").selectedIndex == "7") {
    chngvals(40, 65, 40, 50, 50, 65)
    chngvalsBy(500, 1000, 500, 750, 750, 1000)
    chngvalsGP(1, 10, 1, 4, 4, 10)
    chngvalsGY(20, 180, 20, 100, 100, 180)
    chngvalsGY(20, 100, 20, 50, 50, 100)
    chngvalsSc(15, 40, 15, 25, 25, 40)
    chngvalsFrc(20, 80, 20, 40, 40, 80)
    chngvalsCc(10, 50, 10, 20, 20, 50)
  }
  // Oats
  if (document.getElementById("drop").selectedIndex == "8") {
    chngvals(10, 100, 10, 60, 60, 100)
    chngvalsBy(1100, 2000, 1100, 1600, 1600, 2000)
    chngvalsGP(1, 10, 1, 2.5, 2.5, 10)
    chngvalsGY(20, 180, 20, 100, 100, 180)
    chngvalsSc(10, 80, 10, 20, 20, 100)
    chngvalsFrc(10, 100, 10, 50, 50, 100)
    chngvalsCc(10, 80, 10, 20, 20, 80)
  }
  // Wheat
  if (document.getElementById("drop").selectedIndex == "9") {
    chngvals(10, 100, 10, 60, 60, 100)
    chngvalsBy(1400, 2400, 1400, 1900, 1900, 2400)
    chngvalsGP(1, 10, 1, 5.5, 5.5, 10)
    chngvalsGY(10, 100, 10, 50, 50, 100)
    chngvalsSc(5, 80, 5, 20, 20, 80)
    chngvalsFrc(10, 100, 10, 60, 60, 100)
    chngvalsCc(10, 100, 10, 30, 30, 100)
  }
  // Others
  if (document.getElementById("drop").selectedIndex == "10") {
    chngvals(20, 110, 20, 50, 50, 110)
    chngvalsBy(2500, 50000, 2500, 4000, 4000, 50000)
    chngvalsSc(0.5, 100, 0.5, 0.5, 0.5, 100)
    chngvalsFrc(0.5, 100, 0.5, 4.5, 4.5, 100)
    chngvalsCc(0.5, 100, 0.5, 0.5, 0.5, 100)
  }
} //chng()
