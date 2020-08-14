import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'page-header',
  setup() {
    return {
      router: useRouter()
    };
  },
  methods: {
    minimize() {
      this.router.push('/');
    },
    fullScreen() {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        document.documentElement.requestFullscreen();
      }
    }
  }
});