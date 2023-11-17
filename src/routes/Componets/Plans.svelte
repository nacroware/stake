<script lang="ts">
  import Plan from "./Plan.svelte";

  interface Plan {
    id: number;
    name: string;
    minInvest: number;
    hourlyReturn: number;
  }
  const plans: Plan[] = [
    {
      id: 1,
      name: "Hot Hand",
      hourlyReturn: 0.1,
      minInvest: 0.05,
    },
    {
      id: 2,
      name: "Gold Hand",
      hourlyReturn: 0.3,
      minInvest: 0.5,
    },
    {
      id: 3,
      name: "Diamond Hand",
      hourlyReturn: 1,
      minInvest: 5,
    },
  ];
</script>

<div
  class="flex-1 flex flex-col gap-10 font-mono col-start-1 col-end-5 lg:col-end-4"
>
  <h2 class="text-3xl text-yellow-500">Plans</h2>
  <div class="w-full flex flex-col lg:grid grid-cols-1 lg:grid-cols-3 gap-4">
    {#each plans as plan (plan.id)}
      <Plan {plan} />
    {/each}
  </div>
</div>
