import { useNuxtApp } from "#app";
export const useAwesomeModal = () => {
  return useNuxtApp().$awesomeModal;
};
