import vSelect from '@/components/v-select/v-select.vue';
import { IOption } from '@/models/IOption';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'page-settings',
  components: {
    vSelect
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
    this.setTheme(theme);

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
    setTheme(theme: string) {
      if (this.themes.some(t => t.key === theme)) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.theme = theme;
      }
    }
  },
});