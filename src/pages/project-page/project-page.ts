import icon from '@/components/icon/icon.vue';
import { toDaysSince } from '@/helpers/date-helpers';
import { getProjectDetails } from '@/helpers/projects-helpers';
import { IProject } from '@/models/IProject';
import { defineComponent } from 'vue';
import { NavigationGuardNext, RouteLocation, useRoute } from 'vue-router';

export default defineComponent({
  name: 'project-page',
  components: {
    icon
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
    project: {}
  }),
  mounted() {
    this.getProjectData(this.route.params.id.toString());
  },
  methods: {
    setData(project: IProject) {
      this.project = { ...project };
    },
    async getProjectData(id: string) {
      const data = await getProjectDetails(id);
      this.setData(data);
    },
    toDaysSince
  }
});