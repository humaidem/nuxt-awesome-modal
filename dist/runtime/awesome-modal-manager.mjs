import { ref, shallowRef } from "vue";
import { ModalAnimationType, ModalPosition } from "./constants/index.mjs";
export class AwesomeModalManager {
  modals = ref([]);
  index = 1e3;
  add(modalName, options, autoShow = false) {
    if (this.has(modalName)) {
      return;
    }
    const modalComponent = shallowRef(options.component);
    const win = {
      name: modalName,
      visible: false,
      index: this.index++,
      options: {
        ...{
          data: {},
          title: false,
          disabled: false,
          animation: ModalAnimationType.slideFromBottom,
          position: ModalPosition.center,
          showBackdrop: true,
          disableBackdrop: false,
          autoDestroy: true
        },
        ...options,
        ...{
          component: modalComponent
        }
      }
    };
    this.modals.value.push(win);
    if (autoShow) {
      this.show(modalName);
    }
  }
  show(modalName) {
    setTimeout(() => {
      this.modals.value = this.modals.value.map((win) => {
        if (win.name === modalName) {
          win.visible = true;
        }
        return win;
      });
    }, 100);
  }
  hide(modalName) {
    const modal = this.get(modalName);
    if (!modal) {
      return;
    }
    this.modals.value = this.modals.value.map((win) => {
      if (win.name === modalName) {
        win.visible = false;
      }
      return win;
    });
    if (modal.options.autoDestroy) {
      setTimeout(() => {
        this.destroy(modal.name);
      }, 200);
    }
  }
  destroy(modalName) {
    const modal = this.get(modalName);
    if (!modal) {
      return;
    }
    if (modal.options.onBeforeDestroy) {
      if (modal.options.onBeforeDestroy() === false) {
        return;
      }
    }
    this.modals.value = this.modals.value.filter((win) => win !== modal);
    if (modal.options.onDestroy) {
      modal.options.onDestroy();
    }
  }
  get(modalName) {
    return this.modals.value.find((win) => win.name === modalName);
  }
  has(modalName) {
    return !!this.get(modalName);
  }
  isVisible(modalName) {
    const modal = this.get(modalName);
    if (!modal) {
      return false;
    }
    return modal.visible;
  }
  isAutoDestroy(modalName) {
    const modal = this.get(modalName);
    if (!modal) {
      return false;
    }
    return modal.options.autoDestroy ?? true;
  }
}
