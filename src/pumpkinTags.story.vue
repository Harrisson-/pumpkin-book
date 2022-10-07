<script setup>
import { reactive } from "vue";

import { pumpkinTags } from "../node_modules/pumpkin-vue/pumpkin.js";

const taglist = [
  "liver",
  "pain",
  "pain",
  "right",
  "left",
  "pancreas",
  "kidney",
  "brain",
  "severe_pain",
  "tumour",
  "cancer",
  "MRI",
  "CT",
  "male",
  "female",
  "bone",
  "shoulder",
  "hip",
  "XRAY",
  "knee",
  "spine",
  "head",
  "abdomen",
  "contrast",
  "fragment",
  "detached",
  "injury",
  "torn",
  "rotator",
  "cuff",
  "abdominal",
  "dilatation",
];

var filteredTags = reactive([]);
function searchHashtag(searchText) {
  if (searchText === null) {
    filteredTags.value = [];
  } else {
    filteredTags.value = taglist.filter((elem) => elem.includes(searchText));
  }
}
</script>

<template>
	<Story title="Tags">
		<Variant>
			<pumpkinTags :given-tags="filteredTags.value" @search-word="searchHashtag" />
		</Variant>
	</Story>
</template>

<style scoped>
</style>