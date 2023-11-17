<script>
  import BnbLogo from "./BnbLogo.svelte";
</script>

<div class="flex flex-col gap-4 justify-center align-middle place-items-center">
  <h2 class="text-2xl text-yellow-600">
    Total Stake <span class="text-yellow-800">(all time)</span>
  </h2>
  <div
    class="flex flex-col align-middle place-items-center p-4 shadow-sm shadow-yellow-400 rounded-lg"
  >
    <div class="align-middle place-items-center flex text-5xl">
      43,245.234 <div class="flex justify-center align-middle place-items-center">
        <div class="w-16 h-16">
          <BnbLogo />
        </div>
        BNB
      </div>
    </div>
    <!-- <div class="text-2xl text-yellow-600">$ 0.00</div> -->
  </div>
  <a
    href="/stake"
    class="mt-4 w-fit py-2 px-6 rounded-md bg-yellow-500 text-gray-950 text-lg"
    >Stake</a
  >
</div>

<div class="flex flex-col gap-4 justify-center align-middle place-items-center">
  <h2 class="text-2xl text-yellow-600">Total affiliate earnings</h2>
  <div
    class="flex flex-col align-middle place-items-center p-4 shadow-sm shadow-yellow-400 rounded-lg"
  >
    <div class="align-middle place-items-center flex text-5xl">
      5,235.35 <div class="flex justify-center align-middle place-items-center">
        <div class="w-16 h-16">
          <BnbLogo />
        </div>
        BNB
      </div>
    </div>
    <!-- <div class="text-2xl text-yellow-600">$ 0.00</div> -->
  </div>
  <a
    href="/stake"
    class="mt-4 w-fit py-2 px-6 rounded-md bg-yellow-500 text-gray-950 text-lg"
    >+ Invite</a
  >
</div>
