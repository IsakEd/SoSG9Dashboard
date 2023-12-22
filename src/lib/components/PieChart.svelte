<script>
  import { Pie } from "svelte-chartjs";
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
  } from "chart.js";

  export let chartLabels;
  export let chartData;
  const data = {
    labels: chartLabels,
    datasets: [
      {
        data: chartData,
        backgroundColor: [
          "#F7464A",
          "#46BFBD",
          "#FDB45C",
          "#949FB1",
          "#4D5360",
          "#AC64AD",
        ].slice(0, chartData.length),
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1",
          "#FFC870",
          "#A8B3C5",
          "#616774",
          "#DA92DB",
        ].slice(0, chartData.length),
      },
    ],
  };

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);
</script>

<Pie {data} options={{ responsive: true }} />
