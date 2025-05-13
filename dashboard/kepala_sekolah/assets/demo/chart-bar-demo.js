
// Set default font & color sesuai Bootstrap
Chart.defaults.global.defaultFontFamily = '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Siswa", "Guru", "Rata-rata Nilai", "Rata-rata Kehadiran"],
    datasets: [{
      label: "Jumlah",
      backgroundColor: ["#007bff", "#ffc107", "#28a745", "#17a2b8"],
      borderColor: ["#007bff", "#ffc107", "#28a745", "#17a2b8"],
      data: [350, 42, 84, 92]
    }],
  },
  options: {
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 4
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 400,
          stepSize: 50
        },
        gridLines: {
          display: true
        }
      }]
    },
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Data Siswa, Guru, Nilai & Kehadiran (2025)'
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          let label = data.labels[tooltipItem.index];
          let value = tooltipItem.yLabel;
          if (label.includes('Nilai') || label.includes('Kehadiran')) {
            return label + ': ' + value + '%';
          }
          return label + ': ' + value;
        }
      }
    }
  }
});