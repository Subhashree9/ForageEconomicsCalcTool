function calculate() {


  var remember = document.getElementById("switch").checked
  // if (remember == false) {
  //   document.getElementById("FieldAreaUnit").innerHTML = "(ac)"
  //   document.getElementById("minAr").value = 20;
  //   document.getElementById("maxAr").value = 640;
  //   document.getElementById("Ar").min = 20;
  //   document.getElementById("Ar").max = 640;
  //   document.getElementById("ForYldUni").innerHTML = "(lb/ac)";
  //   minBy.value = minByvalSw;
  //   document.getElementById("maxBy").value = 50000;
  //   By.min = minByvalSw;
  //   document.getElementById("By").max = 50000;
  //   document.getElementById("By").step = 100;
  //   document.getElementById("BalMasUni").innerHTML = "(lb)";
  //   document.getElementById("minBm").value = 800;
  //   document.getElementById("maxBm").value = 2000;
  //   document.getElementById("Bm").min = 800;
  //   document.getElementById("Bm").max = 2000;
  //   document.getElementById("FldRntUni").innerHTML = "(FAR, $/ac)";
  //   document.getElementById("SdCstUni").innerHTML = "(SC, $/ac)";
  //   document.getElementById("FertCstUni").innerHTML = "(FRC, $/ac)";
  //   document.getElementById("ChmCstUni").innerHTML = "(CC, $/ac)";
  //   document.getElementById("HrvCstUni").innerHTML = "(HC, $/ac)";
  //   document.getElementById("BlCstUni").innerHTML = "(BC, $/ac)";
  //   document.getElementById("FlCstUni").innerHTML = "(FC, $/gal)";
  //   document.getElementById("TrcSpdUni").innerHTML = "(mph)";
  //   document.getElementById("minSp").value = 4;
  //   document.getElementById("maxSp").value = 8;
  //   document.getElementById("Sp").min = 4;
  //   document.getElementById("Sp").max = 8;
  //   document.getElementById("BlTrnsCstUni").innerHTML = "(BTC, $/mile)";
  //   document.getElementById("BlTrsnDisUni").innerHTML = "(BTD, mile)";
  //   document.getElementById("ArResUni").innerHTML = "(ac)";
  //   document.getElementById("LogDisResUni").innerHTML = "(mi)";
  //   document.getElementById("BlColFuUni").innerHTML = "(gal)";
  //   document.getElementById("TotBlFuUni").innerHTML = "(gal)";
  //   document.getElementById("TotRevUni").innerHTML = "Total revenue per acre:"
  // } else {
  //   document.getElementById("FieldAreaUnit").innerHTML = "(ha)"
  //   document.getElementById("minAr").value = 8
  //   document.getElementById("maxAr").value = 259
  //   document.getElementById("Ar").min = 8
  //   document.getElementById("Ar").max = 259
  //   document.getElementById("ForYldUni").innerHTML = "(Mg/ha)"
  //   document.getElementById("minBy").value = 3
  //   document.getElementById("maxBy").value = 56
  //   document.getElementById("By").min = 3
  //   document.getElementById("By").max = 56
  //   document.getElementById("By").step = 0.5
  //   document.getElementById("BalMasUni").innerHTML = "(kg)"
  //   document.getElementById("minBm").value = 350
  //   document.getElementById("maxBm").value = 950
  //   document.getElementById("Bm").min = 350
  //   document.getElementById("Bm").max = 950
  //   document.getElementById("FldRntUni").innerHTML = "(FAR, $/ha)"
  //   document.getElementById("SdCstUni").innerHTML = "(SC, $/ha)"
  //   document.getElementById("FertCstUni").innerHTML = "(FRC, $/ha)"
  //   document.getElementById("ChmCstUni").innerHTML = "(CC, $/ha)"
  //   document.getElementById("HrvCstUni").innerHTML = "(HC, $/ha)"
  //   document.getElementById("BlCstUni").innerHTML = "(BC, $/ha)"
  //   document.getElementById("FlCstUni").innerHTML = "(FC, $/L)"
  //   document.getElementById("TrcSpdUni").innerHTML = "(kmph)"
  //   document.getElementById("minSp").value = 6
  //   document.getElementById("maxSp").value = 15
  //   document.getElementById("Sp").min = 6
  //   document.getElementById("Sp").max = 15
  //   document.getElementById("BlTrnsCstUni").innerHTML = "(BTC, $/km)"
  //   document.getElementById("BlTrsnDisUni").innerHTML = "(BTD, km)"
  //   document.getElementById("ArResUni").innerHTML = "(ha)"
  //   document.getElementById("LogDisResUni").innerHTML = "(km)"
  //   document.getElementById("BlColFuUni").innerHTML = "(L)"
  //   document.getElementById("TotBlFuUni").innerHTML = "(L)"
  //   // document.getElementById("TotRevUni").innerHTML = "Total revenue per hectare:"
  // }

  var tAr = document.getElementById('Ar'); //string values stored
  var tBt = document.getElementById('Bt');
  var tBy = document.getElementById('By');
  var tSp = document.getElementById('Sp');
  var tUn = document.getElementById('Un');
  var tLo = document.getElementById('BLT');
  var tUnLo = document.getElementById('BULT')

  var fAr = parseFloat(tAr.value) * 0.404686; //ac to ha conversion
  var fBt = parseFloat(tBt.value);
  var fBynb = parseFloat(tBy.value) * 0.000112085; // lb/ac to kg/m2 conversion 0.000112085
  var fBynb1 = parseFloat(tBy.value) * 0.1; // Mg/ha to kg/m2 conversion 0.1
  var fBy = parseFloat(tBy.value) * 0.00112085; // lb/ac to Mg/ha conversion 0.000112085
  var fSp = parseFloat(tSp.value) * 1.60934; // mph to km/hr conversion
  var fUn = parseFloat(tUn.value);
  var fLo = parseFloat(tLo.value);
  var fUnLo = parseFloat(tUnLo.value);
  var ArF = 10;

  document.getElementById('TVCt').setAttribute('fill', "#fff");
  document.getElementById('TFCt').setAttribute('fill', "#000");
  document.getElementById('TPCt').setAttribute('fill', "#000");


  // ABP row 
  var checkStatus = document.getElementById("ckb").checked
  if (checkStatus == false) {
    document.getElementById("ABP").disabled = true;
    document.getElementById("nABP").innerHTML = 0;
    document.getElementById("ABP").min = 0;
    document.getElementById("ABP").value = 0;
    document.getElementById("ABPMc").style.color = "grey";
    document.getElementById("nABP").style.color = "grey";
    document.getElementById("minABP").style.color = "grey";
    document.getElementById("ABP").style.background = "grey";
    document.getElementById("maxABP").style.color = "grey";
    document.getElementById("ABPinfo").style.color = "grey";
    document.getElementById("ABParrow").style.color = "grey";
    document.getElementById("EquipLabel").style.color = "grey";
    document.getElementById("ABPRes").style.color = "grey";
    document.getElementById("EqTyp_ABP").style.color = "grey";
    document.getElementById("PBLabel").style.color = "grey";
    document.getElementById("PB_info").style.color = "grey";
    document.getElementById("PB_ABP").style.background = "#FFC82E";
    document.getElementById("PB_ABP").style.color = "grey";
    document.getElementById("ROILabel").style.color = "grey";
    document.getElementById("ROI_info").style.color = "grey";
    document.getElementById("ROI_ABP").style.color = "grey";
    document.getElementById("ROI_ABP").style.background = "#FFC82E";
    document.getElementById("EquipPlot").value = "Tractor"
    document.getElementById("minBt").value = 1
    document.getElementById("Bt").min = 1
    document.getElementById("Bt").max = 2
    document.getElementById("maxBt").value = 2
    document.getElementById("Equip").value = "Tractor"
  } else {
    document.getElementById("ABP").disabled = false;
    document.getElementById("ABP").min = 10000;
    document.getElementById("ABPMc").style.color = "black";
    document.getElementById("nABP").style.color = "#0A5640";
    document.getElementById("minABP").style.color = "black";
    document.getElementById("ABP").style.background = "#d3d3d3";
    document.getElementById("maxABP").style.color = "black";
    document.getElementById("ABPinfo").style.color = "#0A5640";
    document.getElementById("ABParrow").style.color = "black";
    document.getElementById("EquipLabel").style.color = "black";
    document.getElementById("ABPRes").style.color = "#0A5640";
    document.getElementById("EqTyp_ABP").style.color = "black";
    document.getElementById("PBLabel").style.color = "black";
    document.getElementById("PB_info").style.color = "#0A5640";
    document.getElementById("PB_ABP").style.background = "white";
    document.getElementById("PB_ABP").style.color = "black";
    document.getElementById("ROILabel").style.color = "black";
    document.getElementById("ROI_info").style.color = "#0A5640";
    document.getElementById("ROI_ABP").style.color = "black";
    document.getElementById("ROI_ABP").style.background = "white";
    document.getElementById("EquipPlot").value = "Tractor and ABP";
    document.getElementById("minBt").value = 3
    document.getElementById("Bt").min = 3
    document.getElementById("Bt").max = 23
    document.getElementById("maxBt").value = 23
    document.getElementById("Equip").value = "Tractor and ABP"
  }
  // Total field area 
  totArval = parseFloat(tAr.value * fUn);
  totFAr.value = totArval.toFixed(0);

  //    Number of bales
  var tBm = document.getElementById('Bm');
  var fBm = parseFloat(tBm.value);

  if (remember == false) {
    var fBmc = fBm * 0.454; //lbs to kg conversion
    var arHaEq = 10000;
    var swath = 9;
    var HeadPass = 2;
    var area = fAr * arHaEq; // m2
    var L = Math.sqrt(area); //m
    var W = area / L; //m
    var IL = (L - (swath * HeadPass * 2));
    var IW = (W - (swath * HeadPass * 2));
    var N = (IL * IW) * fBynb / fBmc;
    var nbales = Math.round(N);
    NB.value = nbales * fUn;
  } else {
    var fBmc = fBm; // kg
    // alert("fBmc = " + fBm);
    var arHaEq = 10000;
    var swath = 9;
    var HeadPass = 2;
    var area = tAr.value * arHaEq; // m2
    var L = Math.sqrt(area); //m
    var W = area / L; //m
    var IL = (L - (swath * HeadPass * 2));
    var IW = (W - (swath * HeadPass * 2));
    var N = (IL * IW) * fBynb1 / fBmc;
    var nbales = Math.round(N);
    NB.value = nbales * fUn;
  }

  //Total grain yield 
  var GrY = document.getElementById("GY").value;
  var TGYv = GrY * tAr.value * fUn;
  TGY.value = TGYv;


  // Logistics distance
  var LogisDis = Math.pow(((fAr * fBy) / (17.879 * (fBt + 0.895))), 1.377) * fUn;
  var LogisDis1 = Math.pow(((tAr.value * tBy.value) / (17.879 * (fBt + 0.895))), 1.377) * fUn;
  if (remember == false) {
    LD.value = (LogisDis * ArF * 0.621371).toFixed(2);
  } else {
    LD.value = (LogisDis1 * ArF).toFixed(2);
  }

  // Bale collection operation time
  var optTime = Math.pow(((fAr * fBy) / (-46.003 + (fBt * 80.230) + (fSp * 15.052))), 1.381) * fUn;
  var optTime1 = Math.pow(((tAr.value * tBy.value) / (-46.003 + (fBt * 80.230) + (tSp.value * 15.052))), 1.381) * fUn;
  if (remember == false) {
    var OTval = (optTime) * ArF;
    OT.value = OTval.toFixed(2);
  } else {
    var OTval = (optTime1) * ArF;
    OT.value = OTval.toFixed(2);
  }

  // Bale consumption fuel consumption
  var FuelConsp
  if (remember == false) {
    if (fBt == 1 || fBt == 2) {
      FuelConsp = Math.pow(((fAr * fBy) / (-5.913 + (fBt * 13.164) + (fSp * 2.777))), 1.414);
    } else {
      FuelConsp = Math.pow(((fAr * fBy) / (-4.991 + (fBt * 1.165) + (fSp * 4.827))), 1.242);
    }
    FuelConspUn = (FuelConsp * ArF * 0.264172) * fUn;
  } else {
    if (fBt == 1 || fBt == 2) {
      FuelConsp1 = Math.pow(((tAr.value * tBy.value) / (-5.913 + (fBt * 13.164) + (tSp.value * 2.777))), 1.414);
    } else {
      FuelConsp1 = Math.pow(((tAr.value * tBy.value) / (-4.991 + (fBt * 1.165) + (tSp.value * 4.827))), 1.242);
    }
    FuelConspUn = (FuelConsp1 * ArF) * fUn;
  }
  FCP.value = FuelConspUn.toFixed(2);




  // Total bale operation time - collection, loading, and unloading 
  var LUnL = ((fLo + fUnLo) * nbales * fUn) / 60; // loading and unloading operation time - converting min to h
  var totOpTime = LUnL + OTval;
  TBOT.value = totOpTime.toFixed(2);


  // Total fuel consumption - collection, loading, and unloading 
  // Loading and unloading fuel consumption
  // Refer to equations 5, 6, and 7 in the - A simulation study paper 
  var CTval = 111.855 * 20 / 100; // 150 hp is 111.855 kw and load of 20 % (1 bale/trip) is assumed (eq. 5)
  var EFval = 1.047 * Math.log(20) - 1.711
  var CFval = CTval / EFval;
  var FCons
  if (remember == false) {
    FCons = CFval * LUnL * fUn * 0.264172; // converting litre to gal
  }
  else {
    FCons = CFval * LUnL * fUn; // litre
  }
  var totFconsp = FCons + FuelConspUn
  TBFC.value = totFconsp.toFixed(2);

  //Total bales revenue
  var tBc = document.getElementById('Bc');
  var fBc = parseFloat(tBc.value);
  var TBRv = (fBc * nbales * fUn).toFixed(0);
  var TBRcs = Number(TBRv).toLocaleString('en');
  if (TBRcs.length > 6) {
    TBR.style.fontSize = "10px";
  } else {
    TBR.style.fontSize = "13px";
  };
  TBR.value = '$' + TBRcs

  //Total grain revenue
  var Gpr = parseFloat(document.getElementById('GP').value);
  var TGRv = TGYv * Gpr;
  var TGRcs = Number(TGRv).toLocaleString('en');
  if (TGRcs.length > 6) {
    TGR.style.fontSize = "10px";
  } else {
    TGR.style.fontSize = "13px";
  };
  TGR.value = '$' + TGRcs

  // Total bale transporation cost 
  var tBtc = document.getElementById('BTC').value;
  var fBtc = parseFloat(tBtc);
  var tBtd = document.getElementById('BTD').value;
  var fBtd = parseFloat(tBtd);
  TBTC.value = fBtc * fBtd;


  //      Getting index value of the age in years
  var ageyrs = document.getElementById("AgeYrs");
  var ageyF = parseFloat(ageyrs.value);
  var opt = ageyrs.options[ageyrs.selectedIndex].value;

  //      Getting index value of the engine power input
  var EngP = document.getElementById("EHp");
  var optEP = EngP.options[EngP.selectedIndex].value;

  //      Getting index value of the annual usgae in hours
  var AnHrs = document.getElementById("AnnHrs");
  var optAH = AnHrs.options[AnHrs.selectedIndex].value;

  //      Getting the input tractor price value
  var MPrice = document.getElementById("Mp").value;

  //      Getting the loan interest rate 
  var Irval = document.getElementById("Ir").value;

  //alert(Irval);

  //--------------------------------------Tractor fixed cost and RMC function--------------------------------------------------------

  /********  Total fixed cost (TFC) - Tractor **********/
  var checkStatus = document.getElementById("ckb").checked

  var TFCres = [0, 0, 0, 0];

  /**********  Total fixed cost calculation for tractor */
  function TFCval(af, bf, cf) {
    var salvg = af * Math.pow(ageyF, 2) - bf * ageyF + cf;
    var salval = MPrice * salvg * 0.01;
    var uselif = 10000 / optAH;
    var deprv = ((((MPrice - salval) / uselif) / optAH) * totOpTime);
    var deprval = ((((MPrice - salval) / uselif) / optAH));
    var THIv = (((((parseFloat(salval) + parseFloat(MPrice)) / 2) * 0.0133) / optAH) * totOpTime);
    var THIval = (((((parseFloat(salval) + parseFloat(MPrice)) / 2) * 0.0133) / optAH));
    var INTv = (((((parseFloat(salval) + parseFloat(MPrice)) / 2) * (Irval / 100)) / optAH) * totOpTime);
    var INTval = (((((parseFloat(salval) + parseFloat(MPrice)) / 2) * (Irval / 100)) / optAH));
    var TFCv = (parseFloat(deprv) + parseFloat(THIv) + parseFloat(INTv)).toFixed(0);
    TFCres[0] = deprv;
    TFCres[1] = THIv;
    TFCres[2] = INTv;
    TFCres[3] = TFCv;
    return TFCres;
  }

  if (optEP == 0 && optAH == 200) {
    TFCval(0.0896, 3.8793, 66.025)
  } else if (optEP == 0 && optAH == 400) {
    TFCval(0.0893, 3.7568, 60.73)
  } else if (optEP == 0 && optAH == 600) {
    TFCval(0.0866, 3.6077, 56.856)
  } else if (optEP == 1 && optAH == 200) {
    TFCval(0.0998, 4.2295, 69.889)
  } else if (optEP == 1 && optAH == 400) {
    TFCval(0.1, 4.2478, 69.449)
  } else if (optEP == 1 && optAH == 600) {
    TFCval(0.1, 4.25, 69.0)
  } else if (optEP == 2 && optAH == 200) {
    TFCval(0.1197, 4.9515, 70.168)
  } else if (optEP == 2 && optAH == 400) {
    TFCval(0.1186, 4.8668, 68.225)
  } else if (optEP == 2 && optAH == 600) {
    TFCval(0.116, 4.7858, 66.809)
  }

  var Dep_val = parseFloat(TFCres[0]);
  var THI_val = parseFloat(TFCres[1])
  var INT_val = parseFloat(TFCres[2]);
  var THI_I_val = ((parseFloat((TFCres[1])) + parseFloat(TFCres[2]))).toFixed(0);



  var Dep_valout = parseFloat(TFCres[0]).toFixed(0);
  var THI_val = parseFloat(TFCres[1])
  var INT_val = parseFloat(TFCres[2]);
  var THI_I_valout = ((parseFloat((TFCres[1])) + parseFloat(TFCres[2]))).toFixed(0);

  // Land rent cost
  var Lrv = document.getElementById("Far");
  var LrCal = (parseFloat(tAr.value) * Lrv.value).toFixed(1);
  LRC.value = '$' + LrCal;

  // Total fixed cost 
  var TTFCs = (parseFloat(Dep_val) + parseFloat(THI_I_val) + parseFloat(LrCal)).toFixed(0);
  var TFCcs = Number(TTFCs).toLocaleString('en');
  if (TFCcs.length > 6) {
    TFC.style.fontSize = "10px";
  } else {
    TFC.style.fontSize = "13px";
  };

  // No-cost (FAR, FRC, CC, LC = 0$): Total fixed cost
  NCTFC = parseFloat(TFCres[3]).toFixed(0); // tractor


  /**********RMC - Tractor **************/
  var Xv = ((optAH * opt) / 1000);
  var TAR = (0.003 * Math.pow(Xv, 2));
  var RMCv = ((((MPrice * TAR) / opt) / optAH) * totOpTime).toFixed(1);

  //----------------------------------------------------------------------------------------------

  // Labor cost:
  var Lcv = document.getElementById("Lc");
  var NL = document.getElementById("NL");
  var LcCal = (parseFloat(Lcv.value) * totOpTime * parseFloat(NL.value));
  // LC.value = '$' + (LcCal).toFixed(1);
  TLC.value = '$' + (LcCal).toFixed(1);

  // Fuel cost:
  var Fcv = document.getElementById("Fc");
  var FcCal = (parseFloat(Fcv.value) * totFconsp);
  TotFuC.value = '$' + (FcCal).toFixed(1);
  var FCLCval = FcCal + LcCal;
  FCLC.value = '$' + (FCLCval).toFixed(1);

  // Total bale transportation cost 
  var fBtc = parseFloat(document.getElementById("BTC").value);
  var fBtd = parseFloat(document.getElementById("BTD").value);
  var TBTCval = fBtc * fBtd;
  TBTCv.value = '$' + TBTCval;

  // Total variable cost (Tractor)
  var TVCv = (parseFloat(RMCv) + parseFloat(FCLCval) + parseFloat(TBTCval)).toFixed(0);
  var TVCcs = Number(TVCv).toLocaleString('en');
  if (TVCcs.length > 6) {
    TVC.style.fontSize = "10px";
  } else {
    TVC.style.fontSize = "13px";
  };

  // Seed cost:
  var Arv = parseFloat(document.getElementById("Ar").value);
  var SCvl = parseFloat(document.getElementById("Sc").value);
  var selectIndex = document.getElementById("drop").selectedIndex;
  if (selectIndex == "0" || selectIndex == "1") {
    SCv = SCvl / 5;
  } else {
    SCv = SCvl
  }
  // var SCv = parseFloat(document.getElementById("Sc").value);
  var SCcal = SCv * Arv * fUn;
  SC.value = '$' + (SCcal).toFixed(1);
  TSC.value = '$' + (SCcal).toFixed(0);

  // Fertilizer cost:
  var FRCv = parseFloat(document.getElementById("Frc").value);
  var FRCcal = FRCv * Arv * fUn;
  FRC.value = '$' + (FRCcal).toFixed(1);
  TFRC.value = '$' + (FRCcal).toFixed(0);

  // Chemical cost:
  var CCv = parseFloat(document.getElementById("Cc").value);
  var CCcal = CCv * Arv * fUn
  CC.value = '$' + (CCcal).toFixed(1);
  TCC.value = '$' + (CCcal).toFixed(0);

  // Crop input cost:
  var CICv = (parseFloat(SCcal) + parseFloat(FRCcal) + parseFloat(CCcal)).toFixed(0);
  var CICcs = Number(CICv).toLocaleString('en');
  if (CICcs.length > 6) {
    CIC.style.fontSize = "10px";
  } else {
    CIC.style.fontSize = "13px";
  };
  CIC.value = '$' + CICcs;

  // No-cost (FAR, FRC, CC, LC = 0$): Crop input cost 
  NCCIC = parseFloat(SCcal);

  // Harvest cost:
  var HCv = parseFloat(document.getElementById("Hc").value);
  var HCcal = HCv * Arv * fUn;
  HC.value = '$' + (HCcal).toFixed(1);
  THC.value = '$' + (HCcal).toFixed(0);

  // Baling cost:
  var BLv = parseFloat(document.getElementById("Bl").value);
  var BLcal = (BLv * Arv * fUn)
  BL.value = '$' + (BLcal).toFixed(1);
  TBC.value = '$' + (BLcal).toFixed(0);

  // Crop input cost
  CICa.value = document.getElementById('CIC').value;

  // Total production cost
  var TPCv = (parseFloat(HCcal) + parseFloat(BLcal) + parseFloat(CICv)).toFixed(0);
  var TPCcs = Number(TPCv).toLocaleString('en')
  if (TPCcs.length > 6) {
    TPC.style.fontSize = "10px";
  } else {
    TPC.style.fontSize = "13px";
  };
  TPC.value = '$' + TPCcs;

  var Dep_val = parseFloat(TFCres[0]);
  var THI_val = parseFloat(TFCres[1])
  var INT_val = parseFloat(TFCres[2]);
  var THI_I_val = ((parseFloat((TFCres[1])) + parseFloat(TFCres[2]))).toFixed(0);

  //  ABP Depriciation, taxing, housing, insurance, interest, and total fixed cost
  var ABPPrice = document.getElementById("ABP").value;
  var salvPercABP = 69;
  var salvalABP = ABPPrice * salvPercABP * 0.01;
  var uselifeABP = 10000 / optAH;
  var deprABPv = (((((ABPPrice - salvalABP) / uselifeABP) / optAH) * totOpTime) + (Dep_val)).toFixed(0);
  // var deprABPval = (((((ABPPrice - salvalABP) / uselifeABP) / optAH)));
  var THI_ABPv = ((((((parseFloat(salvalABP) + parseFloat(ABPPrice)) / 2) * 0.0133) / optAH) * totOpTime) + (THI_val));
  // var THI_ABPval = ((((((parseFloat(salvalABP) + parseFloat(ABPPrice)) / 2) * 0.0133) / optAH)));
  var INT_ABPv = ((((((parseFloat(salvalABP) + parseFloat(ABPPrice)) / 2) * (Irval / 100)) / optAH) * totOpTime) + (INT_val));
  // var INT_ABPval = ((((((parseFloat(salvalABP) + parseFloat(ABPPrice)) / 2) * (Irval / 100)) / optAH)));
  var THI_I_ABPv = (parseFloat(THI_ABPv) + parseFloat(INT_ABPv)).toFixed(1);
  var TTFC_ABP = (parseFloat(deprABPv) + parseFloat(THI_I_ABPv) + parseFloat(LrCal)).toFixed(0);

  /**********RMC - ABP **************/
  var Xv = ((optAH * 1) / 1000); // opt = 1; Machine years owned assumed = 1
  var TAR = (0.003 * Math.pow(Xv, 2));
  var RMC_ABP = parseFloat(((((ABPPrice * TAR) / opt) / optAH) * totOpTime)).toFixed(1);
  var RMC_ABPv = (parseFloat(RMC_ABP) + parseFloat(RMCv)).toFixed(1);

  // Total variable cost (ABP)
  var TVC_ABPv = (parseFloat(RMC_ABPv) + parseFloat(FCLCval) + parseFloat(TBTCval)).toFixed(0);
  var TVC_ABPcs = Number(TVC_ABPv).toLocaleString('en');
  if (TVC_ABPcs.length > 6) {
    TVC.style.fontSize = "10px";
  } else {
    TVC.style.fontSize = "13px";
  };

  // Total cost (Tractor)
  TFCv = TTFCs;
  var TCv = (parseFloat(TPCv) + parseFloat(TVCv) + parseFloat(TFCv)).toFixed(0);
  var TCcs = Number(TCv).toLocaleString('en');
  if (TCcs.length > 6) {
    TC.style.fontSize = "10px";
  } else {
    TC.style.fontSize = "13px";
  };
  TC.value = '$' + TCcs;

  TotFC.value = '$' + TFCv;
  TotVC.value = '$' + TVCv;
  TotPC.value = '$' + TPCv;

  // Total cost (ABP)
  var TC_ABPv = (parseFloat(TPCv) + parseFloat(TVC_ABPv) + parseFloat(TTFC_ABP)).toFixed(0);
  var TC_ABPcs = Number(TC_ABPv).toLocaleString('en');
  if (TC_ABPcs.length > 6) {
    TC.style.fontSize = "10px";
  } else {
    TC.style.fontSize = "13px";
  };

  // Total revenue per acre

  var drpOp = document.getElementById("drop").selectedIndex

  if (drpOp == 0) { document.getElementById("FrgePlot").value = "Alfalfa" }
  else if (drpOp == 1) { document.getElementById("FrgePlot").value = "Alfalfa mix" }
  else if (drpOp == 2) { document.getElementById("FrgePlot").value = "Barley" }
  else if (drpOp == 3) { document.getElementById("FrgePlot").value = "Corn" }
  else if (drpOp == 4) { document.getElementById("FrgePlot").value = "Grain mix" }
  else if (drpOp == 5) { document.getElementById("FrgePlot").value = "Grass" }
  else if (drpOp == 6) { document.getElementById("FrgePlot").value = "Grass mix" }
  else if (drpOp == 7) { document.getElementById("FrgePlot").value = "Millet" }
  else if (drpOp == 8) { document.getElementById("FrgePlot").value = "Oats" }
  else if (drpOp == 9) { document.getElementById("FrgePlot").value = "Wheat" }
  else if (drpOp == 10) { document.getElementById("FrgePlot").value = "Others" }

  // Crop type styling options 
  if (drpOp == 2 || drpOp == 3 || drpOp == 4 || drpOp == 7 || drpOp == 8 || drpOp == 9) {
    document.getElementById("GYtext").style.color = "black";
    document.getElementById("GYInfo").style.color = "#0A5640";
    document.getElementById("GPtext").style.color = "black";
    document.getElementById("GPInfo").style.color = "#0A5640";
    document.getElementById("GY").style.background = "#d3d3d3";
    document.getElementById("GP").style.background = "#d3d3d3";
    document.getElementById("minGP").style.color = "black";
    document.getElementById("maxGP").style.color = "black";
    document.getElementById("minGY").style.color = "black";
    document.getElementById("maxGY").style.color = "black";
    document.getElementById("markGP").style.color = "black";
    document.getElementById("markGY").style.color = "black";
    document.getElementById("nGP").style.color = "#0A5640";
    document.getElementById("nGY").style.color = "#0A5640";
    document.getElementById("TGYText").style.color = "black";
    document.getElementById("TGYInfo").style.color = "#0A5640";
    document.getElementById("TGY").style.color = "black";
    document.getElementById("TGYUnit").style.color = "black";
    document.getElementById("TGY").style.background = "white";
    document.getElementById("TGY").value = TGYv;
    document.getElementById("TGRText").color = "black";
    document.getElementById("TGRText").style.color = "black";
    document.getElementById("TGRInfo").style.color = "#0A5640";
    document.getElementById("TGR").style.background = "white";
    document.getElementById("TGR").style.color = "#0000FF";
    document.getElementById("TGR").value = '$' + TGRcs;
    document.getElementById("TypePlot").value = "Grain and Forage"
  }
  else if (drpOp == 0 || drpOp == 1 || drpOp == 5 || drpOp == 6) {
    document.getElementById("GYtext").style.color = "grey";
    document.getElementById("GYInfo").style.color = "grey";
    document.getElementById("GPtext").style.color = "grey";
    document.getElementById("GPInfo").style.color = "grey";
    document.getElementById("GY").style.background = "grey";
    document.getElementById("GP").style.background = "grey";
    document.getElementById("nGY").style.color = "grey";
    document.getElementById("GY").style.color = "grey";
    document.getElementById("minGY").style.color = "grey";
    document.getElementById("maxGY").style.color = "grey";
    document.getElementById("nGY").innerHTML = 0;
    document.getElementById("GY").min = 0;
    document.getElementById("GY").max = 0;
    document.getElementById("nGP").style.color = "grey";
    document.getElementById("GP").style.color = "grey";
    document.getElementById("minGP").style.color = "grey";
    document.getElementById("maxGP").style.color = "grey";
    document.getElementById("markGP").style.color = "grey";
    document.getElementById("markGY").style.color = "grey";
    document.getElementById("nGP").innerHTML = 0;
    document.getElementById("GP").min = 0;
    document.getElementById("GP").max = 0;
    document.getElementById("TGYText").style.color = "grey";
    document.getElementById("TGYInfo").style.color = "grey";
    document.getElementById("TGY").style.color = "grey";
    document.getElementById("TGYUnit").style.color = "grey";
    document.getElementById("TGY").style.background = "#FFC82E";
    document.getElementById("TGY").value = "---";
    document.getElementById("TGRText").style.color = "grey";
    document.getElementById("TGRInfo").style.color = "grey";
    document.getElementById("TGR").style.color = "grey";
    document.getElementById("TGR").value = "---";
    document.getElementById("TGR").style.background = "#FFC82E";
    document.getElementById("TypePlot").value = "Forage"
  }

  // Crop type javascript options 
  if (drpOp == 2 || drpOp == 3 || drpOp == 4 || drpOp == 7 || drpOp == 8 || drpOp == 9) {
    TRev = (parseFloat(TBRv) + parseFloat(TGRv)).toFixed(0);
  } else if (drpOp == 0 || drpOp == 1 || drpOp == 5 || drpOp == 6) {
    TRev = TBRv;
  }

  TRevcs = Number(TRev).toLocaleString('en');
  if (TRevcs.length > 6) {
    TotRev.style.fontSize = "10px";
  } else {
    TotRev.style.fontSize = "13px";
  };
  TotRev.value = '$' + TRevcs;



  var TRACv = (TRev / Arv).toFixed(0);
  var TRACcs = Number(TRACv).toLocaleString('en');
  if (TRACcs.length > 6) {
    TRAC.style.fontSize = "10px";
  } else {
    TRAC.style.fontSize = "13px";
  };
  TRAC.value = '$' + TRACcs;

  // Total cost per acre (Tractor)

  var TCACv = (TCv / Arv).toFixed(0);
  var TCACcs = Number(TCACv).toLocaleString('en');
  if (TCACcs.length > 6) {
    TCAC.style.fontSize = "10px";
  } else {
    TCAC.style.fontSize = "13px";
  };

  // Total cost per acre (ABP)

  var TCAC_ABPv = (TC_ABPv / Arv).toFixed(0);
  var TCAC_ABPcs = Number(TCAC_ABPv).toLocaleString('en');
  if (TCAC_ABPcs.length > 6) {
    TCAC.style.fontSize = "10px";
  } else {
    TCAC.style.fontSize = "13px";
  };


  // Net return (tractor)
  var NPv = (parseFloat(TRev) - parseFloat(TCv));
  var NPcs = Number(NPv).toLocaleString('en');
  if (NPcs.length > 6) {
    NP.style.fontSize = "10px";
  } else {
    NP.style.fontSize = "13px";
  };


  // Net return (ABP)
  var NP_ABPv = (parseFloat(TRev) - parseFloat(TC_ABPv)).toFixed(0);
  var NP_ABPcs = Number(NP_ABPv).toLocaleString('en');
  if (NP_ABPcs.length > 6) {
    NP.style.fontSize = "10px";
  } else {
    NP.style.fontSize = "13px";
  };

  if (checkStatus == false) {
    if (NPv < 0) {
      document.getElementById('NP').style.backgroundColor = "#FFA07A";
    } else {
      document.getElementById('NP').style.backgroundColor = "#98FB98";
    }
  } else if (checkStatus == true) {
    if (NP_ABPv < 0) {
      document.getElementById('NP').style.backgroundColor = "#FFA07A";
    } else {
      document.getElementById('NP').style.backgroundColor = "#98FB98";
    }
  }
  // No-cost (FAR, FRC, CC, LC = 0$): 
  //Total fixed cost - No cost
  NCTFC = parseFloat(TFCres[3]).toFixed(0); // tractor 
  var NCTFC_ABP = (parseFloat(deprABPv) + parseFloat(THI_I_ABPv)); // ABP
  // Total variable cost - No cost
  NCTVC = (parseFloat(RMCv) + parseFloat(FcCal) + parseFloat(TBTCval)).toFixed(0); // tractor 
  var NCTVC_ABP = (parseFloat(RMC_ABPv) + parseFloat(FcCal) + parseFloat(TBTCval)).toFixed(0); // ABP
  // Total production cost - No cost
  NCTPC = (NCCIC + parseFloat(HCcal) + parseFloat(BLcal)).toFixed(0); // tractor 
  // Total  cost - No cost
  NCTCv = parseFloat(NCTFC) + parseFloat(NCTPC) + parseFloat(NCTVC); // tractor 

  NCTC_ABPv = parseFloat(NCTFC_ABP) + parseFloat(NCTPC) + parseFloat(NCTVC_ABP);
  // Net revenue - No cost
  var NCNRv = (parseFloat(TRev) - parseFloat(NCTCv)); // tractor
  var NCNRcs = Number(NCNRv).toLocaleString('en'); // tractor
  var NCNR_ABPv = (parseFloat(TRev) - parseFloat(NCTC_ABPv)).toFixed(0); // tractor
  var NCNR_ABPcs = Number(NCNR_ABPv).toLocaleString('en'); // tractor

  // Harvest and collection cost 
  var HCCv = parseFloat(HCcal + BLcal + TBTCval + FCLCval + TFCres[3]).toFixed(0);
  var HCC_ABPv = parseFloat(HCcal + BLcal + TBTCval + FCLCval + deprABPv + THI_I_ABPv).toFixed(0);
  var HCCPrv = parseFloat(HCCv / TCv * 100).toFixed(0);
  var HCCABPPrv = parseFloat(HCC_ABPv / TC_ABPv * 100).toFixed(0);
  var HCCAcv = parseFloat(HCCv / Arv).toFixed(0);
  var HCCABPAcv = parseFloat(HCC_ABPv / Arv).toFixed(0);

  // Net retuen per acre (tractor)
  var NPACv = (TRACv - TCACv).toFixed(0);

  // Net retuen per acre (ABP)
  var NPAC_ABPv = (TRACv - TCAC_ABPv).toFixed(0);


  // Break even (tractor)
  var BEv = TRev / TCv;

  // Break even (ABP)
  var BE_ABPv = TRev / TC_ABPv;


  // Payback and ROI (tractor)
  if (NPv > 0) {
    var PBv = (MPrice / NPv).toFixed(1);
    PB.value = PBv;
    var ROIv = (NPv / MPrice * 100).toFixed(0);
    if (ROIv == Number.POSITIVE_INFINITY || ROIv == Number.NEGATIVE_INFINITY) {
      ROIv = 0
    }
    ROI.value = ROIv;
  } else {
    PB.value = "---";
    ROI.value = "---";
  }


  if (NCNRv > 0) {
    // alert("postive")
    var NCPBv = (MPrice / NCNRv).toFixed(0); // "No-cost" pay back (tractor)
    var NCROIv = (NCNRv / MPrice * 100).toFixed(0); // "No-cost" ROI (tractor)
    // NCPB.value = NCPBv;
    if (NCROIv == Number.POSITIVE_INFINITY || NCROIv == Number.NEGATIVE_INFINITY) {
      NCROIv = 0
    }
    // NCROI.value = NCROIv;
  } else {
    // alert("negative")
    // NCPB.value = "---";
    // NCROI.value = "---";
  }

  // Payback and ROI (ABP)
  if (NCNR_ABPv > 0) {
    var PB_ABPv = ((parseFloat(MPrice) + parseFloat(ABPPrice)) / (NP_ABPv)).toFixed(0);
    PB.value = PB_ABPv;

    var ROI_ABPv = ((NP_ABPv) / (parseFloat(MPrice) + parseFloat(ABPPrice)) * 100).toFixed(0);
    ROI.value = ROI_ABPv;

    var NCPB_ABPv = ((parseFloat(MPrice) + parseFloat(ABPPrice)) / (NCNR_ABPv)).toFixed(0); // "No-cost" pay back 
    var NCROI_ABPv = ((NCNR_ABPv) / (parseFloat(MPrice) + parseFloat(ABPPrice)) * 100).toFixed(0); // "No-cost" ROI 
    // NCPB.value = NCPBv;
    // NCROI.value = NCROIv;
  } else {
    PB.value = "---";
    ROI.value = "---";
  }

  // Payback and ROI for ABP equipment only
  var PBeqp = (parseFloat(ABPPrice) / parseFloat(NPv)).toFixed(1);
  var ROIeqp = ((parseFloat(NPv) / parseFloat(ABPPrice)) * 100).toFixed(0);

  var PBeqp_abp = (parseFloat(ABPPrice) / parseFloat(NP_ABPv)).toFixed(1);
  var ROIeqp_abp = ((parseFloat(NP_ABPv) / parseFloat(ABPPrice)) * 100).toFixed(0);


  if (checkStatus == false) {
    Dep.value = '$' + Dep_valout;
    THI_I.value = '$' + THI_I_valout;
    TFC.value = '$' + TFCcs;
    RMC.value = '$' + RMCv;
    TVC.value = '$' + TVCcs;
    TotFC.value = '$' + TFCv;
    TotVC.value = '$' + TVCv;
    TotPC.value = '$' + TPCv;
    TC.value = '$' + TCcs;
    TCAC.value = '$' + TCACcs;
    NP.value = '$' + '' + NPcs;
    NPAC.value = '$' + NPACv;
    BE.value = BEv.toFixed(2);
    if (NPv > 0) {
      PB.value = PBv;
      ROI.value = ROIv;
    } else {
      PB.value = "---";
      ROI.value = "---"
    }
    EqTyp.value = "Tractor"
    PB_ABP.value = "---";
    ROI_ABP.value = "---";
    // NCNR.value = '$' + NCNRcs;
    // NCPB.value = NCPBv;
    // NCROI.value = NCROIv;
    HCC.value = '$' + HCCv;
    HCCPc.value = HCCPrv + '%';
    HCCPAc.value = '$' + HCCAcv;
  } else if (checkStatus == true) {
    Dep.value = '$' + deprABPv;
    THI_I.value = '$' + THI_I_ABPv;
    TFC.value = '$' + TTFC_ABP;
    RMC.value = '$' + RMC_ABPv;
    TVC.value = '$' + TVC_ABPcs;
    TotFC.value = '$' + TTFC_ABP;
    TotVC.value = '$' + TVC_ABPcs;
    TotPC.value = '$' + TPCv;
    TC.value = '$' + TC_ABPcs;
    TCAC.value = '$' + TCAC_ABPcs;
    NP.value = '$' + NP_ABPcs;
    NPAC.value = '$' + NPAC_ABPv;
    BE.value = BE_ABPv.toFixed(2);
    PB.value = PB_ABPv;
    ROI.value = ROI_ABPv;
    EqTyp.value = "Tractor and ABP"
    PB_ABP.value = PBeqp_abp;
    ROI_ABP.value = ROIeqp_abp;
    // NCNR.value = '$' + NCNR_ABPcs;
    // NCPB.value = NCPB_ABPv;
    // NCROI.value = NCROI_ABPv;
    HCC.value = '$' + HCC_ABPv;
    HCCPc.value = HCCABPPrv + '%';
    HCCPAc.value = '$' + HCCABPAcv;
  }


  //Plot
  var HT = 210;
  var yval = 25;
  var FCmax = 600;
  var PBmax = 25;
  var BEmax = 20;



  // Fuel consumption plot (FC)
  if (parseFloat(FuelConsp) < FCmax) {
    var FCperc = FuelConsp / FCmax;
    var FCHt = (FCperc * HT).toFixed(0);
    document.getElementById("TCr").setAttribute("y", yval);
    document.getElementById("TCr").setAttribute("height", HT);
    document.getElementById("FCr").setAttribute("height", FCHt);
    document.getElementById("FCr").setAttribute("y", Math.abs((parseFloat(HT) - FCHt)) + parseFloat(yval));
  } else {
    document.getElementById("TCr").setAttribute("y", yval);
    document.getElementById("TCr").setAttribute("height", HT);
  }

  // Cost related plot (TR, TC, NR)
  var dperc1
  var dHT1
  var dperc3
  var dHT3
  var yoff = 10;
  var SumTC = parseFloat(TFCv) + parseFloat(TVCv);

  var TVCperc = (TVCv * 50) / SumTC;
  var TFCperc = (TFCv * 50) / SumTC;

  //      alert("SumTC = " + SumTC);
  //      alert("TFCv = " + TFCv); 
  //      alert("TFCperc = " +  TFCperc);

  if (parseFloat(NPv) > 0) {
    dperc1 = (TCv * 100 / TRev).toFixed(0);
    dHT1 = (dperc1 * 0.01 * HT).toFixed(0);
    dHTVC = ((dHT1 * TVCperc) / 100).toFixed(0);
    var yval1 = Math.abs((HT - dHT1)) + yval;
    var yvalTPC = yval1 + dHT1 / 2 + yoff;
    var yvalTFC = yval1 + (TVCperc * dHT1 * 0.01) + yoff;
    var yvalTVC = yval1 + yoff;

    document.getElementById("TRr").setAttribute("y", yval);
    document.getElementById("TRr").setAttribute("height", HT);

    document.getElementById("TCr").setAttribute("height", dHT1);
    document.getElementById("TCr").setAttribute("y", yval1);

    document.getElementById("TPCr").setAttribute("height", dHT1 / 2);
    document.getElementById("TPCr").setAttribute("y", yval1);

    document.getElementById("TPCt").setAttribute("y", yvalTPC);
    document.getElementById("TFCt").setAttribute("y", yvalTFC);
    document.getElementById("TVCt").setAttribute("y", yvalTVC);



    document.getElementById("TVCr").setAttribute("height", dHTVC);
    document.getElementById("TVCr").setAttribute("y", yval1);

    dperc3 = (NPv * 100 / TRev).toFixed(0);

    document.getElementById("NRr").style.fill = "green"
  } else {
    dperc1 = (TRev * 100 / TCv).toFixed(0);
    dHT1 = (dperc1 * 0.01 * HT).toFixed(0);
    dHTVC = ((HT * TVCperc) / 100).toFixed(0);
    var yval2 = Math.abs((HT - dHT1)) + yval;
    yvalTPC = yval + HT / 2 + yoff;
    yvalTFC = yval + (TVCperc * HT * 0.01) + yoff;
    yvalTVC = yval + yoff;

    document.getElementById("TCr").setAttribute("y", yval);
    document.getElementById("TCr").setAttribute("height", HT);

    document.getElementById("TRr").setAttribute("height", dHT1);
    document.getElementById("TRr").setAttribute("y", yval2);

    document.getElementById("TPCr").setAttribute("height", HT / 2);
    document.getElementById("TPCr").setAttribute("y", yval);

    document.getElementById("TPCt").setAttribute("y", yvalTPC);
    document.getElementById("TFCt").setAttribute("y", yvalTFC);
    document.getElementById("TVCt").setAttribute("y", yvalTVC);


    document.getElementById("TVCr").setAttribute("height", dHTVC);
    document.getElementById("TVCr").setAttribute("y", yval);

    dperc3 = (Math.abs(NPv) * 100 / TCv).toFixed(0);
    document.getElementById("NRr").style.fill = "red"
  }
  dHT3 = (dperc3 * 0.01 * HT).toFixed(0);
  document.getElementById("NRr").setAttribute("height", dHT3);
  document.getElementById("NRr").setAttribute("y", Math.abs((HT - dHT3)) + yval);

  // Payback period plot (PB)

  if (PBv < PBmax) {
    var PBperc = PBv / PBmax;
    var PBHt = (PBperc * HT).toFixed(0);
    document.getElementById("PBr").setAttribute("y", yval);
    document.getElementById("PBr").setAttribute("height", HT);
    document.getElementById("PBr").setAttribute("height", PBHt);
    document.getElementById("PBr").setAttribute("y", Math.abs((parseFloat(HT) - PBHt)) + parseFloat(yval));
  } else {
    document.getElementById("PBr").setAttribute("y", yval);
    document.getElementById("PBr").setAttribute("height", HT);
  }

  // Break even ratio plot (BE)

  if (BEv < BEmax) {
    var BEperc = BEv / BEmax;
    var BEHt = (BEperc * HT).toFixed(0);
    document.getElementById("BEr").setAttribute("y", yval);
    document.getElementById("BEr").setAttribute("height", HT);
    document.getElementById("BEr").setAttribute("height", BEHt);
    document.getElementById("BEr").setAttribute("y", Math.abs((parseFloat(HT) - BEHt)) + parseFloat(yval));
  } else {
    document.getElementById("BEr").setAttribute("y", yval);
    document.getElementById("BEr").setAttribute("height", HT);
  }

} // end of function calculate()