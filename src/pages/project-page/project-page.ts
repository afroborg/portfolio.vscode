import icon from '@/components/icon/icon.vue';
import loader from '@/components/loader/loader.vue';
import { toDaysSince } from '@/helpers/date-helpers';
import { getProjectDetails } from '@/helpers/projects-helpers';
import { IProject } from '@/models/IProject';
import { defineComponent } from 'vue';
import { NavigationGuardNext, RouteLocation, useRoute } from 'vue-router';

export default defineComponent({
  name: 'project-page',
  components: {
    icon,
    loader
  },
  async beforeRouteUpdate(to: RouteLocation, from: RouteLocation, next: NavigationGuardNext) {
    if (to.params.id !== from.params.id) {
      await this.getProjectData(to.params.id.toString());
      next();
    }
    next();
  },
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
  data: () => ({
    project: {},
    isLoading: false
  }),
  mounted() {
    this.getProjectData(this.route.params.id.toString());
  },
  methods: {
    setData(project: IProject) {
      this.project = { ...project };
    },
    async getProjectData(id: string) {
      this.isLoading = true;
      const data = await getProjectDetails(id);
      this.setData(data);
      this.isLoading = false;
    },
    toDaysSince
  }
});