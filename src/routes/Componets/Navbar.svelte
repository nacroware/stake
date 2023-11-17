<script lang="ts">
  import BnbLogo from "./BnbLogo.svelte";
  import StakeLogo from "./StakeLogo.svelte";
  export let isConnected: boolean;
</script>

<div
  class="sticky z-50 font-mono left-0 w-full top-0 bg-yellow-500 bg-opacity-90 backdrop-blur-sm shadow-sm shadow-gray-500"
>
  <div class="max-w-4xl w-full mx-auto flex justify-between p-2">
    <a href="/"><StakeLogo /></a>

    <ul class="flex justify-end flex-1 align-middle place-items-center gap-4">
      <span class="text-gray-950 flex gap-2">
        <div class="w-6 h-6"><BnbLogo /></div>
        $278</span
      >
      {#if isConnected}
        <button class="bg-green-500 text-white p-1 px-4 rounded-lg" disabled
          >connected</button
        >
      {:else}
        <button
          class="text-yellow-500 bg-gray-950 font-bold p-1 px-4 rounded-lg kit-auto-connect"
          >connect</button
        >
      {/if}
    </ul>
  </div>
</div>
