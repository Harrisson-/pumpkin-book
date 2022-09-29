<script>
import pumpkinBanner from "pumpkin-vue";
export async function configureApp(app) {
	//
}

const bannerState = reactive({ open: false });
function openBanner() {
  bannerState.open = !bannerState.open;
}

function closeBanner(modalOpen) {
  bannerState.open = modalOpen;
}
</script>

<script setup>
const { component } = defineProps({
	component: Object,
});
</script>

<template>
	<component :is="component" />
	<button @click="openBanner">pumpkin banner</button>
	<pumpkinBanner
		:content="'toto'"
		@close-banner="closeBanner"
		:show-banner="bannerState.open"
	></pumpkinBanner>
</template>
