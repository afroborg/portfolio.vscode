import icon from '@/components/icon/icon.vue';
import loader from '@/components/loader/loader.vue';
import { toDaysSince } from '@/helpers/date-helpers';
import { getProjectDetails } from '@/helpers/projects-helpers';
import { defineComponent, onMounted, ref } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

export default defineComponent({
  name: 'project-page',
  components: {
    icon,
    loader
  },
  setup() {
    const project = useProject();
    return {
      ...project,
      toDaysSince
    };
  },
});

const useProject = () => {
  const route = useRoute();
  const project = ref({});
  const isLoadingProject = ref(false);

  onMounted(() => {
    getProjectData(route.params.id.toString());
  });

  onBeforeRouteUpdate(async (to, from, next) => {
    if (to.params.id !== from.params.id) {
      await getProjectData(to.params.id.toString());
      next();
    }
    next();
  });

  const getProjectData = async (id: string) => {
    isLoadingProject.value = true;
    const data = await getProjectDetails(id);
    isLoadingProject.value = false;
    project.value = data;
  };

  return {
    project,
    isLoadingProject,
    getProjectData
  };
};