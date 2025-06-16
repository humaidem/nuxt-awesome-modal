import type { IModalOptions } from './i-modal-options';
export interface IModal {
    name: string;
    index: number;
    visible: boolean;
    options: IModalOptions;
}
