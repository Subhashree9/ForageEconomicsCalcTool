// Updating the min and max text box in inputs

//Tractor cost 
function minmaxMp() {
  var minMpv = parseFloat(document.getElementById('minMp').value);
  var maxMpv = parseFloat(document.getElementById('maxMp').value);
  if (minMpv < maxMpv) {
    nMp.innerHTML = minMpv;
    Mp.min = minMpv;
    Mp.value = minMpv;
    Mp.max = maxMpv;
  } else {
    minMp.value = maxMpv;
    maxMp.value = minMpv;
    nMp.innerHTML = maxMpv;
    Mp.min = maxMpv;
    Mp.value = maxMpv;
    Mp.max = minMpv;
  }
}

// ABP cost 
function minmaxABP() {
  var minABPv = parseFloat(document.getElementById('minABP').value);
  var maxABPv = parseFloat(document.getElementById('maxABP').value);
  if (minABPv < maxABPv) {
    nABP.innerHTML = minABPv;
    ABP.min = minABPv;
    ABP.value = minABPv;
    ABP.max = maxABPv;
  } else {
    minABP.value = maxABPv;
    maxABP.value = minABPv;
    nABP.innerHTML = maxABPv;
    ABP.min = maxABPv;
    ABP.value = maxABPv;
    ABP.max = minABPv;
  }
}


// Interest rate
function minmaxIr() {
  var minIrv = parseFloat(document.getElementById('minIr').value);
  var maxIrv = parseFloat(document.getElementById('maxIr').value);
  if (minIrv < maxIrv) {
    nIr.innerHTML = minIrv;
    Ir.min = minIrv;
    Ir.value = minIrv;
    Ir.max = maxIrv;
  } else {
    minIr.value = maxIrv;
    maxIr.value = minIrv;
    nIr.innerHTML = maxIrv;
    Ir.min = maxIrv;
    Ir.value = maxIrv;
    Ir.max = minIrv;
  }

}

// Field area
function minmaxAr() {
  var minArv = parseFloat(document.getElementById('minAr').value);
  var maxArv = parseFloat(document.getElementById('maxAr').value);
  if (minArv < maxArv) {
    nAr.innerHTML = minArv;
    Ar.min = minArv;
    Ar.value = minArv;
    Ar.max = maxArv;
  } else {
    minAr.value = maxArv;
    maxAr.value = minArv;
    nAr.innerHTML = maxArv;
    Ar.min = maxArv;
    Ar.value = maxArv;
    Ar.max = minArv;
  }
}

// Biomass yield
function minmaxBy() {
  var minByv = parseFloat(document.getElementById('minBy').value);
  var maxByv = parseFloat(document.getElementById('maxBy').value);
  if (minByv < maxByv) {
    nBy.innerHTML = minByv;
    By.min = minByv;
    By.value = minByv;
    By.max = maxByv;
  } else {
    minBy.value = maxByv;
    maxBy.value = minByv;
    nBy.innerHTML = maxByv;
    By.min = maxByv;
    By.value = maxByv;
    By.max = minByv;
  }
}

//Bale mass
function minmaxBm() {
  var minBmv = parseFloat(document.getElementById('minBm').value);
  var maxBmv = parseFloat(document.getElementById('maxBm').value);
  if (minBmv < maxBmv) {
    nBm.innerHTML = minBmv;
    Bm.min = minBmv;
    Bm.value = minBmv;
    Bm.max = maxBmv;
  } else {
    minBm.value = maxBmv;
    maxBm.value = minBmv;
    nBm.innerHTML = maxBmv;
    Bm.min = maxBmv;
    Bm.value = maxBmv;
    Bm.max = minBmv;
  }
}

// Bale price
function minmaxBc() {
  var minBcv = parseFloat(document.getElementById('minBc').value);
  var maxBcv = parseFloat(document.getElementById('maxBc').value);
  if (minBcv < maxBcv) {
    nBc.innerHTML = minBcv;
    Bc.min = minBcv;
    Bc.value = minBcv;
    Bc.max = maxBcv;
  } else {
    minBc.value = maxBcv;
    maxBc.value = minBcv;
    nBc.innerHTML = maxBcv;
    Bc.min = maxBcv;
    Bc.value = maxBcv;
    Bc.max = minBcv;
  }
}

// Bales/trip
function minmaxBt() {
  var minBtv = parseFloat(document.getElementById('minBt').value);
  var maxBtv = parseFloat(document.getElementById('maxBt').value);
  if (minBtv < maxBtv) {
    nBt.innerHTML = minBtv;
    Bt.min = minBtv;
    Bt.value = minBtv;
    Bt.max = maxBtv;
  } else {
    minBt.value = maxBtv;
    maxBt.value = minBtv;
    nBt.innerHTML = maxBtv;
    Bt.min = maxBtv;
    Bt.value = maxBtv;
    Bt.max = minBtv;
  }
}

// Bale loading time
function minmaxBLT() {
  var minBLTv = parseFloat(document.getElementById('minBLT').value);
  var maxBLTv = parseFloat(document.getElementById('maxBLT').value);
  if (minBLTv < maxBLTv) {
    nBLT.innerHTML = minBLTv;
    BLT.min = minBLTv;
    BLT.value = minBLTv;
    BLT.max = maxBLTv;
  } else {
    minBLT.value = maxBLTv;
    maxBLT.value = minBLTv;
    nBLT.innerHTML = maxBLTv;
    BLT.min = maxBLTv;
    BLT.value = maxBLTv;
    BLT.max = minBLTv;
  }
}

// Bale unloading time
function minmaxBULT() {
  var minBULTv = parseFloat(document.getElementById('minBULT').value);
  var maxBULTv = parseFloat(document.getElementById('maxBULT').value);
  if (minBULTv < maxBULTv) {
    nBULT.innerHTML = minBULTv;
    BULT.min = minBULTv;
    BULT.value = minBULTv;
    BULT.max = maxBULTv;
  } else {
    minBULT.value = maxBULTv;
    maxBULT.value = minBULTv;
    nBULT.innerHTML = maxBULTv;
    BULT.min = maxBULTv;
    BULT.value = maxBULTv;
    BULT.max = minBULTv;
  }
}

// Grain price
function minmaxGP() {
  var minGPv = parseFloat(document.getElementById('minGP').value);
  var maxGPv = parseFloat(document.getElementById('maxGP').value);
  if (minGPv < maxGPv) {
    nGP.innerHTML = minGPv;
    GP.min = minGPv;
    GP.value = minGPv;
    GP.max = maxGPv;
  } else {
    minGP.value = maxGPv;
    maxGP.value = minGPv;
    nGP.innerHTML = maxGPv;
    GP.min = maxGPv;
    GP.value = maxGPv;
    GP.max = minGPv;
  }
}

// Grain yield
function minmaxGY() {
  var minGYv = parseFloat(document.getElementById('minGY').value);
  var maxGYv = parseFloat(document.getElementById('maxGY').value);
  if (minGYv < maxGYv) {
    nGY.innerHTML = minGYv;
    GY.min = minGYv;
    GY.value = minGYv;
    GY.max = maxGYv;
  } else {
    minGY.value = maxGYv;
    maxGY.value = minGYv;
    nGY.innerHTML = maxGYv;
    GY.min = maxGYv;
    GY.value = maxGYv;
    GY.max = minGYv;
  }
}

// Field rent
function minmaxFar() {
  var minFarv = parseFloat(document.getElementById('minFar').value);
  var maxFarv = parseFloat(document.getElementById('maxFar').value);
  if (minFarv < maxFarv) {
    nFar.innerHTML = minFarv;
    Far.min = minFarv;
    Far.value = minFarv;
    Far.max = maxFarv;
  } else {
    minFar.value = maxFarv;
    maxFar.value = minFarv;
    nFar.innerHTML = maxFarv;
    Far.min = maxFarv;
    Far.value = maxFarv;
    Far.max = minFarv;
  }
}

// Seed cost
function minmaxSc() {
  var minScv = parseFloat(document.getElementById('minSc').value);
  var maxScv = parseFloat(document.getElementById('maxSc').value);
  if (minScv < maxScv) {
    nSc.innerHTML = minScv;
    Sc.min = minScv;
    Sc.value = minScv;
    Sc.max = maxScv;
  } else {
    minSc.value = maxScv;
    maxSc.value = minScv;
    nSc.innerHTML = maxScv;
    Sc.min = maxScv;
    Sc.value = maxScv;
    Sc.max = minScv;
  }
}

// Fertilizer cost
function minmaxFrc() {
  var minFrcv = parseFloat(document.getElementById('minFrc').value);
  var maxFrcv = parseFloat(document.getElementById('maxFrc').value);
  if (minFrcv < maxFrcv) {
    nFrc.innerHTML = minFrcv;
    Frc.min = minFrcv;
    Frc.value = minFrcv;
    Frc.max = maxFrcv;
  } else {
    minFrc.value = maxFrcv;
    maxFrc.value = minFrcv;
    nFrc.innerHTML = maxFrcv;
    Frc.min = maxFrcv;
    Frc.value = maxFrcv;
    Frc.max = minFrcv;
  }
}

// Chemical cost
function minmaxCc() {
  var minCcv = parseFloat(document.getElementById('minCc').value);
  var maxCcv = parseFloat(document.getElementById('maxCc').value);
  if (minCcv < maxCcv) {
    nCc.innerHTML = minCcv;
    Cc.min = minCcv;
    Cc.value = minCcv;
    Cc.max = maxCcv;
  } else {
    minCc.value = maxCcv;
    maxCc.value = minCcv;
    nCc.innerHTML = maxCcv;
    Cc.min = maxCcv;
    Cc.value = maxCcv;
    Cc.max = minCcv;
  }
}

// Harvest cost
function minmaxHc() {
  var minHcv = parseFloat(document.getElementById('minHc').value);
  var maxHcv = parseFloat(document.getElementById('maxHc').value);
  if (minHcv < maxHcv) {
    nHc.innerHTML = minHcv;
    Hc.min = minHcv;
    Hc.value = minHcv;
    Hc.max = maxHcv;
  } else {
    minHc.value = maxHcv;
    maxHc.value = minHcv;
    nHc.innerHTML = maxHcv;
    Hc.min = maxHcv;
    Hc.value = maxHcv;
    Hc.max = minHcv;
  }
}

// Baling cost
function minmaxBl() {
  var minBlv = parseFloat(document.getElementById('minBl').value);
  var maxBlv = parseFloat(document.getElementById('maxBl').value);
  if (minBlv < maxBlv) {
    nBl.innerHTML = minBlv;
    Bl.min = minBlv;
    Bl.value = minBlv;
    Bl.max = maxBlv;
  } else {
    minBl.value = maxBlv;
    maxBl.value = minBlv;
    nBl.innerHTML = maxBlv;
    Bl.min = maxBlv;
    Bl.value = maxBlv;
    Bl.max = minBlv;
  }
}

// Fuel cost
function minmaxFc() {
  var minFcv = parseFloat(document.getElementById('minFc').value);
  var maxFcv = parseFloat(document.getElementById('maxFc').value);
  if (minFcv < maxFcv) {
    nFc.innerHTML = minFcv;
    Fc.min = minFcv;
    Fc.value = minFcv;
    Fc.max = maxFcv;
  } else {
    minFc.value = maxFcv;
    maxFc.value = minFcv;
    nFc.innerHTML = maxFcv;
    Fc.min = maxFcv;
    Fc.value = maxFcv;
    Fc.max = minFcv;
  }
}

// Tractor speed
function minmaxSp() {
  var minSpv = parseFloat(document.getElementById('minSp').value);
  var maxSpv = parseFloat(document.getElementById('maxSp').value);
  if (minSpv < maxSpv) {
    nSp.innerHTML = minSpv;
    Sp.min = minSpv;
    Sp.value = minSpv;
    Sp.max = maxSpv;
  } else {
    minSp.value = maxSpv;
    maxSp.value = minSpv;
    nSp.innerHTML = maxSpv;
    Sp.min = maxSpv;
    Sp.value = maxSpv;
    Sp.max = minSpv;
  }
}

// No of labors
function minmaxNL() {
  var minNLv = parseFloat(document.getElementById('minNL').value);
  var maxNLv = parseFloat(document.getElementById('maxNL').value);
  if (minNLv < maxNLv) {
    nNL.innerHTML = minNLv;
    NL.min = minNLv;
    NL.value = minNLv;
    NL.max = maxNLv;
  } else {
    minNL.value = maxNLv;
    maxNL.value = minNLv;
    nNL.innerHTML = maxNLv;
    NL.min = maxNLv;
    NL.value = maxNLv;
    NL.max = minNLv;
  }
}


// Labor cost
function minmaxLc() {
  var minLcv = parseFloat(document.getElementById('minLc').value);
  var maxLcv = parseFloat(document.getElementById('maxLc').value);
  if (minLcv < maxLcv) {
    nLc.innerHTML = minLcv;
    Lc.min = minLcv;
    Lc.value = minLcv;
    Lc.max = maxLcv;
  } else {
    minLc.value = maxLcv;
    maxLc.value = minLcv;
    nLc.innerHTML = maxLcv;
    Lc.min = maxLcv;
    Lc.value = maxLcv;
    Lc.max = minLcv;
  }
}

// Bale transportation cost
function minmaxBTC() {
  var minBTCv = parseFloat(document.getElementById('minBTC').value);
  var maxBTCv = parseFloat(document.getElementById('maxBTC').value);
  if (minBTCv < maxBTCv) {
    nBTC.innerHTML = minBTCv;
    BTC.min = minBTCv;
    BTC.value = minBTCv;
    BTC.max = maxBTCv;
  } else {
    minBTC.value = maxBTCv;
    maxBTC.value = minBTCv;
    nBTC.innerHTML = maxBTCv;
    BTC.min = maxBTCv;
    BTC.value = maxBTCv;
    BTC.max = minBTCv;
  }
}

// Bale transportation distance
function minmaxBTD() {
  var minBTDv = parseFloat(document.getElementById('minBTD').value);
  var maxBTDv = parseFloat(document.getElementById('maxBTD').value);
  if (minBTDv < maxBTDv) {
    nBTD.innerHTML = minBTDv;
    BTD.min = minBTDv;
    BTD.value = minBTDv;
    BTD.max = maxBTDv;
  } else {
    minBTD.value = maxBTDv;
    maxBTD.value = minBTDv;
    nBTD.innerHTML = maxBTDv;
    BTD.min = maxBTDv;
    BTD.value = maxBTDv;
    BTD.max = minBTDv;
  }
}