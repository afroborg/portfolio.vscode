import { INotification } from '@/models/INotification';

export default {
  state: () => ([] as INotification[]),
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
    pushNotification: (state: any, notification: INotification) => state.push(notification),
    removeNotificationAtIndex: (state: any, index: number) => state.splice(index, 1)
  }
};