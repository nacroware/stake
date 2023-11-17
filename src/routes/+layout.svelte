<script lang="ts">
  import { writable, type Writable } from "svelte/store";
  import "../app.css";
  import { onMount, setContext } from "svelte";
  // import { Web3 } from "web3";
  import {
    defaultEvmStores as emv,
    web3,
    selectedAccount,
    chainId,
  } from "svelte-web3";
  import Footer from "./Componets/Footer.svelte";
  import Navbar from "./Componets/Navbar.svelte";

  const provider: Writable<any> = writable();
  setContext("provider", provider);
  onMount(async () => {
    // const w3 = new Web3("https://bsc-dataseed.binance.org");
    // const contract = new w3.eth.Contract([], '')
    // provider.set(w3);
  });


  

  // async function signMsg() {
  //   const sig = await $web3.eth.signTransaction({
  //     from: $selectedAccount as string,
  //     to: "0xD39548f9056De2795Af386056e76F9a461201aaF",
  //     value: $web3.utils.toWei("0.1", "ether"),
  //     gas: 21000,
  //     gasPrice: $web3.utils.toWei("30", "gwei"),
  //   });
  //   console.log(sig);
  // }

  $: isConnected =
    [null, undefined].filter((i) => $selectedAccount !== i).length == 2;

  async function connectWallet() {
    try {
      await emv.setProvider();
    } catch (e) {}
  }
</script>

<Navbar bind:isConnected on:click={connectWallet} />

<slot />
<Footer />

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.950);
  }
</style>
