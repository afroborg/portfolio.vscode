import { capitalize } from '@/helpers/string-helpers';
import { ref } from 'vue';

export const useModal = (name: string) => {
  const capitalizedName = capitalize(name);

  const showModal = ref(false);
  const toggleModal = () => showModal.value = !showModal.value;

  return {
    [`show${capitalizedName}Modal`]: showModal,
    [`toggle${capitalizedName}Modal`]: toggleModal
  };
};