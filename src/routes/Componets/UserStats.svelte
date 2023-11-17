<script>
  import BnbLogo from "./BnbLogo.svelte";
</script>

<div class="w-full flex flex-col font-mono mt-20">
  <h2 class="text-3xl text-yellow-500">User Wallet Stats</h2>
  <div class="mt-10 grid lg:grid-cols-2 gap-10">
    <div
      class="text-yellow-400 flex flex-col gap-2 shadow-sm shadow-yellow-400 p-4 rounded-lg"
    >
      <h3 class="text-lg">Earned rewards:</h3>
      <h1 class="text-5xl flex align-middle place-items-center">
        0.00 <div class="w-16 aspect-square"><BnbLogo /></div>
         BNB
      </h1>
      <button
        class="py-1 px-4 w-fit text-gray-950 font-bold bg-yellow-500 rounded-md"
        >withdraw</button
      >
    </div>
    <div
      class="text-yellow-400 flex flex-col gap-2 shadow-sm shadow-yellow-400 p-4 rounded-lg"
    >
      <h3 class="text-lg">Wallet Balance:</h3>
      <h1 class="text-5xl flex align-middle place-items-center">
        0.00 <div class="w-16 aspect-square"><BnbLogo /></div>
         BNB
      </h1>
      <button
        class="py-1 px-4 w-fit text-gray-950 font-bold bg-yellow-500 rounded-md"
        >stake</button
      >
    </div>
  </div>
</div>
