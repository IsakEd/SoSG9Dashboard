<script>
  import {
    lifePriority,
    operationalCostPriority,
    initialCostPriority,
    rescueTimePriority,
  } from "$lib/stores.js";
</script>

<div id="main" class="content-box">
  <div>
    <input
      type="range"
      name="life"
      id="life"
      min="0"
      max="3"
      bind:value={$lifePriority}
    />
    <label for="life">Life</label>
  </div>
  <div>
    <input
      type="range"
      name="initial_cost"
      id="init"
      min="0"
      max="3"
      bind:value={$initialCostPriority}
    />
    <label for="init">Initial Cost</label>
  </div>
  <div>
    <input
      type="range"
      name="rescue_time"
      id="resc"
      min="0"
      max="3"
      bind:value={$rescueTimePriority}
    />
    <label for="resc">Rescue Time</label>
  </div>
  <div>
    <input
      type="range"
      name="operational_cost"
      id="opcost"
      min="0"
      max="3"
      bind:value={$operationalCostPriority}
    />
    <label for="opcost">Operational Cost</label>
  </div>
</div>

<style>
  input[type="range"] {
    accent-color: var(--accent-color);
  }
  #main {
    margin-left: 1em;
  }
</style>
