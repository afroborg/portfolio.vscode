import checkbox from '@/components/checkbox/checkbox.vue';
import icon from '@/components/icon/icon.vue';
import loader from '@/components/loader/loader.vue';
import modal from '@/components/modal/modal.vue';
import { addNotification } from '@/helpers/notification-helpers';
import { INotification } from '@/models/INotification';
import { computed, defineComponent, onMounted, reactive, ref } from 'vue';
import { useStore } from 'vuex';
import pageSettings from './page-settings/page-settings.vue';
import sidebarProject from './sidebar-project/sidebar-project.vue';

export default defineComponent({
  name: 'page-sidebar',
  components: {
    sidebarProject,
    modal,
    checkbox,
    pageSettings,
    icon,
    loader
  },
  setup() {
    const projects = useProjects();

    return {
      ...projects,
      ...useFilters(),
      ...useSettings(),
      ...useLinks(),
      ...useNotification(),
      ...useExpanding()
    };
  },
});

const useProjects = () => {
  const store = useStore();
  const projects = computed(() => store.state.projects.projects);
  const loadingProjects = ref(false);

  onMounted(async () => {
    loadingProjects.value = true;
    await store.dispatch('fetchProjects');
    loadingProjects.value = false;
  });

  return {
    projects,
    loadingProjects
  };
};

const useFilters = () => {
  const filters = reactive([] as any[]);
  const showFilterModal = ref(false);

  const toggleFilterModal = () => showFilterModal.value = !showFilterModal.value;

  return {
    filters,
    showFilterModal,
    toggleFilterModal
  };
};

const useSettings = () => {
  const showSettingsModal = ref(false);
  const toggleSettingsModal = () => showSettingsModal.value = !showSettingsModal.value;

  return {
    showSettingsModal,
    toggleSettingsModal
  };
};

const useNotification = () => {
  const store = useStore();
  const notifications = store.state.notifications.notifications;
  const notification = (notification: INotification) => addNotification(notification, store);

  return {
    notifications,
    notification,
  };
};

const useLinks = () => {
  const innerLinks = [
    {
      title: 'Projects',
      icon: 'fal fa-copy',
      path: '/',
    },
    {
      title: 'Github',
      icon: 'fal fa-code-merge',
      path: 'https://github.com/afroborg',
    },
    {
      title: 'Github',
      icon: 'fab fa-linkedin-in',
      path: 'https://linkedin.com/in/axelfroborg',
    }
  ];

  return {
    innerLinks
  };
};

const useExpanding = () => {
  const projectsExpanded = ref(false);

  const expandProjects = () => {
    if (window.innerWidth < 1000)
      projectsExpanded.value = !projectsExpanded.value;
  };

  return {
    projectsExpanded,
    expandProjects
  };
};