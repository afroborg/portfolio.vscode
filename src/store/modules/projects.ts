import { getProjects } from '@/helpers/projects-helpers';
import { IProject } from '@/models/IProject';

export default {
  state: () => (
    {
      projects: [] as IProject[],
    }
  ),
  getters: {
    allProjects: (state: any) => state.projects,
  },
  actions: {
    async fetchProjects({ commit }: any) {
      const projects = await getProjects();
      commit('setProjects', projects);
    }
  },
  mutations: {
    setProjects: (state: any, data: any) => state.projects = data,
  }
};