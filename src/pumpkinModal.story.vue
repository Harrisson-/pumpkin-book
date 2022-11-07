<script setup>
import { reactive } from "vue";
import { pumpkinModal } from 'pumpkin-vue'

const modalState = reactive({ open: false });
modalState.content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada viverra velit auctor porttitor. Mauris ac dictum lectus. Nam blandit consequat venenatis. Proin tempus quam pretium ullamcorper euismod. Donec a ante eu augue ullamcorper pretium. Mauris id nunc posuere, lobortis tellus semper, tincidunt nisi. Nunc in commodo mauris, eget tincidunt turpis. Etiam vitae eros a dolor pretium convallis id et ligula. Aenean et ipsum feugiat dui venenatis finibus sit amet et odio. Vivamus id nunc vitae felis porta mattis. Etiam venenatis, erat vitae venenatis sagittis, erat nunc gravida nunc, facilisis placerat nunc leo laoreet dui. Donec mollis leo non feugiat tempor. Suspendisse vel nulla viverra, facilisis nunc non, sollicitudin ligula.";
modalState.title = "A good modal title";
function openModal() {
  modalState.open = !modalState.open;
}

function closeModal(modalOpen) {
  modalState.open = modalOpen;
}
</script>

<template>
  <Story title="Modal">
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