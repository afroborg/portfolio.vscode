import checkbox from '@/components/checkbox/checkbox.vue';
import icon from '@/components/icon/icon.vue';
import modal from '@/components/modal/modal.vue';
import { capitalize } from '@/helpers/string-helpers';
import { IProject } from '@/models/IProject';
import { computed, defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { mapActions, mapGetters } from 'vuex';
import pageSettings from './page-settings/page-settings.vue';
import sidebarProject from './sidebar-project/sidebar-project.vue';

export default defineComponent({
  name: 'page-sidebar',
  components: {
    sidebarProject,
    modal,
    checkbox,
    pageSettings,
    icon
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
    filters: [] as any[],
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
    this.fetchProjects()
      .then(() => {
        const tags = [...new Set((this.projects as IProject[]).map(p => p.languages).flat())];
        this.filters = tags.map(t => ({
          name: capitalize(t),
          enabled: true,
          icon: t,
          key: t
        }));
      });
  },
  methods: {
    ...mapActions(['fetchProjects']),
    toggleFilterModal() {
      this.showFilterModal = !this.showFilterModal;
    },
    toggleSettingsModal() {
      this.showSettingsModal = !this.showSettingsModal;
    }
  }
});