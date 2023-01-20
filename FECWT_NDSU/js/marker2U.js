function marker2U(minv, maxv, intf, valid, condv) {

  var minf = parseFloat(document.getElementById(minv).value);
  var maxf = parseFloat(document.getElementById(maxv).value);
  var condf = String(condv);

  var Arv = parseFloat(document.getElementById("Ar").value);
  var tAr = document.getElementById('Ar').value; //string values stored
  var tBt = document.getElementById('Bt').value;
  var tBy = document.getElementById('By').value;
  var tSp = document.getElementById('Sp').value;
  var tUn = document.getElementById('Un').value;
  var tLo = document.getElementById('BLT').value;
  var tUnLo = document.getElementById('BULT').value;
  var tBm = document.getElementById('Bm').value;
  var tGrY = document.getElementById("GY").value;
  var tBc = document.getElementById('Bc').value;
  var tGpr = document.getElementById('GP').value;
  var tBtc = document.getElementById('BTC').value;
  var tBtd = document.getElementById('BTD').value;
  var tLrv = document.getElementById("Far").value; // Field area rent
  var tSCvl = document.getElementById("Sc").value; // Seed cost
  var tFRCv = document.getElementById("Frc").value; // Fertilizer cost 
  var tCCv = document.getElementById("Cc").value; // Chemical cost
  var tHCv = document.getElementById("Hc").value; // Harvest cost
  var tBLv = document.getElementById("Bl").value; // Baling cost
  var tIrval = document.getElementById("Ir").value;
  var fIrval = parseFloat(tIrval);


  // var fSCvl = parseFloat(tSCvl);
  // var fAr = parseFloat(tAr) * 0.404686; //ac to ha conversion
  // var fBt = parseFloat(tBt);
  // var fBynb = parseFloat(tBy) * 0.000112085; // lb/ac to kg/m2 conversion 0.000112085
  // var fBy = parseFloat(tBy) * 0.00112085; // lb/ac to Mg/ha conversion 0.000112085
  // var fSp = parseFloat(tSp) * 1.60934; // mph to km/hr conversion
  // var fUn = parseFloat(tUn);
  // var fLo = parseFloat(tLo);
  // var fUnLo = parseFloat(tUnLo);
  // var fBm = parseFloat(tBm);
  // var fGrY = parseFloat(tGrY);
  // var fBc = parseFloat(tBc);
  // var fGrp = parseFloat(tGpr);
  // var fBtc = parseFloat(tBtc);
  // var fBtd = parseFloat(tBtd);
  // var fLrv = parseFloat(tLrv);
  // var fFRCv = parseFloat(tFRCv);
  // var fCCv = parseFloat(tCCv);
  // var fHCv = parseFloat(tHCv);
  // var fBLv = parseFloat(tBLv);
  // var fIrval = parseFloat(tIrval);



  for (var i = minf; i < maxf; i = i + intf) {
    switch (condf) {

      case 'Ir':
        var fIrval = parseFloat(i);
        var fSCvl = parseFloat(tSCvl);
        var fAr = parseFloat(tAr) * 0.404686; //ac to ha conversion
        var fBt = parseFloat(tBt);
        var fBynb = parseFloat(tBy) * 0.000112085; // lb/ac to kg/m2 conversion 0.000112085
        var fBy = parseFloat(tBy) * 0.00112085; // lb/ac to Mg/ha conversion 0.000112085
        var fSp = parseFloat(tSp) * 1.60934; // mph to km/hr conversion
        var fUn = parseFloat(tUn);
        var fLo = parseFloat(tLo);
        var fUnLo = parseFloat(tUnLo);
        var fBm = parseFloat(tBm);
        var fGrY = parseFloat(tGrY);
        var fBc = parseFloat(tBc);
        var fGrp = parseFloat(tGpr);
        var fBtc = parseFloat(tBtc);
        var fBtd = parseFloat(tBtd);
        var fLrv = parseFloat(tLrv);
        var fFRCv = parseFloat(tFRCv);
        var fCCv = parseFloat(tCCv);
        var fHCv = parseFloat(tHCv);
        var fBLv = parseFloat(tBLv);
        break;

      case 'Bm':
        var fBm = parseFloat(i);
        var fSCvl = parseFloat(tSCvl);
        var fAr = parseFloat(tAr) * 0.404686; //ac to ha conversion
        var fBt = parseFloat(tBt);
        var fBynb = parseFloat(tBy) * 0.000112085; // lb/ac to kg/m2 conversion 0.000112085
        var fBy = parseFloat(tBy) * 0.00112085; // lb/ac to Mg/ha conversion 0.000112085
        var fSp = parseFloat(tSp) * 1.60934; // mph to km/hr conversion
        var fUn = parseFloat(tUn);
        var fLo = parseFloat(tLo);
        var fUnLo = parseFloat(tUnLo);
        var fGrY = parseFloat(tGrY);
        var fBc = parseFloat(tBc);
        var fGrp = parseFloat(tGpr);
        var fBtc = parseFloat(tBtc);
        var fBtd = parseFloat(tBtd);
        var fLrv = parseFloat(tLrv);
        var fFRCv = parseFloat(tFRCv);
        var fCCv = parseFloat(tCCv);
        var fHCv = parseFloat(tHCv);
        var fBLv = parseFloat(tBLv);
        var fIrval = parseFloat(tIrval);
        break;

      case 'Far':
        var fLrv = parseFloat(i);
        var fSCvl = parseFloat(tSCvl);
        var fAr = parseFloat(tAr) * 0.404686; //ac to ha conversion
        var fBt = parseFloat(tBt);
        var fBynb = parseFloat(tBy) * 0.000112085; // lb/ac to kg/m2 conversion 0.000112085
        var fBy = parseFloat(tBy) * 0.00112085; // lb/ac to Mg/ha conversion 0.000112085
        var fSp = parseFloat(tSp) * 1.60934; // mph to km/hr conversion
        var fUn = parseFloat(tUn);
        var fLo = parseFloat(tLo);
        var fUnLo = parseFloat(tUnLo);
        var fBm = parseFloat(tBm);
        var fGrY = parseFloat(tGrY);
        var fBc = parseFloat(tBc);
        var fGrp = parseFloat(tGpr);
        var fBtc = parseFloat(tBtc);
        var fBtd = parseFloat(tBtd);
        var fFRCv = parseFloat(tFRCv);
        var fCCv = parseFloat(tCCv);
        var fHCv = parseFloat(tHCv);
        var fBLv = parseFloat(tBLv);
        var fIrval = parseFloat(tIrval);
        break;

      case 'Sc':
        var fSCvl = parseFloat(i);
        var fAr = parseFloat(tAr) * 0.404686; //ac to ha conversion
        var fBt = parseFloat(tBt);
        var fBynb = parseFloat(tBy) * 0.000112085; // lb/ac to kg/m2 conversion 0.000112085
        var fBy = parseFloat(tBy) * 0.00112085; // lb/ac to Mg/ha conversion 0.000112085
        var fSp = parseFloat(tSp) * 1.60934; // mph to km/hr conversion
        var fUn = parseFloat(tUn);
        var fLo = parseFloat(tLo);
        var fUnLo = parseFloat(tUnLo);
        var fBm = parseFloat(tBm);
        var fGrY = parseFloat(tGrY);
        var fBc = parseFloat(tBc);
        var fGrp = parseFloat(tGpr);
        var fBtc = parseFloat(tBtc);
        var fBtd = parseFloat(tBtd);
        var fLrv = parseFloat(tLrv);
        var fFRCv = parseFloat(tFRCv);
        var fCCv = parseFloat(tCCv);
        var fHCv = parseFloat(tHCv);
        var fBLv = parseFloat(tBLv);
        var fIrval = parseFloat(tIrval);
        break;

      case 'Frc':
        var fFRCv = parseFloat(i);
        var fSCvl = parseFloat(tSCvl);
        var fAr = parseFloat(tAr) * 0.404686; //ac to ha conversion
        var fBt = parseFloat(tBt);
        var fBynb = parseFloat(tBy) * 0.000112085; // lb/ac to kg/m2 conversion 0.000112085
        var fBy = parseFloat(tBy) * 0.00112085; // lb/ac to Mg/ha conversion 0.000112085
        var fSp = parseFloat(tSp) * 1.60934; // mph to km/hr conversion
        var fUn = parseFloat(tUn);
        var fLo = parseFloat(tLo);
        var fUnLo = parseFloat(tUnLo);
        var fBm = parseFloat(tBm);
        var fGrY = parseFloat(tGrY);
        var fBc = parseFloat(tBc);
        var fGrp = parseFloat(tGpr);
        var fBtc = parseFloat(tBtc);
        var fBtd = parseFloat(tBtd);
        var fLrv = parseFloat(tLrv);
        var fCCv = parseFloat(tCCv);
        var fHCv = parseFloat(tHCv);
        var fBLv = parseFloat(tBLv);
        var fIrval = parseFloat(tIrval);
        break;
      case 'Cc':
        var fCCv = parseFloat(i);
        var fSCvl = parseFloat(tSCvl);
        var fAr = parseFloat(tAr) * 0.404686; //ac to ha conversion
        var fBt = parseFloat(tBt);
        var fBynb = parseFloat(tBy) * 0.000112085; // lb/ac to kg/m2 conversion 0.000112085
        var fBy = parseFloat(tBy) * 0.00112085; // lb/ac to Mg/ha conversion 0.000112085
        var fSp = parseFloat(tSp) * 1.60934; // mph to km/hr conversion
        var fUn = parseFloat(tUn);
        var fLo = parseFloat(tLo);
        var fUnLo = parseFloat(tUnLo);
        var fBm = parseFloat(tBm);
        var fGrY = parseFloat(tGrY);
        var fBc = parseFloat(tBc);
        var fGrp = parseFloat(tGpr);
        var fBtc = parseFloat(tBtc);
        var fBtd = parseFloat(tBtd);
        var fLrv = parseFloat(tLrv);
        var fFRCv = parseFloat(tFRCv);
        var fHCv = parseFloat(tHCv);
        var fBLv = parseFloat(tBLv);
        var fIrval = parseFloat(tIrval);
        break;

      case 'Hc':
        var fHCv = parseFloat(i);
        var fSCvl = parseFloat(tSCvl);
        var fAr = parseFloat(tAr) * 0.404686; //ac to ha conversion
        var fBt = parseFloat(tBt);
        var fBynb = parseFloat(tBy) * 0.000112085; // lb/ac to kg/m2 conversion 0.000112085
        var fBy = parseFloat(tBy) * 0.00112085; // lb/ac to Mg/ha conversion 0.000112085
        var fSp = parseFloat(tSp) * 1.60934; // mph to km/hr conversion
        var fUn = parseFloat(tUn);
        var fLo = parseFloat(tLo);
        var fUnLo = parseFloat(tUnLo);
        var fBm = parseFloat(tBm);
        var fGrY = parseFloat(tGrY);
        var fBc = parseFloat(tBc);
        var fGrp = parseFloat(tGpr);
        var fBtc = parseFloat(tBtc);
        var fBtd = parseFloat(tBtd);
        var fLrv = parseFloat(tLrv);
        var fFRCv = parseFloat(tFRCv);
        var fCCv = parseFloat(tCCv);
        var fBLv = parseFloat(tBLv);
        var fIrval = parseFloat(tIrval);
        break;

      case 'Bl':
        var fBLv = parseFloat(i);
        var fSCvl = parseFloat(tSCvl);
        var fAr = parseFloat(tAr) * 0.404686; //ac to ha conversion
        var fBt = parseFloat(tBt);
        var fBynb = parseFloat(tBy) * 0.000112085; // lb/ac to kg/m2 conversion 0.000112085
        var fBy = parseFloat(tBy) * 0.00112085; // lb/ac to Mg/ha conversion 0.000112085
        var fSp = parseFloat(tSp) * 1.60934; // mph to km/hr conversion
        var fUn = parseFloat(tUn);
        var fLo = parseFloat(tLo);
        var fUnLo = parseFloat(tUnLo);
        var fBm = parseFloat(tBm);
        var fGrY = parseFloat(tGrY);
        var fBc = parseFloat(tBc);
        var fGrp = parseFloat(tGpr);
        var fBtc = parseFloat(tBtc);
        var fBtd = parseFloat(tBtd);
        var fLrv = parseFloat(tLrv);
        var fFRCv = parseFloat(tFRCv);
        var fCCv = parseFloat(tCCv);
        var fHCv = parseFloat(tHCv);
        var fIrval = parseFloat(tIrval);
        break;

      default:
    }


    var ArF = 10;

    // Total field area 
    totArval = (parseFloat(tAr.value) * fUn).toFixed(0);
    totAr.value = totArval;

    //    Number of bales

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


    //Total grain yield 
    var TGYv = fGrY * Arv * fUn;
    TGY.value = TGYv;


    // Logistics distance
    var LogisDis = Math.pow(((fAr * fBy) / (17.879 * (fBt + 0.895))), 1.377);
    LD.value = (LogisDis * ArF * 0.621371).toFixed(2);


    // Bale collection operation time
    var optTime = Math.pow(((fAr * fBy) / (-46.003 + (fBt * 80.230) + (fSp * 15.052))), 1.381) * fUn;
    var OTval = (optTime) * ArF;
    OT.value = OTval.toFixed(2);


    // Bale consumption fuel consumption
    var FuelConsp
    // FuelConsp = Math.pow(((fAr * fBy) / (-4.991 + (fBt * 1.165) + (fSp * 4.827))), 1.243) * 0.264;
    if (fBt == 1 || fBt == 2) {
      FuelConsp = Math.pow(((fAr * fBy) / (-5.913 + (fBt * 13.164) + (fSp * 2.777))), 1.414);
    } else {
      FuelConsp = Math.pow(((fAr * fBy) / (-4.991 + (fBt * 1.165) + (fSp * 4.827))), 1.242);
    }

    FuelConspUn = (FuelConsp * ArF * 0.264172) * fUn;
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
    var FCons = CFval * LUnL * fUn * 0.264172; // converting litre to gal
    var totFconsp = FCons + FuelConspUn
    TBFC.value = totFconsp.toFixed(2);

    //Total bales revenue

    var TBRv = (fBc * nbales * fUn).toFixed(0);

    //Total grain revenue
    var TGRv = TGYv * fGrp;

    // Total bale transporation cost 
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
    var Irval = fIrval;

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
    var LrCal = (Arv * fLrv).toFixed(1);

    // Total fixed cost 
    var TTFCs = (parseFloat(Dep_val) + parseFloat(THI_I_val) + parseFloat(LrCal)).toFixed(0);

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

    // Fuel cost:
    var Fcv = document.getElementById("Fc");
    var FcCal = (parseFloat(Fcv.value) * totFconsp);
    var FCLCval = FcCal + LcCal;

    // Total bale transportation cost 
    var fBtc = parseFloat(document.getElementById("BTC").value);
    var fBtd = parseFloat(document.getElementById("BTD").value);
    var TBTCval = fBtc * fBtd;

    // Total variable cost (Tractor)
    var TVCv = (parseFloat(RMCv) + parseFloat(FCLCval) + parseFloat(TBTCval)).toFixed(0);


    // Seed cost:  
    var selectIndex = document.getElementById("drop").selectedIndex;
    if (selectIndex == "0" || selectIndex == "1") {
      SCv = fSCvl / 5;
    } else {
      SCv = fSCvl
    }
    var SCcal = SCv * Arv * fUn;

    // Fertilizer cost:
    var FRCcal = fFRCv * Arv * fUn;


    // Chemical cost:
    var CCcal = fCCv * Arv * fUn


    // Crop input cost:
    var CICv = (parseFloat(SCcal) + parseFloat(FRCcal) + parseFloat(CCcal)).toFixed(0);


    // No-cost (FAR, FRC, CC, LC = 0$): Crop input cost 
    NCCIC = parseFloat(SCcal);

    // Harvest cost:
    var HCcal = fHCv * Arv * fUn;

    // Baling cost:
    var BLcal = (fBLv * Arv * fUn)


    // Total production cost
    var TPCv = (parseFloat(HCcal) + parseFloat(BLcal) + parseFloat(CICv)).toFixed(0);

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
    var deprABPval = (((((ABPPrice - salvalABP) / uselifeABP) / optAH)));
    var THI_ABPv = ((((((parseFloat(salvalABP) + parseFloat(ABPPrice)) / 2) * 0.0133) / optAH) * totOpTime) + (THI_val));
    var THI_ABPval = ((((((parseFloat(salvalABP) + parseFloat(ABPPrice)) / 2) * 0.0133) / optAH)));
    var INT_ABPv = ((((((parseFloat(salvalABP) + parseFloat(ABPPrice)) / 2) * (Irval / 100)) / optAH) * totOpTime) + (INT_val));
    var INT_ABPval = ((((((parseFloat(salvalABP) + parseFloat(ABPPrice)) / 2) * (Irval / 100)) / optAH)));
    var THI_I_ABPv = (parseFloat(THI_ABPv) + parseFloat(INT_ABPv)).toFixed(1);
    var TTFC_ABP = (parseFloat(deprABPv) + parseFloat(THI_I_ABPv) + parseFloat(LrCal)).toFixed(0);

    /**********RMC - ABP **************/
    var Xv = ((optAH * 1) / 1000); // opt = 1; Machine years owned assumed = 1
    var TAR = (0.003 * Math.pow(Xv, 2));
    var RMC_ABP = parseFloat(((((ABPPrice * TAR) / opt) / optAH) * totOpTime)).toFixed(1);
    var RMC_ABPv = (parseFloat(RMC_ABP) + parseFloat(RMCv)).toFixed(1);

    // Total variable cost (ABP)
    var TVC_ABPv = (parseFloat(RMC_ABPv) + parseFloat(FCLCval) + parseFloat(TBTCval)).toFixed(0);

    // Total cost (Tractor)
    TFCv = TTFCs;
    var TCv = (parseFloat(TPCv) + parseFloat(TVCv) + parseFloat(TFCv)).toFixed(0);

    // Total cost (ABP)
    var TC_ABPv = (parseFloat(TPCv) + parseFloat(TVC_ABPv) + parseFloat(TTFC_ABP)).toFixed(0);

    // Total revenue per acre

    // Crop type javascript options 
    var drpOp = document.getElementById("drop").selectedIndex

    if (drpOp == 2 || drpOp == 3 || drpOp == 4 || drpOp == 7 || drpOp == 8 || drpOp == 9) {
      TRev = (parseFloat(TBRv) + parseFloat(TGRv)).toFixed(0);
    } else if (drpOp == 0 || drpOp == 1 || drpOp == 5 || drpOp == 6) {
      TRev = TBRv;
    }

    var TRACv = (TRev / Arv).toFixed(0);

    // Total cost per acre (Tractor)
    var TCACv = (TCv / Arv).toFixed(0);

    // Total cost per acre (ABP)
    var TCAC_ABPv = (TC_ABPv / Arv).toFixed(0);

    // Net return (tractor)
    var NPv = (parseFloat(TRev) - parseFloat(TCv));

    if (NPv > 0) {
      document.getElementById(valid).style.textIndent = "0pt";
    } else {
      var mval = Math.round(((i - minf) / (maxf - minf) * 90).toFixed(0));
      var markpos = String(mval) + "pt";
      //          console.log("last i = " + i + "; mval = " + mval + "; mpos = " + markpos);         
      document.getElementById(valid).style.textIndent = markpos;
      break;
    }
  }

} // end of function calculate()