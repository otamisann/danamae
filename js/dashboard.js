(function($) {
  'use strict';

  if ($(".dashboard-progress-1").length) {
    $('.dashboard-progress-1').circleProgress({
      value: 0.95,
      size: 125,
      thickness: 5,
      startAngle: 80,
      fill: {
        gradient: ["#FF773A", "#FE2267"]
      }
    });
  }

  if ($(".dashboard-progress-2").length) {
    $('.dashboard-progress-2').circleProgress({
      value: 0.50,
      size: 125,
      thickness: 5,
      startAngle: 80,
      fill: {
        gradient: ["#AFED70", "#83F7CC"]
      }
    });
  }

  if ($(".dashboard-progress-3").length) {
    $('.dashboard-progress-3').circleProgress({
      value: 0.35,
      size: 125,
      thickness: 5,
      startAngle: 80,
      fill: {
        gradient: ["#E754B2", "#C000AD"]
      }
    });
  }

  if ($(".dashboard-progress-4").length) {
    $('.dashboard-progress-4').circleProgress({
      value: 0.25,
      size: 125,
      thickness: 5,
      startAngle: -80,
      fill: {
        gradient: ["#4696FA", "#5F00E1"]
      }
    });
  }

  if ($("#dashboard-line-chart-1").length) {
    var d1 = [];
    var options = {};
    $.plot($("#dashboard-line-chart-1"), [{
        data: d1 = [
          [0, 4],
          [1, 3],
          [2, 4],
          [3, 2],
          [4, 6],
          [5, 5]
        ],
        lines: {
          show: true,
          fill: 0.18
        },
        label: 'Product A',
        stack: false,
        color: '#ac6bec'
      }],
      options = {
        series: {
          shadowSize: 0,
          lines: {
            show: true,
          },
        },
        grid: false,
        xaxis: false,
        yaxis: false,
        legend: false
      });
  }

  if ($("#dashboard-line-chart-2").length) {
    var d1 = [];
    var options = {};
    $.plot($("#dashboard-line-chart-2"), [{
        data: d1 = [
          [0, 5],
          [1, 6],
          [2, 3],
          [3, 4],
          [4, 3],
          [5, 4]
        ],
        lines: {
          show: true,
          fill: 0.18
        },
        label: 'Product A',
        stack: false,
        color: 'rgb(0,168,255)'
      }],
      options = {
        series: {
          shadowSize: 0,
          lines: {
            show: true,
          },
        },
        grid: false,
        xaxis: false,
        yaxis: false,
        legend: false
      });
  }

  if ($('#visits-map').length) {
    $('#visits-map').vectorMap({
      map: 'world_mill_en',
      panOnDrag: true,
      backgroundColor: '#f7f7f7',
      focusOn: {
        x: 0.5,
        y: 0.5,
        scale: 1,
        animate: true
      },
      series: {
        regions: [{
          scale: ['#bfbfbf', '#a29d9d'],
          normalizeFunction: 'polynomial',
          values: {
            "AF": 16.63,
            "AL": 11.58,
            "DZ": 158.97,
            "AO": 85.81,
            "AG": 1.1,
            "AR": 351.02,
            "AM": 8.83,
            "AU": 1219.72,
            "AT": 366.26,
            "AZ": 52.17,
            "BS": 7.54,
            "BH": 21.73,
            "BD": 105.4,
            "BB": 3.96,
            "BY": 52.89,
            "BE": 461.33,
            "BZ": 1.43,
            "BJ": 6.49,
            "BT": 1.4,
            "BO": 19.18,
            "BA": 16.2,
            "BW": 12.5,
            "BR": 2023.53,
            "BN": 11.96,
            "BG": 44.84,
            "BF": 8.67,
            "BI": 1.47,
            "KH": 11.36,
            "CM": 21.88,
            "CA": 1563.66,
            "CV": 1.57,
            "CF": 2.11,
            "TD": 7.59,
            "CL": 199.18,
            "CN": 5745.13,
            "CO": 283.11,
            "KM": 0.56,
            "CD": 12.6,
            "CG": 11.88,
            "CR": 35.02,
            "CI": 22.38,
            "HR": 59.92,
            "CY": 22.75,
            "CZ": 195.23,
            "DK": 304.56,
            "DJ": 1.14,
            "DM": 0.38,
            "DO": 50.87,
            "EC": 61.49,
            "EG": 216.83,
            "SV": 21.8,
            "GQ": 14.55,
            "ER": 2.25,
            "EE": 19.22,
            "ET": 30.94,
            "FJ": 3.15,
            "FI": 231.98,
            "FR": 2555.44,
            "GA": 12.56,
            "GM": 1.04,
            "GE": 11.23,
            "DE": 3305.9,
            "GH": 18.06,
            "GR": 305.01,
            "GD": 0.65,
            "GT": 40.77,
            "GN": 4.34,
            "GW": 0.83,
            "GY": 2.2,
            "HT": 6.5,
            "HN": 15.34,
            "HK": 226.49,
            "HU": 132.28,
            "IS": 12.77,
            "IN": 1430.02,
            "ID": 695.06,
            "IR": 337.9,
            "IQ": 84.14,
            "IE": 204.14,
            "IL": 201.25,
            "IT": 2036.69,
            "JM": 13.74,
            "JP": 5390.9,
            "JO": 27.13,
            "KZ": 129.76,
            "KE": 32.42,
            "KI": 0.15,
            "KR": 986.26,
            "KW": 117.32,
            "KG": 4.44,
            "LA": 6.34,
            "LV": 23.39,
            "LB": 39.15,
            "LS": 1.8,
            "LR": 0.98,
            "LY": 77.91,
            "LT": 35.73,
            "LU": 52.43,
            "MK": 9.58,
            "MG": 8.33,
            "MW": 5.04,
            "MY": 218.95,
            "MV": 1.43,
            "ML": 9.08,
            "MT": 7.8,
            "MR": 3.49,
            "MU": 9.43,
            "MX": 1004.04,
            "MD": 5.36,
            "MN": 5.81,
            "ME": 3.88,
            "MA": 91.7,
            "MZ": 10.21,
            "MM": 35.65,
            "NA": 11.45,
            "NP": 15.11,
            "NL": 770.31,
            "NZ": 138,
            "NI": 6.38,
            "NE": 5.6,
            "NG": 206.66,
            "NO": 413.51,
            "OM": 53.78,
            "PK": 174.79,
            "PA": 27.2,
            "PG": 8.81,
            "PY": 17.17,
            "PE": 153.55,
            "PH": 189.06,
            "PL": 438.88,
            "PT": 223.7,
            "QA": 126.52,
            "RO": 158.39,
            "RU": 1476.91,
            "RW": 5.69,
            "WS": 0.55,
            "ST": 0.19,
            "SA": 434.44,
            "SN": 12.66,
            "RS": 38.92,
            "SC": 0.92,
            "SL": 1.9,
            "SG": 217.38,
            "SK": 86.26,
            "SI": 46.44,
            "SB": 0.67,
            "ZA": 354.41,
            "ES": 1374.78,
            "LK": 48.24,
            "KN": 0.56,
            "LC": 1,
            "VC": 0.58,
            "SD": 65.93,
            "SR": 3.3,
            "SZ": 3.17,
            "SE": 444.59,
            "CH": 522.44,
            "SY": 59.63,
            "TW": 426.98,
            "TJ": 5.58,
            "TZ": 22.43,
            "TH": 312.61,
            "TL": 0.62,
            "TG": 3.07,
            "TO": 0.3,
            "TT": 21.2,
            "TN": 43.86,
            "TR": 729.05,
            "TM": 0,
            "UG": 17.12,
            "UA": 136.56,
            "AE": 239.65,
            "GB": 2258.57,
            "US": 14624.18,
            "UY": 40.71,
            "UZ": 37.72,
            "VU": 0.72,
            "VE": 285.21,
            "VN": 101.99,
            "YE": 30.02,
            "ZM": 15.69,
            "ZW": 5.57
          }
        }]
      }
    });
  }

  if ($("#dash-stats-pie-chart").length) {
    var data = [{
        data: 20,
        color: '#00D963',
        label: 'Linda'
      },
      {
        data: 20,
        color: '#3B8DFF',
        label: 'John'
      },
      {
        data: 30,
        color: '#BC00EE',
        label: 'Margaret'
      }
    ];
    $.plot("#dash-stats-pie-chart", data, {
      series: {
        pie: {
          show: true,
          radius: 1,
          label: {
            show: true,
            radius: 3 / 4,
            formatter: labelFormatter,
            background: {
              opacity: 0.5
            }
          }
        }
      },
      legend: {
        show: false
      }
    });

    function labelFormatter(label, series) {
      return '<div class="labelstyles">' + label + "<br/>" + Math.round(series.percent) + "%</div>";
    }
  }

  if ($("#pie-chart").length) {
    var data = {
      labels: ['Mail Order', 'Online Order', 'In-store Order'],
      series: [20, 25, 20]
    };

    var options = {
      chartPadding: 0,
      labelOffset: 50,
      labelDirection: 'explode',
      labelInterpolationFnc: function(value) {
        return value;
      }
    };

    new Chartist.Pie('#pie-chart', data, options);
  }

  if ($("#sale-gage-1").length) {
    var g1 = new JustGage({
      id: "sale-gage-1",
      value: getRandomInt(0, 100),
      min: 0,
      max: 100,
      customSectors: [{
        color: "#FF0026",
        lo: 50,
        hi: 100
      }, {
        color: "#3B8DFF",
        lo: 0,
        hi: 50
      }]
    });


    setInterval(function() {
      g1.refresh(getRandomInt(50, 100));
    }, 2500);
  }

  if ($("#sale-gage-2").length) {
    var g1 = new JustGage({
      id: "sale-gage-2",
      value: getRandomInt(0, 100),
      min: 0,
      max: 100,
      customSectors: [{
        color: "#FF0026",
        lo: 50,
        hi: 100
      }, {
        color: "#3B8DFF",
        lo: 0,
        hi: 50
      }]
    });


    setInterval(function() {
      g1.refresh(getRandomInt(50, 100));
    }, 2500);
  }

  if ($("#areachart-multi").length) {
    var multiAreaData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [{
          label: 'Visits',
          data: [8, 11, 13, 15, 12, 13, 16, 15, 13, 19, 11, 14],
          borderColor: ['rgba(65,172,251,1)'],
          backgroundColor: ['rgba(65,172,251,0.5)'],
          borderWidth: 1,
          fill: true
        },
        {
          label: 'Pages/Visit',
          data: [7, 17, 12, 16, 14, 18, 16, 12, 15, 11, 13, 9],
          borderColor: ['rgba(144,140,226,1)'],
          backgroundColor: ['rgba(144,140,226,0.5)'],
          borderWidth: 1,
          fill: true
        }
      ]
    };

    var multiAreaOptions = {
      animation: {
        easing: "easeInOutBack"
      },
      elements: {
        line: {
          tension: 0
        }
      },
      legend: {
        position: "top"
      },
      scales: {
        yAxes: [{
          ticks: {
            fontColor: "rgba(0,0,0,0.5)",
            beginAtZero: true,
            maxTicksLimit: 7,
            padding: 20
          },
          gridLines: {
            drawTicks: false,
            display: false,
            color: "rgba(255,255,255,0)"
          }

        }],
        xAxes: [{
          gridLines: {
            lineWidth: 0,
            color: "rgba(255,255,255,0)"
          },
          ticks: {
            padding: 20,
            fontColor: "rgba(0,0,0,0.5)",
          }
        }]
      }
    }
    var multiAreaCanvas = $("#areachart-multi").get(0).getContext("2d");
    var multiAreaChart = new Chart(multiAreaCanvas, {
      type: 'line',
      data: multiAreaData,
      options: multiAreaOptions,
      maintainAspectRatio: false,
    });
  }

})(jQuery);