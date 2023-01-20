function genCharts() {
  /*   // Adding NDSU logo
    var imgNDSU = new Image()
    imgNDSU.src = 'Images/NDSUlogo.jpg'
  
  
    // Adding USDA-ARS logo
    var imgUSDA = new Image()
    imgUSDA.src = 'Images/USDAlogo.jpg' */

  // Chart area 
  var canvas = document.querySelector('#myChart1');
  //creates image
  var canvasImg = canvas.toDataURL("image/jpg", 1.0);


  //creates PDF from img
  var doc = new jsPDF('landscape');
  doc.setFontSize(18);
  var tile = "<h1>Forage Economics Calculator</h1>"
  doc.fromHTML(tile, 105, 10, {
    'width': 1000
  });
  var stile = "<h4><i>Department of Agricultural and Biosystems Engineering, NDSU</i></h4>"
  doc.fromHTML(stile, 102, 23, {
    'width': 1000
  });
  // doc.text(100, 20, title);
  // doc.addImage(imgNDSU, 'JPEG', 10, 10, 80, 12)
  doc.addImage(canvasImg, 'JPEG', 70, 50, 150, 100);
  // doc.addImage(imgUSDA, 'JPEG', 240, 10, 40, 16)
  //    -----------------Total revenue per acre ----------------------

  var TRARC = "Total revenue per acre:"
  doc.fromHTML(TRARC, 230, 50, {
    'width': 500
  });
  var TRARCOp = document.getElementById('TRAC').value;
  doc.fromHTML(TRARCOp, 277, 50, {
    'width': 500
  });
  //    ---------------------------------------
  //    -----------------Total cost per acre ----------------------

  var TCARC = "Total cost per acre:"
  doc.fromHTML(TCARC, 230, 60, {
    'width': 500
  });
  var TCARCOp = document.getElementById('TCAC').value;
  doc.fromHTML(TCARCOp, 277, 60, {
    'width': 500
  });
  //    ---------------------------------------
  //    -----------------Net return per acre ----------------------

  var NPACP = "Net return per acre:"
  doc.fromHTML(NPACP, 230, 70, {
    'width': 500
  });
  var NAPCPOp = document.getElementById('NPAC').value;
  doc.fromHTML(NAPCPOp, 277, 70, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Break even ratio ----------------------

  var BEP = "Break even ratio:"
  doc.fromHTML(BEP, 230, 80, {
    'width': 500
  });
  var BEPOp = document.getElementById('BE').value;
  doc.fromHTML(BEPOp, 277, 80, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Payback period (cycles) ----------------------

  var PBP = "Payback period (cycles):"
  doc.fromHTML(PBP, 230, 90, {
    'width': 500
  });
  var PBPOp = document.getElementById('PB').value;
  doc.fromHTML(PBPOp, 277, 90, {
    'width': 500
  });
  //    ---------------------------------------

  //    -----------------Return on investment (%) ----------------------

  var ROIP = "Return on investment (%):"
  doc.fromHTML(ROIP, 230, 100, {
    'width': 500
  });
  var ROIPOp = document.getElementById('ROI').value;
  doc.fromHTML(ROIPOp, 277, 100, {
    'width': 500
  });
  //    ---------------------------------------

  doc.line(20, 260, 190, 260);
  doc.setFontSize(9);
  doc.setFont("Times");
  var authors = doc.splitTextToSize(
    "Subhashree et al., (2020). Forage Aggregation Economics Calculator. Department of Agricultural and Biosystems Engineering, North Dakota State University, Fargo, USA.",
    250)
  doc.text(20, 165, authors);
  var today = new Date();
  var newdat = "Generated on: " + today;
  doc.text(20, 170, newdat);

  doc.save('FEC_Chart.pdf');
}