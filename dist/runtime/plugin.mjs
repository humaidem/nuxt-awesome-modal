import { defineNuxtPlugin } from "#app";
import { AwesomeModalManager } from "./awesome-modal-manager.mjs";
export default defineNuxtPlugin(() => {
  return {
    provide: {
      awesomeModal: new AwesomeModalManager()
    }
  };
});
