function genPDF() {

  var doc = new jsPDF();

  doc.setFontSize(9);

  // Adding NDSU logo
  var imgNDSU = new Image()
  imgNDSU.src = 'Images/NDSUlogo.jpg'

  // Adding USDA-ARS logo
  var imgUSDA = new Image()
  imgUSDA.src = 'Images/USDAlogo.jpg'

  doc.addImage(imgNDSU, 'JPEG', 10, 30, 40, 6)

  var tile = "<h1>Forage Economics Calculator</h1>"
  doc.fromHTML(tile, 53, 20, {
    'width': 1000
  });

  doc.addImage(imgUSDA, 'JPEG', 165, 30, 20, 8)

  var stile = "<h4><i>Department of Agricultural and Biosystems Engineering, NDSU</i></h4>"
  doc.fromHTML(stile, 50, 35, {
    'width': 1000
  });

  var Inptile = '<b>Selected Inputs</b>'
  doc.fromHTML(Inptile, 20, 50, {
    'width': 500
  });

  var Outtile = "<b>Generated Results</b>"
  doc.fromHTML(Outtile, 120, 50, {
    'width': 500
  });

  //    ---------------------------------------------
  //    -----------------Inputs---------------------
  //    ---------------------------------------------

  //    -----------------Crop type----------------------
  var CtP = "Crop type:"
  doc.fromHTML(CtP, 20, 60, {
    'width': 500
  });

  if (document.getElementById("drop").selectedIndex == "0") {
    var CtOpP = "Alfalfa (Perennial, 5 years)"
  } else if (document.getElementById("drop").selectedIndex == "1") {
    var CtOpP = "Alfalfa mix (Perennial, 5 years)"
  } else if (document.getElementById("drop").selectedIndex == "2") {
    var CtOpP = "Barley (Annual)"
  } else if (document.getElementById("drop").selectedIndex == "3") {
    var CtOpP = "Corn stover (Annual)"
  } else if (document.getElementById("drop").selectedIndex == "4") {
    var CtOpP = "Grain mix (Annual)"
  } else if (document.getElementById("drop").selectedIndex == "5") {
    var CtOpP = "Grass (Annual)"
  } else if (document.getElementById("drop").selectedIndex == "6") {
    var CtOpP = "Grass mix (Annual)"
  } else if (document.getElementById("drop").selectedIndex == "7") {
    var CtOpP = "Millet (Annual)"
  } else if (document.getElementById("drop").selectedIndex == "8") {
    var CtOpP = "Oats (Annual)"
  } else if (document.getElementById("drop").selectedIndex == "9") {
    var CtOpP = "Wheat (Annual)"
  } else if (document.getElementById("drop").selectedIndex == "10") {
    var CtOpP = "Others"
  }
  doc.fromHTML(CtOpP, 70, 60, {
    'width': 500
  });

  //    ---------------------------------------

  //    -----------------Engine power (hp)----------------------

  var EpP = "Engine power (hp):"
  doc.fromHTML(EpP, 20, 67, {
    'width': 500
  });

  if (document.getElementById("EHp").selectedIndex == "0") {
    var EpOpP = "80-149"
  } else if (document.getElementById("EHp").selectedIndex == "1") {
    var EpOpP = "30-79"
  } else if (document.getElementById("EHp").selectedIndex == "2") {
    var EpOpP = "150+"
  }
  doc.fromHTML(EpOpP, 70, 67, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Machine age owned (years)----------------------

  var MaP = "Tractor age (years):"
  doc.fromHTML(MaP, 20, 74, {
    'width': 500
  });

  var MaPOpP = document.getElementById("AgeYrs").value;
  doc.fromHTML(MaPOpP, 70, 74, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Annual usage (h)----------------------

  var AuP = "Annual usage (h):"
  doc.fromHTML(AuP, 20, 81, {
    'width': 500
  });

  var AuPOpP = document.getElementById("AnnHrs").value;
  doc.fromHTML(AuPOpP, 70, 81, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Machine cost ($)----------------------

  var MpP = "Tractor cost ($):"
  doc.fromHTML(MpP, 20, 88, {
    'width': 500
  });
  var MpPOp = document.getElementById('Mp').value;
  doc.fromHTML(MpPOp, 70, 88, {
    'width': 500
  });
  //    ---------------------------------------


  //    -----------------ABP cost ($)----------------------

  var ABPP = "ABP cost ($):"
  doc.fromHTML(ABPP, 20, 95, {
    'width': 500
  });
  var ABPPOp = document.getElementById('ABP').value;
  doc.fromHTML(ABPPOp, 70, 95, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Interest rate (%)----------------------

  var MpP = "Interest rate (%):"
  doc.fromHTML(MpP, 20, 102, {
    'width': 500
  });
  var MpPOp = document.getElementById('Ir').value;
  doc.fromHTML(MpPOp, 70, 102, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Field area unit (ac)----------------------

  var ArP = "Field area unit (ac):"
  doc.fromHTML(ArP, 20, 109, {
    'width': 500
  });
  var ArPOp = document.getElementById('Ar').value;
  doc.fromHTML(ArPOp, 70, 109, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Number of field units (#):----------------------

  var UnP = "Number of field units (#):"
  doc.fromHTML(UnP, 20, 116, {
    'width': 500
  });
  var UnPOp = document.getElementById('Un').value;
  doc.fromHTML(UnPOp, 70, 116, {
    'width': 500
  });
  //    ---------------------------------------    

  //    -----------------Forage yield (lb/ac)----------------------

  var ByP = "Forage yield (lb/ac):"
  doc.fromHTML(ByP, 20, 123, {
    'width': 500
  });
  var ByPOp = document.getElementById('By').value;
  doc.fromHTML(ByPOp, 70, 123, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Bale mass (lb)----------------------

  var BmP = "Bale mass (lb):"
  doc.fromHTML(BmP, 20, 130, {
    'width': 500
  });
  var BmPOp = document.getElementById('Bm').value;
  doc.fromHTML(BmPOp, 70, 130, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Bale sale price ($)----------------------

  var BcP = "Bale sale price ($/bale):"
  doc.fromHTML(BcP, 20, 137, {
    'width': 500
  });
  var BcPOp = document.getElementById('Bc').value;
  doc.fromHTML(BcPOp, 70, 137, {
    'width': 500
  });
  //    ---------------------------------------


  //    -----------------Bales/trip----------------------

  var BtP = "Bales/trip:"
  doc.fromHTML(BtP, 20, 144, {
    'width': 500
  });
  var BtPOp = document.getElementById('Bt').value;
  doc.fromHTML(BtPOp, 70, 144, {
    'width': 500
  });
  //    ---------------------------------------


  //    -----------------Bales loading time----------------------

  var BLtP = "Bale loading time (min):"
  doc.fromHTML(BLtP, 20, 151, {
    'width': 500
  });
  var BLtPOp = document.getElementById('BLT').value;
  doc.fromHTML(BLtPOp, 70, 151, {
    'width': 500
  });
  //    ---------------------------------------


  //    -----------------Bales unloading time----------------------

  var BUnLtP = "Bale unloading time (min):"
  doc.fromHTML(BUnLtP, 20, 158, {
    'width': 500
  });
  var BUnLtPOp = document.getElementById('BLT').value;
  doc.fromHTML(BUnLtPOp, 70, 158, {
    'width': 500
  });
  //    ---------------------------------------


  //    -----------------Grain yield----------------------

  var GyP = "Bale unloading time (min):"
  doc.fromHTML(GyP, 20, 165, {
    'width': 500
  });
  var GyPOp = document.getElementById('BULT').value;
  doc.fromHTML(GyPOp, 70, 165, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Machine speed----------------------

  var SpP = "Machine speed (mph):"
  doc.fromHTML(SpP, 20, 137, {
    'width': 500
  });
  var SpPOp = document.getElementById('Sp').value;
  doc.fromHTML(SpPOp, 70, 137, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Field area rent ($)----------------------

  var FarP = "Field rent ($/ac):"
  doc.fromHTML(FarP, 20, 151, {
    'width': 500
  });
  var FarPOp = document.getElementById('Far').value;
  doc.fromHTML(FarPOp, 70, 151, {
    'width': 500
  });
  //    ---------------------------------------    

  //    -----------------Seed cost ($)----------------------

  var ScP = "Seed cost ($/ac):"
  doc.fromHTML(ScP, 20, 158, {
    'width': 500
  });
  var ScPOp = document.getElementById('Sc').value;
  doc.fromHTML(ScPOp, 70, 158, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Fertilizer cost ($)----------------------

  var FrcP = "Fertilizer cost ($/ac):"
  doc.fromHTML(FrcP, 20, 165, {
    'width': 500
  });
  var FrcPOp = document.getElementById('Frc').value;
  doc.fromHTML(FrcPOp, 70, 165, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Chemical cost ($)----------------------

  var CcP = "Chemical cost ($/ac):"
  doc.fromHTML(CcP, 20, 172, {
    'width': 500
  });
  var CcPOp = document.getElementById('Cc').value;
  doc.fromHTML(CcPOp, 70, 172, {
    'width': 500
  });
  //    ---------------------------------------


  //    -----------------Harvest cost ($)----------------------

  var HcP = "Harvest cost ($/ac):"
  doc.fromHTML(HcP, 20, 179, {
    'width': 500
  });
  var HcPOp = document.getElementById('Hc').value;
  doc.fromHTML(HcPOp, 70, 179, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Baling cost ($)----------------------

  var BlP = "Baling cost ($/ac):"
  doc.fromHTML(BlP, 20, 186, {
    'width': 500
  });
  var BlPOp = document.getElementById('Bl').value;
  doc.fromHTML(BlPOp, 70, 186, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Fuel cost ($)----------------------

  var FcP = "Fuel cost ($/ac):"
  doc.fromHTML(FcP, 20, 193, {
    'width': 500
  });
  var FcPOp = document.getElementById('Fc').value;
  doc.fromHTML(FcPOp, 70, 193, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Labor cost ($)----------------------

  var LcP = "Labor cost ($/ac):"
  doc.fromHTML(LcP, 20, 200, {
    'width': 500
  });
  var LcPOp = document.getElementById('Lc').value;
  doc.fromHTML(LcPOp, 70, 200, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Bale transportation cost ($)----------------------

  var BTcP = "Bale transportation cost ($/mile):"
  doc.fromHTML(BTcP, 20, 207, {
    'width': 500
  });
  var LcPOp = document.getElementById('BTC').value;
  doc.fromHTML(LcPOp, 80, 207, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Bale transportation distance ($)----------------------

  var BTdP = "Bale transportation distance (mile):"
  doc.fromHTML(BTdP, 20, 214, {
    'width': 500
  });
  var LcPOp = document.getElementById('BTD').value;
  doc.fromHTML(LcPOp, 82, 214, {
    'width': 500
  });
  //    ---------------------------------------

  //    ---------------------------------------------
  //    -----------------Results---------------------
  //    ---------------------------------------------

  //    -----------------Equipment type----------------------

  var EquipP = "Equipment:"
  doc.fromHTML(EquipP, 120, 60, {
    'width': 500
  });
  var EquipPOp = document.getElementById('Equip').value;
  doc.fromHTML(EquipPOp, 180, 60, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Total field area (ac)----------------------

  var totArP = "Total field area (ac):"
  doc.fromHTML(totArP, 120, 67, {
    'width': 500
  });
  var totArPOp = document.getElementById('totAr').value;
  doc.fromHTML(totArPOp, 180, 67, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Total no of bales----------------------

  var NBP = "Total number of bales:"
  doc.fromHTML(NBP, 120, 74, {
    'width': 500
  });
  var NBPOp = document.getElementById('NB').value;
  doc.fromHTML(NBPOp, 180, 74, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Total logistics distance ----------------------

  var LDP = "Total logistics distance (mi):"
  doc.fromHTML(LDP, 120, 81, {
    'width': 500
  });
  var LDPOp = document.getElementById('LD').value;
  doc.fromHTML(LDPOp, 180, 81, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Total operation time ----------------------

  var OTP = "Total operation time (h):"
  doc.fromHTML(OTP, 120, 88, {
    'width': 500
  });
  var OTPOp = document.getElementById('OT').value;
  doc.fromHTML(OTPOp, 180, 88, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Total fuel consumption ----------------------

  var FCPP = "Total fuel consumption (gal):"
  doc.fromHTML(FCPP, 120, 95, {
    'width': 500
  });
  var FCPPOp = document.getElementById('FCP').value;
  doc.fromHTML(FCPPOp, 180, 95, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Total bale revenue ----------------------

  var TBRP = "Total bale revenue:"
  doc.fromHTML(TBRP, 120, 102, {
    'width': 500
  });
  var TBRPOp = document.getElementById('TBR').value;
  doc.fromHTML(TBRPOp, 180, 102, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Crop input cost ----------------------

  var CICP = "Crop input cost:"
  doc.fromHTML(CICP, 120, 109, {
    'width': 500
  });
  var CICPOp = document.getElementById('CIC').value;
  doc.fromHTML(CICPOp, 180, 109, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Total production cost ----------------------

  var TPCP = "Total production cost:"
  doc.fromHTML(TPCP, 120, 116, {
    'width': 500
  });
  var TPCPOp = document.getElementById('TPC').value;
  doc.fromHTML(TPCPOp, 180, 116, {
    'width': 500
  });
  //    ---------------------------------------    

  //    -----------------Total fixed cost ----------------------

  var TFCP = "Total fixed cost:"
  doc.fromHTML(TFCP, 120, 123, {
    'width': 500
  });
  var TFCPOp = document.getElementById('TFC').value;
  doc.fromHTML(TFCPOp, 180, 123, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Total variable cost ----------------------

  var TVCP = "Total variable cost:"
  doc.fromHTML(TVCP, 120, 130, {
    'width': 500
  });
  var TVCPOp = document.getElementById('TVC').value;
  doc.fromHTML(TVCPOp, 180, 130, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Total cost ----------------------

  var TCP = "Total cost:"
  doc.fromHTML(TCP, 120, 137, {
    'width': 500
  });
  var TCPOp = document.getElementById('TC').value;
  doc.fromHTML(TCPOp, 180, 137, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Total revenue per acre ----------------------

  var TRARC = "Total revenue per acre:"
  doc.fromHTML(TRARC, 120, 144, {
    'width': 500
  });
  var TRARCOp = document.getElementById('TRAC').value;
  doc.fromHTML(TRARCOp, 180, 144, {
    'width': 500
  });
  //    ---------------------------------------


  //    -----------------Total cost per acre ----------------------

  var TCARC = "Total cost per acre:"
  doc.fromHTML(TCARC, 120, 151, {
    'width': 500
  });
  var TCARCOp = document.getElementById('TCAC').value;
  doc.fromHTML(TCARCOp, 180, 151, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Net return ----------------------

  var NRP = "Net return:"
  doc.fromHTML(NRP, 120, 158, {
    'width': 500
  });
  var NRPOp = document.getElementById('NP').value;
  doc.fromHTML(NRPOp, 180, 158, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Net return per acre ----------------------

  var NPACP = "Net return per acre:"
  doc.fromHTML(NPACP, 120, 165, {
    'width': 500
  });
  var NAPCPOp = document.getElementById('NPAC').value;
  doc.fromHTML(NAPCPOp, 180, 165, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Break even ratio ----------------------

  var BEP = "Break even ratio:"
  doc.fromHTML(BEP, 120, 172, {
    'width': 500
  });
  var BEPOp = document.getElementById('BE').value;
  doc.fromHTML(BEPOp, 180, 172, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Payback period (cycles) ----------------------

  var PBP = "Payback period (cycles):"
  doc.fromHTML(PBP, 120, 179, {
    'width': 500
  });
  var PBPOp = document.getElementById('PB').value;
  doc.fromHTML(PBPOp, 180, 179, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Return on investment (%) ----------------------

  var ROIP = "Return on investment (%):"
  doc.fromHTML(ROIP, 120, 186, {
    'width': 500
  });
  var ROIPOp = document.getElementById('ROI').value;
  doc.fromHTML(ROIPOp, 180, 186, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------No-cost scenario NR ----------------------

  var NCS = "No-cost scenario"
  doc.fromHTML(NCS, 120, 193, {
    'width': 500
  });
  // NCS - Net return 
  var NCSNR = "Net return:"
  doc.fromHTML(NCSNR, 120, 200, {
    'width': 500
  });
  var NCNRPOp = document.getElementById('NCNR').value;
  doc.fromHTML(NCNRPOp, 180, 200, {
    'width': 500
  });

  // NCS - Pay back
  var NCSPB = "Pay back:"
  doc.fromHTML(NCSPB, 120, 207, {
    'width': 500
  });
  var NCPBPOp = document.getElementById('NCPB').value;
  doc.fromHTML(NCPBPOp, 180, 207, {
    'width': 500
  });

  // NCS - ROI
  var NCSROI = "Return on investment (%):"
  doc.fromHTML(NCSROI, 120, 214, {
    'width': 500
  });
  var NCROIPOp = document.getElementById('NCROI').value;
  doc.fromHTML(NCROIPOp, 180, 214, {
    'width': 500
  });


  //    ---------------------------------------

  doc.line(20, 260, 190, 260);
  doc.setFont("Times");
  var authors = doc.splitTextToSize(
    "Subhashree et al., (2020). Forage Aggregation Economics Calculator. Department of Agricultural and Biosystems Engineering, North Dakota State University, Fargo, USA.",
    165)
  doc.text(20, 270, authors);
  var today = new Date();
  var newdat = "Generated on: " + today;
  doc.text(20, 280, newdat);

  doc.save('Results.pdf');
}