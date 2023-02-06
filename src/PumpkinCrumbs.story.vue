<script setup>
import { pumpkinCrumb } from 'pumpkin-vue';

const crumbs = [
  {
    name: "home",
    link: "#",
  },
  {
    name: "actualité",
    link: "#",
  },
  {
    name: "fouilles",
    link: "#",
  },
];

const longCrumbs = [
  {
    name: "home",
    link: "#",
  },
  {
    name: "actualité",
    link: "#",
  },
  {
    name: "tata",
    link: "#",
  },
  {
    name: "toto",
    link: "#",
  },
  {
    name: "titi",
    link: "#",
  },
  {
    name: "fouilles",
    link: "#",
  },
];
</script>

<template>
  <Story title="breadCrumb" auto-props-disabled>
    <Variant title="Long list">
      <pumpkinCrumb :crumbs="longCrumbs" :shrink="true">
      </pumpkinCrumb>
    </Variant>
    <Variant title="Short list">
      <pumpkinCrumb :crumbs="crumbs">
      </pumpkinCrumb>
    </Variant>
  </Story>
</template>

<docs lang="md">
# Props
* crumbs
    * type: __Array__
    * :x: not required 
* shrink
    * type: __Boolean__
    * default: false
    * :x: not required 
* shrink_number
    * type: __Number__
    * default: 2
    * :x: not required 
* color
    * type: __String__
    * default: orange
    * :x: not required 
</docs>