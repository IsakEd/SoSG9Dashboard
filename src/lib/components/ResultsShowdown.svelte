<script>
  export let bestSoS;
</script>

<div id="vehicles">
  <div class="content-box">
    <h1>HEL</h1>
    <h2>{bestSoS["HELI"]}</h2>
  </div>
  <div class="content-box">
    <h1>FRI</h1>
    <h2>{bestSoS["FRI"]}</h2>
  </div>
  <div class="content-box">
    <h1>CUT</h1>
    <h2>{bestSoS["CUT"]}</h2>
  </div>
  <div class="content-box">
    <h1>UAV</h1>
    <h2>{bestSoS["UAV"]}</h2>
  </div>
</div>

<style>
  #vehicles {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
  }
</style>
