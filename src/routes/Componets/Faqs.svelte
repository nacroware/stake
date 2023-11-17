<script lang="ts">
  import Faq from "./Faq.svelte";

  const faqs: string[] = [
    "How to invest",
    "How does the referral process work?",
    "How long to get my investment pay?",
    "Can I invest multiple times?",
    "When can I end my investment?",
    "I didn't invest, can I get the referral reward?",
  ];

  let selected: string;
</script>

<div class="w-full flex flex-col font-mono mt-20">
  <h2 class="text-3xl text-yellow-500">Faqs</h2>

  <div class="flex flex-col gap-3 mt-10">
    {#each faqs as faq, _}
      <Faq
        {faq}
        on:click={() => {
          if (selected == faq) {
            selected = "";
            return;
          }
          selected = faq;
        }}
        expand={faq == selected}
      />
    {/each}
  </div>
</div>
