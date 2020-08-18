import { createStore } from 'vuex';
import notifications from './modules/notifications';
import projects from './modules/projects';
import tabs from './modules/tabs';

export type State = {
  [key: string]: any;
};

export const store = createStore({
  modules: {
    projects,
    tabs,
    notifications
  }
});