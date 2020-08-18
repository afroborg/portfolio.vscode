import { INotification } from '@/models/INotification';
import { IProject } from '@/models/IProject';
import { ITab } from '@/models/ITab';
import { createStore } from 'vuex';
import notifications from './modules/notifications';
import projects from './modules/projects';
import tabs from './modules/tabs';

export type State = {
  projects: IProject[];
  tabs: ITab[];
  notifications: INotification[];
};

export const store = createStore({
  modules: {
    projects,
    tabs,
    notifications
  }
});