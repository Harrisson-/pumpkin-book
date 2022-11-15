<script setup>
import { pumpkinSummary } from 'pumpkin-vue';
const sections = ["section1", "section2", "section3", "section4"];
</script>

<template>
	<Story title="Summary">
		<Variant title="standard">
			<main>
				<div class="left-block">
					<pumpkinSummary :headers="sections"></pumpkinSummary>
				</div>
				<div class="summary-parent">
					<div
						v-for="section in sections"
						:key="section"
						class="summary-section"
						v-bind:id="section"
					>
						<h1>{{ section }}</h1>
					</div>
				</div>
				<div class="right-block"></div>
			</main>
		</Variant>
	</Story>
</template>

<style scoped>
main {
	display: flex;
	flex-align: row;
}

.left-block {
	width: 100px;
}

.right-block {
	width: 100%;
}

.summary-section {
  height: 500px;
  width: 80%;
  border: 1px solid black;
}
</style>

<docs lang="md">
# Props
threshold
headersId 
autoBuild
autoBuildLevel
autoBuildDOMId
</docs>