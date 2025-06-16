import { ModalAnimationType, ModalPosition } from './constants';
import type { IModal, IModalOptions } from './interfaces';
export declare class AwesomeModalManager {
    modals: import("vue").Ref<{
        name: string;
        index: number;
        visible: boolean;
        options: {
            component: object;
            data?: object | undefined;
            title?: string | boolean | undefined;
            disabled?: boolean | undefined;
            callBack?: object | undefined;
            animation?: ModalAnimationType | undefined;
            position?: ModalPosition | undefined;
            showBackdrop?: boolean | undefined;
            disableBackdrop?: boolean | undefined;
            autoDestroy?: boolean | undefined;
            onDestroy?: (() => {}) | undefined;
            onBeforeDestroy?: (() => {}) | undefined;
            onShow?: (() => {}) | undefined;
            onBeforeShow?: (() => {}) | undefined;
            onClose?: (() => {}) | undefined;
            onBeforeClose?: (() => {}) | undefined;
        };
    }[]>;
    private index;
    add(modalName: string, options: IModalOptions, autoShow?: boolean): void;
    show(modalName: string): void;
    hide(modalName: string): void;
    destroy(modalName: string): void;
    get(modalName: string): IModal | undefined;
    has(modalName: string): boolean;
    isVisible(modalName: string): boolean;
    isAutoDestroy(modalName: string): boolean;
}
