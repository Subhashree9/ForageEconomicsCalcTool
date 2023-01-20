function marker3(minv, maxv, intv, valid, condf) {

  var minf = parseFloat(document.getElementById(minv).value);
  var maxf = parseFloat(document.getElementById(maxv).value);
  var intf = parseFloat(intv);

  var tIr = document.getElementById('Ir').value; // Interest rate
  var tAr = document.getElementById('Ar').value; // Field area
  var tBt = document.getElementById('Bt').value; // Bales/trip
  var tBy = document.getElementById('By').value; // Biomass yield 
  var tSp = document.getElementById('Sp').value; // Speed 
  var tBm = document.getElementById('Bm').value; // Bale mass    
  var tBc = document.getElementById('Bc').value; // Bale cost 
  var tFar = document.getElementById("Far").value; // Land rent  
  var tSc = document.getElementById("Sc").value; // Seed cost   
  var tFrc = document.getElementById("Frc").value; // Fertilizer cost  
  var tCc = document.getElementById("Cc").value; // Chemical cost
  var tHc = document.getElementById("Hc").value; // Harvest cost  
  var tBl = document.getElementById("Bl").value; // Baling cost   
  var tFc = document.getElementById("Fc").value; // Fuel cost 
  var tNl = document.getElementById("NL").value; // Number of labors   
  var tLc = document.getElementById("Lc").value; // Labor cost 
  var tUn = document.getElementById('Un').value; // Field unit 
  var tBtc = document.getElementById("BTC").value; // Bale transportation cost
  var tBtd = document.getElementById("BTD").value; // Bale transportation distance

  // For number of bales calculation 
  var arHaEq = 10000;
  var swath = 9;
  var HeadPass = 2;
  for (var i = minf; i < maxf; i = i + intf) {
    switch (condf) {
      case 'Fc':
        tFc = i;
        var fFc = parseFloat(tFc);
        var fIr = parseFloat(tIr);
        var fBl = parseFloat(tBl);
        var fHc = parseFloat(tHc);
        var fCc = parseFloat(tCc);
        var fFrc = parseFloat(tFrc);
        var fSc = parseFloat(tSc);
        var fBm = parseFloat(tBm);
        var fFar = parseFloat(tFar);
        var fBc = parseFloat(tBc);
        var fSp = parseFloat(tSp);
        var fBy = Math.floor(parseFloat(tBy) / 892.179).toFixed(2); // lb/ac to Mg/ha conversion
        var fAr = parseFloat(tAr) * 0.404686; //ac to ha conversion
        var fBt = parseFloat(tBt);
        var fBy = Math.floor(parseFloat(tBy) / 892.179).toFixed(2); // lb/ac to Mg/ha conversion
        var fAr = parseFloat(tAr) * 0.404686; //ac to ha conversion  
        var fNl = parseFloat(tNl);
        var fLc = parseFloat(tLc);
        var fUn = parseFloat(tUn);
        var fBtc = parseFloat(tBtc);
        var fBtd = parseFloat(tBtd);
        break;
      case 'Lc':
        // alert("i = " + i);
        tLc = i;
        var fLc = parseFloat(tLc);
        var fNl = parseFloat(tNl);
        var fFc = parseFloat(tFc);
        var fIr = parseFloat(tIr);
        var fBl = parseFloat(tBl);
        var fHc = parseFloat(tHc);
        var fCc = parseFloat(tCc);
        var fFrc = parseFloat(tFrc);
        var fSc = parseFloat(tSc);
        var fBm = parseFloat(tBm);
        var fFar = parseFloat(tFar);
        var fBc = parseFloat(tBc);
        var fSp = parseFloat(tSp);
        var fBy = Math.floor(parseFloat(tBy) / 892.179).toFixed(2); // lb/ac to Mg/ha conversion
        var fAr = parseFloat(tAr) * 0.404686; //ac to ha conversion
        var fBt = parseFloat(tBt);
        var fBy = Math.floor(parseFloat(tBy) / 892.179).toFixed(2); // lb/ac to Mg/ha conversion
        var fAr = parseFloat(tAr) * 0.404686; //ac to ha conversion   
        var fUn = parseFloat(tUn);
        var fBtc = parseFloat(tBtc);
        var fBtd = parseFloat(tBtd);
        break;
      case 'NL':
        // alert("i = " + i);
        tNl = i;
        var fLc = parseFloat(tLc);
        var fNl = parseFloat(tNl);
        var fFc = parseFloat(tFc);
        var fIr = parseFloat(tIr);
        var fBl = parseFloat(tBl);
        var fHc = parseFloat(tHc);
        var fCc = parseFloat(tCc);
        var fFrc = parseFloat(tFrc);
        var fSc = parseFloat(tSc);
        var fBm = parseFloat(tBm);
        var fFar = parseFloat(tFar);
        var fBc = parseFloat(tBc);
        var fSp = parseFloat(tSp);
        var fBy = Math.floor(parseFloat(tBy) / 892.179).toFixed(2); // lb/ac to Mg/ha conversion
        var fAr = parseFloat(tAr) * 0.404686; //ac to ha conversion
        var fBt = parseFloat(tBt);
        var fBy = Math.floor(parseFloat(tBy) / 892.179).toFixed(2); // lb/ac to Mg/ha conversion
        var fAr = parseFloat(tAr) * 0.404686; //ac to ha conversion   
        var fUn = parseFloat(tUn);
        var fBtc = parseFloat(tBtc);
        var fBtd = parseFloat(tBtd);
        break;
      case 'BTC':
        // alert("i = " + i);
        tBtc = i;
        var fLc = parseFloat(tLc);
        var fNl = parseFloat(tNl);
        var fFc = parseFloat(tFc);
        var fIr = parseFloat(tIr);
        var fBl = parseFloat(tBl);
        var fHc = parseFloat(tHc);
        var fCc = parseFloat(tCc);
        var fFrc = parseFloat(tFrc);
        var fSc = parseFloat(tSc);
        var fBm = parseFloat(tBm);
        var fFar = parseFloat(tFar);
        var fBc = parseFloat(tBc);
        var fSp = parseFloat(tSp);
        var fBy = Math.floor(parseFloat(tBy) / 892.179).toFixed(2); // lb/ac to Mg/ha conversion
        var fAr = parseFloat(tAr) * 0.404686; //ac to ha conversion
        var fBt = parseFloat(tBt);
        var fBy = Math.floor(parseFloat(tBy) / 892.179).toFixed(2); // lb/ac to Mg/ha conversion
        var fAr = parseFloat(tAr) * 0.404686; //ac to ha conversion   
        var fUn = parseFloat(tUn);
        var fBtc = parseFloat(tBtc);
        var fBtd = parseFloat(tBtd);
        break;
      case 'BTD':
        // alert("i = " + i);
        tBtd = i;
        var fLc = parseFloat(tLc);
        var fNl = parseFloat(tNl);
        var fFc = parseFloat(tFc);
        var fIr = parseFloat(tIr);
        var fBl = parseFloat(tBl);
        var fHc = parseFloat(tHc);
        var fCc = parseFloat(tCc);
        var fFrc = parseFloat(tFrc);
        var fSc = parseFloat(tSc);
        var fBm = parseFloat(tBm);
        var fFar = parseFloat(tFar);
        var fBc = parseFloat(tBc);
        var fSp = parseFloat(tSp);
        var fBy = Math.floor(parseFloat(tBy) / 892.179).toFixed(2); // lb/ac to Mg/ha conversion
        var fAr = parseFloat(tAr) * 0.404686; //ac to ha conversion
        var fBt = parseFloat(tBt);
        var fBy = Math.floor(parseFloat(tBy) / 892.179).toFixed(2); // lb/ac to Mg/ha conversion
        var fAr = parseFloat(tAr) * 0.404686; //ac to ha conversion   
        var fUn = parseFloat(tUn);
        var fBtc = parseFloat(tBtc);
        var fBtd = parseFloat(tBtd);
        break;
    }
    //    Number of bales
    var fBmc = fBm * 0.454; //lbs to kg conversion
    var arHaEq = 10000;
    var swath = 9;
    var HeadPass = 2;
    var area = fAr * arHaEq;
    var L = Math.sqrt(area);
    var W = area / L;
    var IL = (L - (swath * HeadPass));
    var IW = (W - (swath * HeadPass));
    var N = (IL * IW * 0.1) * fBy / fBmc;
    var nbales = Math.round(N);
    nbales = Math.round(N);

    //    Logistics distance
    var LogisDis = Math.pow(((fAr * fBy) / (17.879 * (fBt + 0.895))), 1.377) * 0.621371 * fUn;


    // Operation time
    var optTime = Math.pow(((fAr * fBy) / (-46.003 + (fBt * 80.230) + (fSp * 15.052))), 1.381) * fUn;


    // Total fuel consumption
    var FuelConsp
    FuelConsp = Math.pow(((fAr * fBy) / (-4.991 + (fBt * 1.165) + (fSp * 4.827))), 1.243) * 0.264;

    // if (fBt == 1 || fBt == 2) {
    //   FuelConsp = Math.pow(((fAr * fBy) / (-5.913 + (fBt * 13.164) + (fSp * 2.777))), 1.414) * 0.264;
    // } else {
    //   FuelConsp = Math.pow(((fAr * fBy) / (-4.991 + (fBt * 1.165) + (fSp * 4.827))), 1.243) * 0.264;
    // }
    FuelConspUn = FuelConsp * fUn;

    //    Total bales revenue
    var TBRv = (fBc * nbales * fUn).toFixed(0);


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


    //      Getting the input machine price value
    var MPrice = document.getElementById("Mp").value;

    /********  Total fixed cost (TFC) **********/

    var TFCres = [0, 0, 0, 0];

    function TFCval(af, bf, cf) {
      var salvg = af * Math.pow(ageyF, 2) - bf * ageyF + cf;
      var salval = MPrice * salvg * 0.01;
      var uselif = 10000 / optAH;
      var deprv = ((((MPrice - salval) / uselif) / optAH) * optTime).toFixed(1);
      var THIv = (((((parseFloat(salval) + parseFloat(MPrice)) / 2) * 0.0133) / optAH) * optTime).toFixed(1);
      var INTv = (((((parseFloat(salval) + parseFloat(MPrice)) / 2) * (fIr / 100)) / optAH) * optTime).toFixed(
        1);
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


    // // Land rent     
    var LAr = document.getElementById("Ar").value;
    var LrCal = (LAr * fFar).toFixed(1);

    var TTFCs = parseFloat(LrCal) + parseFloat(TFCres[3]);

    /**********RMC**************/
    var Xv = ((optAH * opt) / 1000);
    var TAR = (0.003 * Math.pow(Xv, 2));
    var RMCv = ((((MPrice * TAR) / opt) / optAH) * optTime).toFixed(1);


    // // Fuel cost:
    var FcCal = (fFc * FuelConsp * fUn).toFixed(1);
    // alert("FcCal = " + FcCal);

    // Labor cost:
    var LcCal = (fLc * optTime * fNl).toFixed(1);

    // Total variable cost:
    var TVCv = (parseFloat(RMCv) + parseFloat(LcCal) + parseFloat(FcCal)).toFixed(0);

    // Seed cost:
    var SCv = fSc;
    var SCcal = (SCv * tAr * fUn).toFixed(1);

    // Fertilizer cost:
    var FRCv = fFrc;
    var FRCcal = (FRCv * tAr * fUn).toFixed(1);

    // Chemical cost:
    var CCv = fCc;
    var CCcal = (CCv * tAr * fUn).toFixed(1)

    // Crop input cost:
    var CICv = (parseFloat(SCcal) + parseFloat(FRCcal) + parseFloat(CCcal)).toFixed(0);

    // Harvest cost:
    var HCv = fHc;
    var HCcal = (HCv * tAr).toFixed(1);


    // Baling cost:
    var BLv = fBl;
    var BLcal = (BLv * tAr).toFixed(1);


    // Total production cost
    var TPCv = (parseFloat(HCcal) + parseFloat(BLcal) + parseFloat(CICv)).toFixed(0);


    // Total bale transportation cost 
    // var fBtc = parseFloat(document.getElementById("BTC").value);
    // var fBtd = parseFloat(document.getElementById("BTD").value);
    var TBTCval = fBtc * fBtd;

    // Total cost
    TFCv = TTFCs;
    var TCv = (parseFloat(TPCv) + parseFloat(TVCv) + parseFloat(TFCv) + parseFloat(TBTCval)).toFixed(0);


    // Total revenue per acre
    var TRACv = (TBRv / tAr).toFixed(0);

    // Total cost per acre
    var TCACv = (TCv / tAr).toFixed(0);

    // Net profit
    NPv = (parseFloat(TBRv) - parseFloat(TCv)).toFixed(0);


    //          console.log("i = "+ i + "; NPv = " + NPv + "; tBm = " + tBm);
    if (NPv > 0) {
      document.getElementById(valid).style.textIndent = "0pt";
    } else {
      var mval = Math.round(((i - minf) / (maxf - minf) * 90).toFixed(0));
      var markpos = String(mval) + "pt";
      document.getElementById(valid).style.textIndent = markpos;
      // alert("i = " + i);
      break;
    }
  } // marker3 for end 
} // marker3 function end 