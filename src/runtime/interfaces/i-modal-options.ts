import {ModalAnimationType, ModalPosition} from '../constants';

export interface IModalOptions {
  component: object;
  data?: object;
  title?: boolean | string;
  disabled?: boolean;
  callBack?: object;
  animation?: ModalAnimationType;
  position?: ModalPosition;
  showBackdrop?: boolean;
  disableBackdrop?: boolean;
  autoDestroy?: boolean;
  onDestroy?: () => {};
  onBeforeDestroy?: () => {};
  onShow?: () => {};
  onBeforeShow?: () => {};
  onClose?: () => {};
  onBeforeClose?: () => {};
}
