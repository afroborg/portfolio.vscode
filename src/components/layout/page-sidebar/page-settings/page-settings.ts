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