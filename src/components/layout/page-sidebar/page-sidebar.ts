import checkbox from '@/components/checkbox/checkbox.vue';
import modal from '@/components/modal/modal.vue';
import { computed, defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { mapActions, mapGetters } from 'vuex';
import pageSettings from './page-settings/page-settings.vue';
import pageSidebarConfig from './page-sidebar-config';
import sidebarProject from './sidebar-project/sidebar-project.vue';

export default defineComponent({
  name: 'page-sidebar',
  components: {
    sidebarProject,
    modal,
    checkbox,
    pageSettings
  },
  setup() {
    const route = computed(() => useRoute()).value;
    const router = computed(() => useRouter()).value;


    return {
      route,
      router
    };
  },
  data: () => ({
    ...pageSidebarConfig,
    showFilterModal: false,
    showSettingsModal: false,
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
      }
    ]
  }),
  computed: {
    ...mapGetters({
      projects: 'allProjects'
    }),
  },
  created() {
    this.fetchProjects();
  },
  methods: {
    ...mapActions(['fetchProjects']),
    toggleFilterModal() {
      this.showFilterModal = !this.showFilterModal;
    },
    toggleSettingsModal() {
      this.router.go(-1);
    }
  }
});