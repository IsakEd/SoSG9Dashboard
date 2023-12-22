<script>
  import Header from "../lib/components/Header.svelte";
  import Loss from "../lib/components/Loss.svelte";
  import PriorityInput from "../lib/components/PriorityInput.svelte";
  import SoSTable from "../lib/components/SoSTable.svelte";
  let showTable = false;
</script>

<Header />
<button on:click={() => (showTable = !showTable)}>
  {#if showTable}
    Hide Table
  {:else}
    Show Table
  {/if}
</button>
{#if showTable}
  <SoSTable />
{/if}
<PriorityInput />
<Loss />
