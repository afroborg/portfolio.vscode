import { INotification } from '@/models/INotification';

export default {
  state: () => ({ notifications: [] as INotification[] }),
  getters: {

  },
  actions: {
    addNotification({ commit }: any, notification: INotification) {
      commit('pushNotification', notification);
    },
    deleteNotification({ commit }: any, index: number) {
      commit('removeNotificationAtIndex', index);
    }
  },
  mutations: {
    pushNotification: (state: any, notification: INotification) => state.notifications.push(notification),
    removeNotificationAtIndex: (state: any, index: number) => state.notifications.splice(index, 1)
  }
};