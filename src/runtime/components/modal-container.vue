<template>
  <div
    aria-labelledby="window-title"
    aria-modal="true"
    :style="{zIndex: props.instance.index}"
    class="nuxt-awesome-modal-container"
    role="dialog">
    <transition name="backdrop">
      <div
        v-show="
          awesomeModal.isVisible(props.instance.name) &&
          props.instance.options.showBackdrop
        "
        class="nuxt-awesome-modal-backdrop-container"
        @click="backdropClicked" />
    </transition>
    <transition :name="animationName">
      <div
        v-show="awesomeModal.isVisible(props.instance.name)"
        class="nuxt-awesome-modal-component nuxt-awesome-modal-component-scroll">
        <component
          :is="props.instance.options.component"
          :class="modalPosition"
          :data="props.instance.options?.data ?? {}"
          :name="props.instance.name"
          class="nuxt-awesome-modal" />
      </div>
    </transition>
  </div>
</template>
<script lang="ts" setup>
  import {onMounted, ref} from 'vue';
  import type {IModal} from '../interfaces';
  import {ModalAnimationType, ModalPosition} from '../constants';
  import {useAwesomeModal} from '../composables/useAwesomeModal';

  const animationName = ref('slide-top');
  const modalPosition = ref('');
  const awesomeModal = useAwesomeModal();
  interface Props {
    instance: IModal;
  }
  const props = withDefaults(defineProps<Props>(), {});
  onMounted(() => {
    setAnimationClass();
    setPositionClass();
  });

  const backdropClicked = () => {
    if (props.instance.options.disableBackdrop) {
      return;
    }
    awesomeModal.hide(props.instance.name);
  };

  const setAnimationClass = (): void => {
    const animation = props.instance.options.animation;
    if (animation === ModalAnimationType.slideFromTop) {
      animationName.value = 'slide-top';
    } else if (animation === ModalAnimationType.slideFromBottom) {
      animationName.value = 'slide-bottom';
    } else if (animation === ModalAnimationType.slideFromLeft) {
      animationName.value = 'slide-left';
    } else if (animation === ModalAnimationType.slideFromRight) {
      animationName.value = 'slide-right';
    } else if (animation === ModalAnimationType.fadeInAndOut) {
      animationName.value = 'fade-in-out';
    } else {
      animationName.value = 'fade-in-out';
    }
  };

  const setPositionClass = (): void => {
    const position = props.instance.options.position;
    if (position === ModalPosition.top) {
      modalPosition.value = 'nuxt-awesome-modal-component-top';
    } else if (position === ModalPosition.bottom) {
      modalPosition.value = 'nuxt-awesome-modal-component-bottom';
    } else if (position === ModalPosition.right) {
      modalPosition.value = 'nuxt-awesome-modal-component-right';
    } else if (position === ModalPosition.rightTop) {
      modalPosition.value = 'nuxt-awesome-modal-component-right-top';
    } else if (position === ModalPosition.rightBottom) {
      modalPosition.value = 'nuxt-awesome-modal-component-right-bottom';
    } else if (position === ModalPosition.left) {
      modalPosition.value = 'nuxt-awesome-modal-component-left';
    } else if (position === ModalPosition.leftTop) {
      modalPosition.value = 'nuxt-awesome-modal-component-left-top';
    } else if (position === ModalPosition.leftBottom) {
      modalPosition.value = 'nuxt-awesome-modal-component-left-bottom';
    } else if (position === ModalPosition.center) {
      modalPosition.value = 'nuxt-awesome-modal-component-center';
    } else {
      modalPosition.value = '';
    }
  };
</script>
