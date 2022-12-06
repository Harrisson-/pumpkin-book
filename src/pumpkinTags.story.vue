<script setup>
import { reactive } from "vue";

import { pumpkinTags } from 'pumpkin-vue';

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
  <Story title="Tags" auto-props-disabled>
    <Variant title="Standard">
      <pumpkinTags :given-tags="filteredTags.value" @search-word="searchHashtag" id="test-container"/>
    </Variant>
  </Story>
</template>

<style>

#test-container {
  position: absolute;
}
</style>

<docs lang="md">
# Props
* givenTags
    * type: __Array__
    * default: []
    * :white_check_mark: required
* customTag
    * type: __string__
    * default: '#'
</docs>