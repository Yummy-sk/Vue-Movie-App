<template>
  <Modal v-model="isShow" :close="closeModal">
    <div class="modal">
      <p>Hello</p>
      <button @click="closeModal">close</button>
    </div>
  </Modal>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const isShow = ref(false);

    function showModal() {
      isShow.value = true;
    }

    function closeModal() {
      isShow.value = false;
    }

    return {
      isShow,
      showModal,
      closeModal,
    };
  },
};
</script>
