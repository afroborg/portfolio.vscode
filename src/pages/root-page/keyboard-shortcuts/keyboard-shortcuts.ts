import { defineComponent } from 'vue';

export default defineComponent({
  name: 'keyboard-shortcuts',
  setup() {
    const isMac = navigator.platform.indexOf('Mac') > -1;
    const altKey = isMac ? '⌥' : 'Alt';
    const SHORTCUTS = [
      {
        name: 'Change theme',
        keys: [altKey, 'T'],
      },
      {
        name: 'Close tab',
        keys: [altKey, 'W'],
      },
    ];
    return {
      shortcuts: SHORTCUTS,
    };
  },
});
