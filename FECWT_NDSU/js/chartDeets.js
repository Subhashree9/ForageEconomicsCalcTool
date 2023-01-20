function chartDeets1() {

  var TPCch = parseInt(document.getElementById("TPC").value.replace('$', '').replace(/\,/g, ''));
  var TBRch = parseInt(document.getElementById("TBR").value.replace('$', '').replace(/\,/g, ''));
  var TCch = parseInt(document.getElementById("TC").value.replace('$', '').replace(/\,/g, ''));
  var NRch = parseInt(document.getElementById("NP").value.replace('$', '').replace(/\,/g, ''));
  var Cropch = document.getElementById("FrgePlot").value;
  var Croptypch = document.getElementById("TypePlot").value;
  var Equiptypch = document.getElementById("EquipPlot").value;
  var TRACch = document.getElementById("TRAC").value;
  var TCACch = document.getElementById("TCAC").value;
  var NPACch = document.getElementById("NPAC").value;
  var BEch = document.getElementById("BE").value;
  var PBch = document.getElementById("PB").value;
  var ROIch = document.getElementById("ROI").value;

  Cropchd.value = Cropch;
  Croptypchd.value = Croptypch;
  Equiptypchd.value = Equiptypch;
  TRACchd.value = TRACch;
  TCACchd.value = TCACch;
  NPACchd.value = NPACch;
  BEchd.value = BEch;
  PBchd.value = PBch;
  ROIchd.value = ROIch;

  var ctx = document.getElementById("myChart1");

  Chart.defaults.global.elements.rectangle.borderWidth = 2;

  Chart.plugins.register({
    beforeDraw: function (chartInstance) {
      var ctx = chartInstance.chart.ctx;
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, chartInstance.chart.width, chartInstance.chart.height);
    }
  });
  if (window.bar != undefined)
    window.bar.destroy();
  window.bar = new Chart(ctx, {
    // var myChart1 = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Total revenue (TR)", "Total cost (TC)", "Net Return (NR)"],
      datasets: [{
        label: '',
        backgroundColor: ["green", "red", "blue"],
        data: [TBRch, TCch, NRch],
      }],
      borderWidth: 10,
    },
    options: {
      tooltips: {
        callbacks: {
          dataset: [1, 2, 3],
          label: function (tooltipItem) {
            return "$" + Number(tooltipItem.yLabel);
          }
        }
      },
      responsive: false,
      title: {
        display: true,
        text: 'Forage economics calculator web tool'
      },
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          barThickness: 80, // number (pixels) or 'flex'
          maxBarThickness: 80 // number (pixels)
        }],
        yAxes: [{
          gridLines: {
            color: "black",
            borderDash: [2, 5],
          },
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: "U.S. Dollars ($)",
          }
        }]
      }
    }
  });

}