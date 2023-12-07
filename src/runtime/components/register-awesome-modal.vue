<template>
  <template v-for="modal in awesomeModal.modals.value" :key="modal.index">
    <ModalContainer :instance="modal" />
  </template>
</template>
<script lang="ts" setup>
  import './styles.css';
  import {useAwesomeModal} from '../composables/useAwesomeModal';
  import ModalContainer from './modal-container.vue';
  const awesomeModal = useAwesomeModal();
</script>
