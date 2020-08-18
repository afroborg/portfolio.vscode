import { INotification } from '@/models/INotification';
import { State } from '@/store';
import { Store } from 'vuex';

export const addNotification = (notification: INotification, store: Store<State>) => {
  store.dispatch('addNotification', notification);
};