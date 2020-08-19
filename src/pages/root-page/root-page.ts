import icon from '@/components/icon/icon.vue';
import modal from '@/components/modal/modal.vue';
import { useModal } from '@/helpers/cmp/modal-helpers';
import { defineComponent, ref } from 'vue';


export default defineComponent({
  name: 'root-page',
  components: {
    icon,
    modal
  },
  setup: () => ({
    ...setupIcons(),
    ...useModal('contact')
  }),
});

const setupIcons = () => {
  const icons = ref([] as any[]);
  const LANGUAGES = [
    'react',
    'vue',
    'csharp',
    'dotnet',
    'firebase',
    'nodejs',
    'sass',
    'typescript',
    'javascript',
  ];

  const iconsOnPage = Math.floor(Math.random() * 100) + 20;

  for (let i = 0; i < iconsOnPage; i++) {
    const rand = Math.floor(Math.random() * LANGUAGES.length);
    icons.value.push({
      icon: LANGUAGES[rand],
      x: window.innerWidth * Math.random(),
      y: window.innerHeight * Math.random(),
      speed: Math.floor(Math.random() * 5000) + 2000
    });
  }

  return {
    icons
  };
};