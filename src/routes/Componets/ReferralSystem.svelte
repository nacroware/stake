<script>
  import { page } from "$app/stores";
  import BnbLogo from "./BnbLogo.svelte";
</script>

<div
  class="col-start-1 lg:col-start-4 h-fit col-end-5 shadow-sm shadow-yellow-600 p-4 rounded-lg"
>
  <h2 class="uppercase text-yellow-500">Referral System</h2>

  <div class="w-full mt-4">
    <p class="text-yellow-600 italic">
      We offer a 4-level referral program, use your referral link below to start
      earning now.
    </p>
    <ul class="text-yellow-500 font-bold w-full mt-4 font-mono">
      <li class="flex justify-between">
        level 1: <span class="text-green-500">10%</span>
      </li>
      <li class="flex justify-between">
        level 2: <span class="text-green-500">8%</span>
      </li>
      <li class="flex justify-between">
        level 3: <span class="text-green-500">6%</span>
      </li>
      <li class="flex justify-between">
        level 4: <span class="text-green-500">4%</span>
      </li>
    </ul>

    <div class="mt-4 font-mono rounded-md overflow-hidden">
      <input
        type="text"
        value="{$page.url}"
        class="text-yellow-600 p-2 bg-gray-800 w-full"
      />
      <button class="bg-yellow-500 text-gray-950 p-1 w-full"
        >copy referral</button
      >
    </div>
    <div class="mt-4 text-yellow-500 text-xs">
      <div class="flex justify-between">
        Referred users: <span class="font-bold text-yellow-400">0</span>
      </div>
      <div class="flex justify-between">
        Commission earned:
        <span
          class="font-bold gap-2 text-yellow-400 flex justify-center align-middle place-items-center"
          >0.00
          <div class="flex justify-center align-middle place-items-center">
            <div class="w-6 h-6">
              <BnbLogo />
            </div>
            BNB
          </div></span
        >
      </div>
    </div>
  </div>
</div>
