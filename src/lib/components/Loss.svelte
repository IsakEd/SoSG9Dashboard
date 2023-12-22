<script>
  import {
    dataStore,
    lifePriority,
    initialCostPriority,
    rescueTimePriority,
    operationalCostPriority,
  } from "$lib/stores.js";
  import PieChart from "./PieChart.svelte";
  import ResultsShowdown from "./ResultsShowdown.svelte";
  import { costs } from "$lib/data.js";

  let calculateLosses = (life, ic, rt, opcost, dat) => {
    return dat.map((d) => {
      let loss = 0;
      loss += (life * (d["Failure Rate"] - 0.22)) / (0.67 - 0.22);
      loss +=
        (ic * (d["Total aqcuicisition cost [M$]"] - 62.6)) / (4904.5 - 62.6);
      loss += (rt * (d["Average search time [h]"] - 3.07)) / (5.71 - 3.07);
      loss +=
        (opcost * (d["Avergage operating cost [k$]"] - 229251.3)) /
        (229251.3 - 1298279.8);

      return loss;
    });
  };

  let formatter = Intl.NumberFormat("en", { notation: "compact" });

  const vehicleCosts = structuredClone(costs);

  $: loss = calculateLosses(
    $lifePriority,
    $initialCostPriority,
    $rescueTimePriority,
    $operationalCostPriority,
    $dataStore
  );
  // get the index of the minimum loss
  $: bestSoS = $dataStore[loss.indexOf(Math.min(...loss))];
  //$: console.log(bestSoS);

  $: initCostChartData = [
    vehicleCosts["FRI"]["init_cost_MUSD"] * bestSoS["FRI"],
    vehicleCosts["CUT"]["init_cost_MUSD"] * bestSoS["CUT"],
    vehicleCosts["UAV"]["init_cost_MUSD"] * bestSoS["UAV"],
    vehicleCosts["HEL"]["init_cost_MUSD"] * bestSoS["HELI"],
  ];
  $: opCostChartData = [
    vehicleCosts["FRI"]["operating_cost_kUSD/h"] * bestSoS["FRI"],
    vehicleCosts["CUT"]["operating_cost_kUSD/h"] * bestSoS["CUT"],
    vehicleCosts["UAV"]["operating_cost_kUSD/h"] * bestSoS["UAV"],
    vehicleCosts["HEL"]["operating_cost_kUSD/h"] * bestSoS["HELI"],
  ];
  //$: console.log(chartData);
</script>

<div>
  <ResultsShowdown {bestSoS} />
  <div class="chart-container">
    <h2>
      Aqcuisition Cost: ${formatter.format(
        bestSoS["Total aqcuicisition cost [M$]"] * 1000000
      )}
    </h2>
    <h2>
      Predicted Operational cost: ${formatter.format(
        bestSoS["Avergage operating cost [k$]"] * 1000
      )}
    </h2>
  </div>
  <div id="charts" class="chart-container">
    <div class="chart">
      {#key initCostChartData}
        <PieChart
          chartLabels={["Frigates", "Cutters", "UAVs", "Helicopters"]}
          chartData={initCostChartData}
        />
      {/key}
    </div>
    <div class="chart">
      {#key opCostChartData}
        <PieChart
          chartLabels={["Frigates", "Cutters", "UAVs", "Helicopters"]}
          chartData={opCostChartData}
        />
      {/key}
    </div>
    <div class="chart"></div>
  </div>
</div>

<style>
  .chart-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }
</style>
