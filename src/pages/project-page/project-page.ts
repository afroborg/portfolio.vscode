import icon from '@/components/icon/icon.vue';
import { toDaysSince } from '@/helpers/date-helpers';
import { getProjectDetails } from '@/helpers/projects-helpers';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'project-page',
  components: {
    icon
  },
  setup() {
    const route = useRoute();
    return {
      route
    };
  },
  data: () => ({
    project: {}
  }),
  mounted() {
    this.getProjectData();
  },
  methods: {
    async getProjectData() {
      const data = await getProjectDetails(this.route.params.id.toString());
      this.project = { ...data };
    },
    toDaysSince
  }
});