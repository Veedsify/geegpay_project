import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const options = {
  responsive: true,
  AnimationEffect: "easeOutQuart",
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        color: "#9CA3AF",
        font: {
          size: 12,
        },
      },
    grid: {
          borderDash: [5, 5], // Set to create dashed grid lines
        display: true,
      },
    },
    x: {
      ticks: {
        color: "#9CA3AF",
        font: {
          size: 12,
        },
      },
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {},
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  labels: labels,
  datasets: [
    {
      data: [
        "6.0",
        "21.0",
        "3.0",
        "27.0",
        "10.0",
        "45.0",
        "8.0",
        "24.0",
        "33.0",
        "9.0",
        "30.0",
        "26.0",
      ],
      borderRadius: "100",
      backgroundColor: "#34CAA51A",
      hoverBackgroundColor: "#34CAA5",
    },
  ],
};
export default function SellerTrendsChart() {
  return <Bar options={options} data={data} />;
}
