<script setup>
import { pumpkinIntersectionSolo } from 'pumpkin-vue';

const list = [
  { name: "liver" },
  { name: "pain" },
  { name: "pain" },
  { name: "right" },
  { name: "left" },
  { name: "pancreas" },
  { name: "kidney" },
  { name: "brain" },
  { name: "severe_pain" },
  { name: "tumour" },
  { name: "cancer" },
  { name: "MRI" },
  { name: "CT" },
  { name: "male" },
  { name: "female" },
  { name: "bone" },
  { name: "shoulder" },
  { name: "hip" },
  { name: "XRAY" },
  { name: "knee" },
  { name: "spine" },
  { name: "head" },
  { name: "abdomen" },
  { name: "contrast" },
  { name: "fragment" },
  { name: "detached" },
  { name: "injury" },
  { name: "torn" },
  { name: "rotator" },
  { name: "cuff" },
  { name: "abdominal" },
  { name: "dilatation" },
];
</script>

<template>
  <Story title="intersetion solo">
    <Variant title="Standard">
      <div class="solo-wrapper">
        <intersectionSolo
          target="item-solo"
          transitionName="brighten"
          v-for="(item, index) in list"
          :key="item.name"
          :unique-key="index"
          :animationDelay="200"
          :parent="'solo-wrapper'"
        >
          <div class="item-solo">
            {{ item.name }}
          </div>
        </intersectionSolo>
      </div>
    </Variant>
  </Story>
</template>

<style scoped>
.item {
  margin-top: 10px;
}

.item-solo {
  margin-top: 10px;
}

.solo-wrapper {
  overflow-y: scroll;
  height: 200px;
}
</style>

<docs lang="md">
# Props
* threshold
    * type: __Number__
    * default: 1.0
    * :x: not required 
    * must be between 0.0 and 1.0 | can be an array
* animationDelay
    * type: __Number__
    * default: 0
    * :x: not required 
    * Delay before animation trigger
* uniqueKey
    * type: __Number__    
    * :white_check_mark: required 
    * use to create a unique scope for each intersectionSolo component
* parent
    * type: __String__
    * default: null
    * :x: not required 
    * if don't provide, it will use window viewport as parent
* transitionName
    * type: __String__
    * :x: not required 
    * can be "slide-left", "display-left", "flip-left" or "brighten"
</docs>