import notification from '@/components/notification/notification.vue';
import vSelect from '@/components/v-select/v-select.vue';
import { addNotification } from '@/helpers/notification-helpers';
import { capitalize } from '@/helpers/string-helpers';
import { INotification } from '@/models/INotification';
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { CONFIG } from './page-settings-config';



export default defineComponent({
  name: 'page-settings',
  components: {
    vSelect,
    notification
  },
  setup() {
    const store = useStore();
    const add = (notification: INotification) => addNotification(notification, store);

    return {
      add,
      ...useThemes({ add }),
    };
  },
});

const useThemes = (addons: any) => {
  const theme = ref(localStorage.getItem('theme') || 'dark');
  const themes = CONFIG.THEMES;

  const setTheme = (key: string, showNotification = true) => {
    const themeToSet = themes.find(t => t.key === key);
    if (themeToSet) {
      document.documentElement.setAttribute('data-theme', key);
      localStorage.setItem('theme', key);
      theme.value = key;

      if (showNotification)
        addons.add({ header: 'Theme updated', body: `${capitalize(themeToSet.value)} selected`, type: 'success' });
    }
  };

  // Theme switcher with alt+t
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e?.altKey && e?.key?.toLowerCase() === 't') {
      const currentThemeIndex = themes.findIndex(t => t.key === theme.value);
      const nextIndex = currentThemeIndex + 1 > themes.length - 1 ? 0 : currentThemeIndex + 1;
      setTheme(themes[nextIndex].key);
    }
  });

  setTheme(theme.value, false);

  return {
    theme,
    themes,
    setTheme
  };
};