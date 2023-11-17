<script lang="ts">
  export let plan: any;

  let opened: boolean;
</script>

<div class="shadow-sm shadow-yellow-400 p-4 rounded-lg text-yellow-600 h-fit">
  <h2 class="uppercase text-yellow-800 font-bold">{plan.name}</h2>

  <div class="mt-6">
    <div class="">
      Houly Return: <span>{plan.hourlyReturn}%</span>
    </div>
    <div class="">
      Min Invest: <span class="font-bold">{plan.minInvest} BNB</span>
    </div>

    <div class="mt-4">
      {#if opened}
        <button
          on:click={() => {
            opened = false;
          }}
          class="w-fit px-4 border-2 border-yellow-500 bg-yellow-500 rounded-lg p-1 text-gray-950 hover:bg-yellow-500"
          >close</button
        >
      {:else}
        <button
          on:click={() => {
            opened = true;
          }}
          class="w-fit px-4 border-2 border-yellow-500 rounded-lg p-1 text-yellow-500 hover:text-gray-950 hover:bg-yellow-500"
          >open</button
        >
      {/if}
    </div>

    {#if opened}
      <div class="flex flex-col mt-6">
        <div class="flex flex-col rounded-2xl overflow-hidden">
          <input
            type="text"
            class="p-2 bg-gray-800 text-yellow-500 border-yellow-500 text-2xl text-center"
            placeholder="0.00"
            inputmode="decimal"
          />
          <button class="text-gray-950 p-2 bg-yellow-500 kit-auto-connect">Stake</button>
        </div>
      </div>

      <div class="text-xs mt-4">
        <div class="">
          Daily APR: <span class="text-yellow-400 font-bold"
            >{plan.hourlyReturn * 24}</span
          >
        </div>
        <div class="">
          Duration: <span class="text-yellow-400 font-bold">126 days</span>
        </div>

        <div class="">
          Total Earning: <span class="text-yellow-400 font-bold">126 days</span>
        </div>
      </div>
    {/if}
  </div>
</div>
