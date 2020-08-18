import notification from '@/components/notification/notification.vue';
import vSelect from '@/components/v-select/v-select.vue';
import { addNotification } from '@/helpers/notification-helpers';
import { capitalize } from '@/helpers/string-helpers';
import { INotification } from '@/models/INotification';
import { IOption } from '@/models/IOption';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

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
      add
    };
  },
  data: () => ({
    theme: 'dark',
    themes: [
      {
        key: 'dark',
        value: 'Dark',
      },
      {
        key: 'light',
        value: 'Light',
      },
      {
        key: 'material-dark',
        value: 'Material dark',
      },
      {
        key: 'material-light',
        value: 'Material light',
      },
    ] as IOption[]
  }),
  mounted() {
    const theme = localStorage.getItem('theme') || 'dark';
    this.setTheme(theme, false);

    // Theme switcher with alt+t
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e?.altKey && e?.key?.toLowerCase() === 't') {
        const currentThemeIndex = this.themes.findIndex(t => t.key === this.theme);
        const nextIndex = currentThemeIndex + 1 > this.themes.length - 1 ? 0 : currentThemeIndex + 1;
        this.setTheme(this.themes[nextIndex].key);
      }
    });
  },
  methods: {
    setTheme(key: string, showNotification = true) {
      const theme = this.themes.find(t => t.key === key);
      if (theme) {
        document.documentElement.setAttribute('data-theme', key);
        localStorage.setItem('theme', key);
        this.theme = key;

        if (showNotification)
          this.add({ header: 'Theme updated', body: `${capitalize(theme.value)} is now the active theme`, type: 'success' });
      }
    }
  },
});