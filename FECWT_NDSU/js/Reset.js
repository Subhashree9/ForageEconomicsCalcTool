function Reset() {
  //original id was used
  var dropDowndrop = document.getElementById("drop");
  dropDowndrop.selectedIndex = "0";
  var dropDownEHp = document.getElementById("EHp");
  dropDownEHp.selectedIndex = "0";
  var dropDownAgeYrs = document.getElementById("AgeYrs");
  dropDownAgeYrs.selectedIndex = "0";

  Mp.value = 100000;
  minMp.value = 50000;
  maxMp.value = 150000;
  Mp.min = 50000;
  Mp.max = 150000;
  nMp.innerHTML = 100000;

  Ir.value = 5;
  minIr.value = 1;
  maxIr.value = 20;
  Ir.min = 1;
  Ir.max = 20;
  nIr.innerHTML = 5;

  By.value = 9000;
  minBy.value = 2500;
  maxBy.value = 36000;
  By.min = 2500;
  By.max = 36000;
  nBy.innerHTML = 9000;

  Bm.value = 1100;
  minBm.value = 800;
  maxBm.value = 2000;
  Bm.min = 800;
  Bm.max = 2000;
  nBm.innerHTML = 1100;

  Ar.value = 59;
  minAr.value = 20;
  maxAr.value = 640;
  Ar.min = 20;
  Ar.max = 640;
  nAr.innerHTML = 59;

  Un.value = 1;

  Bt.value = 9;
  minBt.value = 1;
  maxBt.value = 23;
  Bt.min = 1;
  Bt.max = 23;
  nBt.innerHTML = 8;

  Sp.value = 5.25;
  minSp.value = 4;
  maxSp.value = 6.5;
  Sp.min = 4;
  Sp.max = 6.5;
  nSp.innerHTML = 5.25;

  Bc.value = 75;
  minBc.value = 45;
  maxBc.value = 110;
  Bc.min = 45;
  Bc.max = 110;
  nBc.innerHTML = 75;

  Sc.value = 65;
  minSc.value = 10;
  maxSc.value = 500;
  Sc.min = 10;
  Sc.max = 500;
  nSc.innerHTML = 65;

  Frc.value = 50;
  minFrc.value = 25;
  maxFrc.value = 300;
  Frc.min = 25;
  Frc.max = 300;
  nFrc.innerHTML = 50;

  Cc.value = 30;
  minFrc.value = 10;
  maxFrc.value = 150;
  Frc.min = 10;
  Frc.max = 150;
  nFrc.innerHTML = 30;

  Fc.value = 2.34;
  minFc.value = 1;
  maxFc.value = 10;
  Fc.min = 1;
  Fc.max = 10;
  nFc.innerHTML = 2.34;

  Lc.value = 15;
  minLc.value = 12;
  maxLc.value = 30;
  Lc.min = 12;
  Lc.max = 30;
  nLc.innerHTML = 15;
  clearResults();
}