<script setup>
import { reactive } from "vue";
import { pumpkinBanner } from '../node_modules/pumpkin-vue/index.js'

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
    <Variant title="Standard">
      <button @click="openBanner">pumpkin banner</button>
      <pumpkinBanner
        :content="'toto'"
        @close-banner="closeBanner"
        :show-banner="bannerState.open"
      ></pumpkinBanner>
    </Variant>
    <Variant title="custom Slot">
      <button @click="openBanner">pumpkin banner</button>
      <pumpkinBanner
        @close-banner="closeBanner"
        :show-banner="bannerState.open"
      >
        <template #content>
          <p>try to use slot for banner</p>
        </template>
      </pumpkinBanner>
    </Variant>
  </Story>
</template>