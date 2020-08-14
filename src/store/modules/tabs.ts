import { ITab } from '@/models/ITab';

export default {
  state: () => (
    {
      tabs: [
        // {
        //   title: 'CDON Tools',
        //   path: '/projects/asdf/description'
        // },
        // {
        //   title: 'CDON Tools 2',
        //   path: '/projects/asssssdf/description'
        // }
      ] as ITab[]
    }
  ),
  getters: {
    allTabs: (state: any) => state.tabs,
  },
  actions: {
    createTab({ state, commit }: any, tab: ITab) {
      const tabs = [...state.tabs];
      tabs.push(tab);
      commit('setTabs', tabs);
    },
    removeTabAtIndex({ state, commit }: any, index: number) {
      const tabs = [...state.tabs];
      tabs.splice(index, 1);
      commit('setTabs', tabs);
    }
  },
  mutations: {
    setTabs: (state: any, data: any) => state.tabs = data,
  }
};