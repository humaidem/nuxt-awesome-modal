import {ref, shallowRef} from 'vue';
import {ModalAnimationType, ModalPosition} from './constants';
import type {IModal, IModalOptions} from './interfaces';

export class AwesomeModalManager {
  modals = ref<IModal[]>([]);
  private index: number = 1000;
  add(modalName: string, options: IModalOptions, autoShow: boolean = false) {
    if (this.has(modalName)) {
      return;
    }
    const modalComponent = shallowRef(options.component);
    const win: IModal = {
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
          autoDestroy: true,
        },
        ...options,
        ...{
          component: modalComponent,
        },
      },
    };
    this.modals.value.push(win);
    if (autoShow) {
      this.show(modalName);
    }
  }

  show(modalName: string) {
    setTimeout(() => {
      this.modals.value = this.modals.value.map((win: IModal) => {
        if (win.name === modalName) {
          win.visible = true;
        }
        return win;
      });
    }, 100);
  }

  hide(modalName: string) {
    const modal = this.get(modalName);
    if (!modal) {
      return;
    }
    this.modals.value = this.modals.value.map((win: IModal) => {
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

  destroy(modalName: string) {
    const modal = this.get(modalName);
    if (!modal) {
      return;
    }
    if (modal.options.onBeforeDestroy) {
      if (modal.options.onBeforeDestroy() === false) {
        return;
      }
    }

    this.modals.value = this.modals.value.filter(win => win !== modal);

    if (modal.options.onDestroy) {
      modal.options.onDestroy();
    }
  }

  get(modalName: string): IModal | undefined {
    return this.modals.value.find(win => win.name === modalName);
  }

  has(modalName: string): boolean {
    return !!this.get(modalName);
  }

  isVisible(modalName: string): boolean {
    const modal = this.get(modalName);
    if (!modal) {
      return false;
    }
    return modal.visible;
  }

  isAutoDestroy(modalName: string): boolean {
    const modal = this.get(modalName);
    if (!modal) {
      return false;
    }
    return modal.options.autoDestroy ?? true;
  }
}
