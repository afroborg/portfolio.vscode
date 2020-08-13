import { defineComponent } from 'vue';

const cssProperties = [
  'color-code-content',
  'color-code-header',
  'color-code-inner-sidebar',
  'color-code-sidebar',
  'color-code-footer',
  'color-text',
  'color-text-40',
  'color-inner-sidebar-text',
  'color-complementary',
];


export default defineComponent({
  name: 'page-settings',
  mounted() {
    const theme = localStorage.getItem('theme') || 'dark';
    this.setTheme(theme);
  },
  methods: {
    setTheme(theme: string) {
      cssProperties.forEach(p => document.documentElement.style.setProperty(`--${p}`, `var(--${p}-${theme})`));
      localStorage.setItem('theme', theme);
    }
  },
});