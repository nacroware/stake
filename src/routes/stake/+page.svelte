<script lang="ts">
  import { onMount } from "svelte";
  import Faqs from "../Componets/Faqs.svelte";
  import Plans from "../Componets/Plans.svelte";
  import ReferralSystem from "../Componets/ReferralSystem.svelte";
  import UserStats from "../Componets/UserStats.svelte";
  import Chart from "chart.js/auto";

  onMount(async () => {
    const ctx = document.getElementById("myChart") as HTMLCanvasElement;

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 30, 50, 85, 90],
            borderWidth: 1,
          },
        ],
      },
      options: {
        borderColor: "yellow",
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });
</script>

<div class="max-w-4xl w-full mx-auto p-4 text-sm">
  <UserStats />
  <div class="w-full grid grid-cols-1 lg:grid-cols-4 gap-4 mt-20">
    <Plans />
    <ReferralSystem />
  </div>

  <div class="p-6 mt-20 w-full">
    <canvas id="myChart" />
  </div>
  <Faqs />
</div>
