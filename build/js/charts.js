const saleChart = document.getElementById("sale-chart");
const trafficChart = document.getElementById("traffic-chart");

// Sale chart
new Chart(saleChart, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        pointStyle: false,
        backgroundColor: "rgba(29,78,216,0.2)",
        borderColor: "rgb(29,78,216)",
        fill: true,
        tension: 0.4,
      },
    ],
  },
  options: {
    maintainAspectRatio:false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
  },
});

// Trafiic chart
new Chart(trafficChart, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Users",
        data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        pointStyle: false,
        backgroundColor: "rgb(37,99,235)",
        fill: true,
        borderRadius: 4,
        maxBarThickness: "8",
        categoryPercentage: 0.4,
      },
      {
        label: "New Users",
        data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        pointStyle: false,
        backgroundColor: "rgb(219,234,254)",
        fill: true,
        borderRadius: 4,
        maxBarThickness: "8",
        categoryPercentage: 0.4,
      },
    ],
  },
  options: {
    maintainAspectRatio:false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
