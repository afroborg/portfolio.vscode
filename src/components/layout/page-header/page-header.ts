import { defineComponent } from 'vue';

export default defineComponent({
  name: 'page-header',
  methods: {
    fullScreen() {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        document.documentElement.requestFullscreen();
      }
    }
  }
});