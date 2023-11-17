<script>
  // import BnbLogo from "./Componets/BnbLogo.svelte";
  import HomeStats from "./Componets/HomeStats.svelte";
</script>

<div class="h-[50vh] lg:h-[30vh] w-full relative">
  <img
    src="https://static.biswap.org/blog/1685698438517.png"
    alt=""
    class="w-full h-full object-cover"
  />
  <div class="absolute inset-0 bg-yellow-600 bg-opacity-60" />
</div>

<div class="max-w-4xl w-full mx-auto p-4 text-sm text-yellow-500 mt-20">
  <div class="grid lg:grid-cols-2 gap-8 w-full">
    <div class="text-center">
      <h2 class="text-2xl text-yellow-600">
        First ever decentralized Web3 BNB investment firm
      </h2>
      <p class="text-lg leading-relaxed mt-4">
        Invest your BNB and earn hourly return that can be withdrawn at anytime.
        Investment can be cancel at anytime without withdrawal delay or
        whatsoever. Just you and the blockchain.
      </p>
    </div>

    <div class="text-center">
      <h2 class="text-2xl text-yellow-600">
        Join the Affiliate referral program and earn upto 4 level referral
        reward
      </h2>
      <p class="text-lg leading-relaxed mt-4">
        Earn from 4% - 10% when your referral invest. You don't even need to
        have an account to claim this amazing offer. Visit your dashboard to
        copy your affiliate link to start earning amazing return.
      </p>
    </div>
  </div>
  <div class="grid lg:grid-cols-2 gap-8 w-full mt-20">
    <HomeStats />
  </div>

  <div class="flex flex-col mt-20">
    <h2 class="text-3xl text-yellow-600">Partners</h2>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-10">
      <img
        src="https://seeklogo.com/images/B/binance-smart-chain-logo-802A74A1DB-seeklogo.com.png"
        alt=""
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Binance_logo.svg/1024px-Binance_logo.svg.png"
        alt=""
      />
      <img
        src="https://premium-storefronts.s3.amazonaws.com/storefronts/pancakeswap/assets/logo.png"
        alt=""
        class=""
      />
    </div>
  </div>
</div>
