<script>
  import { dataStore } from "$lib/stores.js";
  $: data = $dataStore;
</script>

<table>
  <thead>
    <tr>
      {#each Object.keys(data[0]) as key}
        <th>{key}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each data as row}
      <tr>
        {#each Object.values(row) as value}
          <td>{value}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    border-collapse: collapse;
    width: 80%;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  tr:hover {
    background-color: #f5f5f5;
  }

  th {
    background-color: var(--secondary-em);
    color: black;
  }
</style>
