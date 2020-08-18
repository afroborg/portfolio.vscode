import { computed, defineComponent, watch } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'notification',
  setup() {
    const store = useStore();
    const notifications = computed(() => store.state.notifications.notifications);

    const remove = (index: number) => store.dispatch('deleteNotification', index);

    watch(
      notifications,
      (to) => {
        setTimeout(() => {
          if (to.length) {
            to.splice(0, 1);
          }
        }, 5000);
      },
      {
        deep: true
      }
    );

    return {
      notifications,
      remove
    };
  }
});