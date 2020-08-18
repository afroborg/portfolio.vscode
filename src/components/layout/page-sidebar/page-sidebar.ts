import checkbox from '@/components/checkbox/checkbox.vue';
import icon from '@/components/icon/icon.vue';
import loader from '@/components/loader/loader.vue';
import modal from '@/components/modal/modal.vue';
import { addNotification } from '@/helpers/notification-helpers';
import { capitalize } from '@/helpers/string-helpers';
import { INotification } from '@/models/INotification';
import { IProject } from '@/models/IProject';
import { computed, defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { mapActions, mapGetters, useStore } from 'vuex';
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
    const route = computed(() => useRoute()).value;
    const router = computed(() => useRouter()).value;
    const store = useStore();
    const notification = (notification: INotification) => addNotification(notification, store);
    return {
      route,
      router,
      notification
    };
  },
  data: () => ({
    filters: [] as any[],
    showFilterModal: false,
    showSettingsModal: false,
    showUserModal: false,
    projectsExpanded: false,
    isLoading: false,
    innerLinks: [
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
    ]
  }),
  computed: {
    ...mapGetters({
      projects: 'allProjects'
    }),
  },
  created() {
    this.isLoading = true;
    this.fetchProjects()
      .then(() => {
        const tags = [...new Set((this.projects as IProject[]).map(p => p.languages).flat())];
        this.filters = tags.map(t => ({
          name: capitalize(t),
          enabled: true,
          icon: t,
          key: t
        }));
      })
      .catch(() => {
        this.notification({ header: 'Could not fetch projects', body: 'Please try again', type: 'failure' });
      })
    .then(() => {
      this.isLoading = false;
    });
  },
  methods: {
    ...mapActions(['fetchProjects']),
    toggleFilterModal() {
      this.showFilterModal = !this.showFilterModal;
    },
    toggleSettingsModal() {
      this.showSettingsModal = !this.showSettingsModal;
    },
    toggleUser() {
      // eslint-disable-next-line no-constant-condition
      if (true) {
        this.showUserModal = !this.showUserModal;
      }
    },
    expandProjects() {
      if (window.innerWidth < 1000)
        this.projectsExpanded = !this.projectsExpanded;
    }
  }
});