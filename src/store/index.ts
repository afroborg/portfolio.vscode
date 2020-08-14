import { IProject } from '@/models/IProject';
import { createStore } from 'vuex';
import projects from './modules/projects';
import tabs from './modules/tabs';

export type State = { projects: IProject[]; };

export const store = createStore({
  modules: {
    projects,
    tabs
  }
});