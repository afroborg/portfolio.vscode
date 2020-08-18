import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'page-header',
  setup() {
    const router = useRouter();
    const header = window.location.hostname;

    const minimize = () => router.push('/');
    const maximize = () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();

    return {
      header,
      minimize,
      maximize
    };
  }
});