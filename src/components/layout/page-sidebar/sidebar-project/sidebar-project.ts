import icon from '@/components/icon/icon.vue';
import { ITab } from '@/models/ITab';
import { defineComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'sidebar-project',
  components: {
    icon
  },
  props: {
    id: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    tags: Array,
    languages: Array,
    github: Object,
    isPrivate: Boolean,
    demo: String
  },
  setup(props) {
    const route = useRoute();
    const expanded = ref(false);
    const id = route.params.id;

    const toggle = () => {
      expanded.value = !expanded.value;
    };

    if (id && id === props.id) {
      expanded.value = true;
    }
    return {
      expanded,
      toggle,
      ...useTabs(props)
    };
  },
});

const useTabs = (props: any) => {
  const store = useStore();
  const router = useRouter();

  const tabs = store.state.tabs.tabs;

  const createTab = (tab: ITab) => store.dispatch('createTab', tab);

  const openTab = (e: Event, url: string) => {
    e.preventDefault();

    const tab = {
      title: props.name,
      path: url,
      icon: props.languages[0]
    };
    if (!tabs.some((s: ITab) => s.path === url))
      createTab(tab);

    router.push(url);
  };

  return {
    openTab
  };
};