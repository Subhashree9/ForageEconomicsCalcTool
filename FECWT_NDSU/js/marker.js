function marker(minv, maxv, intv, valid, condf) {
  var minf = parseFloat(document.getElementById(minv).value);
  var maxf = parseFloat(document.getElementById(maxv).value);
  var intf = parseFloat(intv);
  // var condf = String(condv);

  var tBy = document.getElementById('By').value; // Biomass yield 
  var tAr = document.getElementById('Ar').value; // Field area
  var tBt = document.getElementById('Bt').value; // Bales/trip
  var tSp = document.getElementById('Sp').value; // Speed 
  var tBm = document.getElementById('Bm').value; // Bale mass    
  var tBc = document.getElementById('Bc').value; // Bale cost  
  var tIr = document.getElementById('Ir').value; // Interest rate
  var tBt = document.getElementById('Bt').value; // Bales/trip
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

  for (var i = minf; i < maxf; i = i + intf) {
    switch (condf) {
      case 'By':
        var fBy = Math.floor(parseFloat(i) / 892.179).toFixed(2);
        var fAr = parseFloat(tAr) * 0.404686; //ac to ha conversion
        var fSp = parseFloat(tSp) * 1.60934; // mph to kmph conversion
        var fBt = parseFloat(tBt);
        var fBc = parseFloat(tBc);
        break;
      case 'Ar':
        tAr = i;
        var fAr = parseFloat(i) * 0.404686; //ac to ha conversion
        var fBy = Math.floor(parseFloat(tBy) / 892.179).toFixed(2);
        var fSp = parseFloat(tSp);
        var fBt = parseFloat(tBt);
        var fBc = parseFloat(tBc);
        break;
      case 'Bt':
        tBt = i;
        var fBt = parseFloat(i);
        var fBy = Math.floor(parseFloat(tBy) / 892.179).toFixed(2); // lb/ac to Mg/ha conversion
        var fAr = parseFloat(tAr) * 0.404686; //ac to ha conversion
        var fSp = parseFloat(tSp) * 1.60934; // mph to kmph conversion;
        var fBc = parseFloat(tBc);
      case 'Sp':
        tSp = i;
        var fSp = parseFloat(i) * 1.60934; // mph to kmph conversion;
        var fBy = Math.floor(parseFloat(tBy) / 892.179).toFixed(2); // lb/ac to Mg/ha conversion
        var fAr = parseFloat(tAr) * 0.404686; //ac to ha conversion
        var fBt = parseFloat(tBt);
        var fBc = parseFloat(tBc);
        break;
      case 'Bc':
        tBc = i;
        var fBc = parseFloat(i);
        var fSp = parseFloat(tSp) * 1.60934; // mph to kmph conversion;;
        var fBy = Math.floor(parseFloat(tBy) / 892.179).toFixed(2); // lb/ac to Mg/ha conversion
        var fAr = parseFloat(tAr) * 0.404686; //ac to ha conversion
        var fBt = parseFloat(tBt);
        break;
      default:
    }

    var fBm = parseFloat(tBm);
    var fIr = parseFloat(tIr);
    var fBt = parseFloat(tBt);
    var fFar = parseFloat(tFar);
    var fSc = parseFloat(tSc);
    var fFrc = parseFloat(tFrc);
    var fCc = parseFloat(tCc);
    var fHc = parseFloat(tHc);
    var fBl = parseFloat(tBl);
    var fFc = parseFloat(tFc);
    var fNl = parseFloat(tNl);
    var fLc = parseFloat(tLc);
    var fUn = parseFloat(tUn);

    // Number of bales
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

    // Logistics distance
    var LogisDis = (Math.pow(((fAr * fBy) / (17.879 * (fBt + 0.895))), 1.377) * 0.621371).toFixed(2);

    // Operation time
    var optTime = Math.pow(((fAr * fBy) / (-46.003 + (fBt * 80.230) + (fSp * 15.052))), 1.381) * fUn;

    // Total fuel consumption
    var FuelConsp

    if (fBt == 1 || fBt == 2) {
      FuelConsp = Math.pow(((fAr * fBy) / (-5.913 + (fBt * 13.164) + (fSp * 2.777))), 1.414) * 0.264;
    } else {
      FuelConsp = Math.pow(((fAr * fBy) / (-4.991 + (fBt * 1.165) + (fSp * 4.827))), 1.243) * 0.264;
    }
    FuelConspUn = FuelConsp * fUn;


    // Total bales revenue
    var TBRv = (fBc * nbales * fUn).toFixed(0);

    // Getting index value of the age in years
    var ageyrs = document.getElementById("AgeYrs");
    var ageyF = parseFloat(ageyrs.value);
    var opt = ageyrs.options[ageyrs.selectedIndex].value;

    // Getting index value of the engine power input
    var EngP = document.getElementById("EHp");
    var optEP = EngP.options[EngP.selectedIndex].value;

    // Getting index value of the annual usgae in hours
    var AnHrs = document.getElementById("AnnHrs");
    var optAH = AnHrs.options[AnHrs.selectedIndex].value;

    // Getting the input machine price value
    var MPrice = document.getElementById("Mp").value;


    /********  Total fixed cost (TFC) **********/
    var TFCres = [0, 0, 0, 0];

    function TFCval(af, bf, cf) {
      var salvg = af * Math.pow(ageyF, 2) - bf * ageyF + cf;
      var salval = MPrice * salvg * 0.01;
      var uselif = 10000 / optAH;
      var deprv = ((((MPrice - salval) / uselif) / optAH) * optTime).toFixed(1);
      var THIv = (((((parseFloat(salval) + parseFloat(MPrice)) / 2) * 0.0133) / optAH) * optTime).toFixed(1);
      var INTv = (((((parseFloat(salval) + parseFloat(MPrice)) / 2) * 0.05) / optAH) * optTime).toFixed(1);
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


    // Land rent cost

    var LAr = document.getElementById("Ar").value;
    var LrCal = (parseFloat(LAr) * fFar).toFixed(1);

    var TTFCs = parseFloat(LrCal) + parseFloat(TFCres[3]);



    /**********RMC**************/
    var Xv = ((optAH * opt) / 1000);
    var TAR = (0.003 * Math.pow(Xv, 2));
    var RMCv = ((((MPrice * TAR) / opt) / optAH) * optTime).toFixed(1);

    // // Labor cost:
    // var LcCal = (fLc * optTime * fNl).toFixed(1);

    // // Fuel cost:
    // var FcCal = (fFc * FuelConsp * fUn).toFixed(1);

    // // Total variable cost:
    // var TVCv = (parseFloat(RMCv) + parseFloat(LcCal) + parseFloat(FcCal)).toFixed(0);
    // // console.log("TVC = " + TVCv); 


    // Fuel cost:
    var FcCal = (fFc * FuelConsp * fUn).toFixed(1);

    // Labor cost:
    var LcCal = (fLc * optTime * fNl).toFixed(1);

    // Labor and fuel cost
    var FCLCval = parseFloat(FcCal + LcCal);

    // Total bale transportation cost 
    var fBtc = document.getElementById("BTC").value;
    var fBtd = document.getElementById("BTD").value;
    var TBTCval = fBtc * fBtd;

    // Total variable cost:
    var TVCv = (parseFloat(RMCv) + parseFloat(FCLCval) + parseFloat(TBTCval)).toFixed(0);


    // Seed cost:
    var SCv = fSc;
    var SCcal = (SCv * tAr * fUn).toFixed(1);

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


    // Total cost
    TFCv = TTFCs;
    var TCv = (parseFloat(TPCv) + parseFloat(TVCv) + parseFloat(TFCv)).toFixed(0);


    // Total revenue per acre
    var TRACv = (TBRv / tAr).toFixed(0);

    // Total cost per acre
    var TCACv = (TCv / tAr).toFixed(0);

    // Net profit
    NPv = (parseFloat(TBRv) - parseFloat(TCv)).toFixed(0);
    if (NPv < 0) {
      console.log("i = " + i + "; NPv = " + NPv + "; tBm = " + tBm);
      document.getElementById(valid).style.textIndent = "0pt";
    } else {
      var mval = ((i - minf) / (maxf - minf) * 100).toFixed(0);
      var markpos = String(mval) + "pt";
      console.log("last i = " + i + "; mval = " + mval + "; mpos = " + markpos);
      document.getElementById(valid).style.textIndent = markpos;
      break;
    }
  } // for end 
} // marker function end 