<script lang="ts">
  import Minus from "./Minus.svelte";
  import Plus from "./Plus.svelte";

  export let faq: string;
  export let expand: boolean = false;
</script>

<div class="overflow-hidden rounded-md shadow-sm shadow-yellow-500">
  <button
    class={"p-2 w-full flex justify-between " +
      (expand ? "bg-yellow-500 text-gray-950" : "text-yellow-600")}
    on:click
  >
    <h3 class="lg:text-lg align-middle place-items-center">
      {faq}
    </h3>
    {#if expand}
      <Minus />
    {:else}
      <Plus />
    {/if}
  </button>

  {#if expand}
    <p class="p-2 leading-relaxed text-yellow-700">
      message <a href="https://t.me/alice_mod" target="_blank" class="text-blue-400">Telegram Support</a>
      <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
      facilis cumque vitae repudiandae facere, porro eaque, animi, atque beatae
      alias numquam quos? Quisquam veritatis delectus excepturi fugiat ullam at
      modi. -->
    </p>
  {/if}
</div>
