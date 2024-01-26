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
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "#34CAA5");
        gradient.addColorStop(1, "#34caa43e");
        return gradient;
      },
      hoverBackgroundColor: "#34CAA5",
    },
  ],
};
export default function SellerTrendsChart() {
  return <Bar options={options} data={data} />;
}
