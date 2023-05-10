var options1 = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    series: [18],
    colors: ["#87D4F9"],
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        track: {
          background: '#333',
          startAngle: -135,
          endAngle: 135,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "30px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: ["#E68C20"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "butt"
    },
    labels: ["Progress"]
  };
  
  new ApexCharts(document.querySelector("#chart1"), options1).render();


  var options2 = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    series: [25],
    colors: ["#87D4F9"],
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        track: {
          background: '#333',
          startAngle: -135,
          endAngle: 135,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "30px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: ["#E68C20"],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "butt"
    },
    labels: ["Progress"]
  };
  
  new ApexCharts(document.querySelector("#chart2"), options2).render();