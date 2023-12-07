import {useNuxtApp} from '#app';
import {AwesomeModalManager} from '../awesome-modal-manager';

export const useAwesomeModal = (): AwesomeModalManager => {
  return useNuxtApp().$awesomeModal;
};
