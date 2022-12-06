<script setup>
import { reactive } from "vue";
import { pumpkinModal } from 'pumpkin-vue'

const modalState = reactive({ open: false });
modalState.content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada viverra velit auctor porttitor.";
modalState.title = "A good modal title";
function openModal() {
  modalState.open = !modalState.open;
}

function closeModal(modalOpen) {
  modalState.open = modalOpen;
}
</script>

<template>
  <Story title="Modal" auto-props-disabled>
    <Variant title="Standard">
      <button @click="openModal">pumpkin modal</button>
      <pumpkinModal
        :show-modal="modalState.open"
        @close-modal="closeModal"
        :overlay="true"
        :content-title="modalState.title"
        :content-body="modalState.content"
      ></pumpkinModal>
    </Variant>
  </Story>
</template>

<docs lang="md">
# Props
* showModal
    * type: __Boolean__
    * default: false
    * :white_check_mark: required
* overlay
    * type: __Boolean__
    * default: true
    * :x: not required
* contentBody
    * type: __String__
    * :x: not required
* contentTitle
    * type: __String__
    * :x: not required
* teleport
    * type: __Boolean__
    * default: false
    * :x: not required
    * Teleport modal to <body> tag inside DOM

# Events
closeModal
</docs>