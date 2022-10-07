<script setup>
import { reactive } from "vue";
import { pumpkinBanner } from '../node_modules/pumpkin-vue/pumpkin.js'

const bannerState = reactive({ open: false });
function openBanner() {
  bannerState.open = !bannerState.open;
}

function closeBanner(modalOpen) {
  bannerState.open = modalOpen;
}
</script>

<template>
  <Story title="banner">
    <Variant>
      <button @click="openBanner">pumpkin banner</button>
      <pumpkinBanner
        :content="'toto'"
        @close-banner="closeBanner"
        :show-banner="bannerState.open"
      ></pumpkinBanner>
    </Variant>
  </Story>
</template>