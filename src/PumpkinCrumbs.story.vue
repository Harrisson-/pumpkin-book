<script setup>
import { pumpkinCrumb } from 'pumpkin-vue';

const crumbs = [
  {
    name: "home",
    link: "https://www.inrap.fr/",
  },
  {
    name: "actualité",
    link: "https://www.inrap.fr/actualites/recherche",
  },
  {
    name: "fouilles",
    link: "https://www.inrap.fr/chroniques-de-site/recherche",
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
  <Story title="breadCrumb">
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