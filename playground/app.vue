<template>
  <div class="bg-blue-50 w-screen h-screen flex">
    <div class="m-auto bg-white rounded-lg flex flex-col w-[500px] p-3">
      <div class="mx-auto text-xl">Nuxt-Windows</div>
      <div class="grid grid-cols-3 gap-y-3 items-center m-auto">
        <div class="justify-center">Animation:</div>
        <div class="col-span-2">
          <select
            v-model="animation"
            :disabled="awesomeModal.has(modalName)"
            class="w-full p-2 bg-gray-100">
            <option :value="ModalAnimationType.slideFromBottom">
              from-bottom
            </option>
            <option :value="ModalAnimationType.slideFromTop">from-top</option>
            <option :value="ModalAnimationType.slideFromLeft">from-left</option>
            <option :value="ModalAnimationType.slideFromRight">
              from-right
            </option>
            <option :value="ModalAnimationType.fadeInAndOut">fade</option>
          </select>
        </div>
        <div>Position:</div>
        <div class="col-span-2">
          <select
            v-model="position"
            :disabled="awesomeModal.has(modalName)"
            class="w-full p-2 bg-gray-100">
            <option :value="ModalPosition.center">center</option>
            <option :value="ModalPosition.top">top</option>
            <option :value="ModalPosition.bottom">bottom</option>
            <option :value="ModalPosition.leftTop">leftTop</option>
            <option :value="ModalPosition.left">left</option>
            <option :value="ModalPosition.leftBottom">leftBottom</option>
            <option :value="ModalPosition.right">right</option>
            <option :value="ModalPosition.rightTop">rightTop</option>
            <option :value="ModalPosition.rightBottom">rightBottom</option>
          </select>
        </div>
        <div>Show backdrop:</div>
        <div class="col-span-2">
          <select
            v-model="showBackdrop"
            :disabled="awesomeModal.has(modalName)"
            class="w-full p-2 bg-gray-100">
            <option :value="true">Yes</option>
            <option :value="false">No</option>
          </select>
        </div>
        <div>Disable Backdrop:</div>
        <div class="col-span-2">
          <select
            v-model="disableBackdrop"
            :disabled="awesomeModal.has(modalName)"
            class="w-full p-2 bg-gray-100">
            <option :value="true">Yes</option>
            <option :value="false">No</option>
          </select>
        </div>
        <div>Auto Destroy:</div>
        <div class="col-span-2">
          <select
            v-model="autoDestroy"
            :disabled="awesomeModal.has(modalName)"
            class="w-full p-2 bg-gray-100">
            <option :value="true">Yes</option>
            <option :value="false">No</option>
          </select>
        </div>
        <div>Auto Show:</div>
        <div class="col-span-2">
          <select
            v-model="autoShow"
            :disabled="awesomeModal.has(modalName)"
            class="w-full p-2 bg-gray-100">
            <option :value="true">Yes</option>
            <option :value="false">No</option>
          </select>
        </div>
        <div v-if="!awesomeModal.has(modalName)" class="p-3 col-span-3">
          <button
            class="bg-gray-200 w-full p-2 rounded-lg shadow-md"
            @click="openModal">
            Open
          </button>
        </div>
        <div
          v-if="
            awesomeModal.has(modalName) && !awesomeModal.isVisible(modalName)
          "
          class="p-3 col-span-3">
          <button
            class="bg-gray-200 w-full p-2 rounded-lg shadow-md"
            @click="showWindow">
            Show
          </button>
        </div>
        <div
          v-if="
            awesomeModal.has(modalName) && awesomeModal.isVisible(modalName)
          "
          class="p-3 col-span-3">
          <button
            class="bg-gray-200 w-full p-2 rounded-lg shadow-md"
            @click="hideWindow">
            Close
          </button>
        </div>
        <div
          v-if="
            awesomeModal.has(modalName) &&
            !awesomeModal.isAutoDestroy(modalName)
          "
          class="p-3 col-span-3">
          <button
            class="bg-gray-200 w-full p-2 rounded-lg shadow-md"
            @click="destroyWindow">
            Destroy
          </button>
        </div>
      </div>
    </div>
  </div>
  <register-awesome-modal />
</template>

<script lang="ts" setup>
  import {ref} from 'vue';
  import {ModalAnimationType, ModalPosition} from '../src/runtime/constants';
  import {useAwesomeModal} from '../src/runtime/composables/useAwesomeModal';
  import WindowComponent from '~/window-component.vue';

  const animation = ref(ModalAnimationType.slideFromBottom);
  const position = ref(ModalPosition.center);
  const showBackdrop = ref<boolean>(true);
  const disableBackdrop = ref<boolean>(false);
  const autoDestroy = ref<boolean>(true);
  const autoShow = ref<boolean>(true);
  const modalName = 'test-window';
  const awesomeModal = useAwesomeModal();

  const openModal = () => {
    if (awesomeModal.has(modalName)) {
      awesomeModal.show(modalName);
    } else {
      awesomeModal.add(
        modalName,
        {
          component: WindowComponent,
          animation: animation.value,
          position: position.value,
          showBackdrop: showBackdrop.value,
          disableBackdrop: disableBackdrop.value,
          autoDestroy: autoDestroy.value,
          onBeforeDestroy: (): boolean => {
            return true;
          },
          onDestroy: (): any => {},
        },
        autoShow.value,
      );
    }
  };
  const showWindow = () => {
    awesomeModal.show(modalName);
  };
  const hideWindow = () => {
    awesomeModal.hide(modalName);
  };
  const destroyWindow = () => {
    awesomeModal.destroy(modalName);
  };
</script>
