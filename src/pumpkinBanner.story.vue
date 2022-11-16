<script setup>
import { logEvent } from "histoire/client";
import { reactive } from "vue";
import { pumpkinBanner } from "pumpkin-vue";

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
        @close-banner="logEvent('close banner', closeBanner())"
        :show-banner="bannerState.open"
      ></pumpkinBanner>
    </Variant>
    <Variant title="custom Slot">
      <button @click="openBanner">pumpkin banner</button>
      <pumpkinBanner
        @close-banner="logEvent('close banner', closeBanner())"
        :show-banner="bannerState.open"
      >
        <template #content>
          <p>try to use slot for banner</p>
        </template>
      </pumpkinBanner>
    </Variant>
  </Story>
</template>

<docs lang="md">
# Props
* showBanner
    * type: __Boolean__
    * default: false
    * :white_check_mark: required 
* content
    * type: __String__
    * :x: not required

# Events
close-banner
</docs>