import icon from '@/components/icon/icon.vue';
import { ITab } from '@/models/ITab';
import { computed, defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'page-content',
  components: {
    icon
  },
  setup() {
    return {
      ...useTabs()
    };
  },
});

const useTabs = () => {
  const store = useStore();
  const route = useRoute();
  const router = useRouter();
  const tabs = computed(() => store.state.tabs.tabs);

  const closeTab = (e: Event, index: number) => {
    e.preventDefault();

    const tab = tabs.value[index];
    store.dispatch('removeTabAtIndex', index);

    if (tab.path === route.path) {
      const path = tabs.value[0] ? tabs.value[0].path : '/';
      router.push(path);
    }
  };

  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.altKey && e.key.toLowerCase() === 'w' && tabs.value.length) {
      const currentTabIndex = tabs.value.findIndex((t: ITab) => t.path === route.path);
      if (currentTabIndex > -1) {
        closeTab(e, currentTabIndex);
      }
    }
  });

  return {
    tabs,
    closeTab,
  };
};