// Usage: https://www.chartjs.org/ (Chart.js 4 — no Chart.defaults.global)
import Chart from "chart.js/auto";

Chart.defaults.color = window.theme["gray-600"];
Chart.defaults.font.family = "'Inter', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif";

window.Chart = Chart;
