import {defineNuxtPlugin} from '#app';
import {AwesomeModalManager} from './awesome-modal-manager';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      awesomeModal: new AwesomeModalManager(),
    },
  };
});
