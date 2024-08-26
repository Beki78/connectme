import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: [
      "TikTok",
      "Instagram",
      "Youtube",
      "LinkenIn",
      "Portfolio",
      "Pinterest",
    ],
    datasets: [
      {
        label: "Views",
        data: [122, 191, 30, 122, 191, 30],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFC256",
          "#FF6384",
          "#38A2EB",
          "#FFCE51",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF6384",
          "#38A2EB",
          "#FFCE51",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ": " + tooltipItem.raw + "";
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "50%", margin: "0 auto"  }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
