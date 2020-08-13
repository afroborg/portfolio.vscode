import { computed, defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'page-content',
  setup() {
    const route = computed(() => useRoute()).value;
    const router = useRouter();

    return {
      route,
      router
    };
  },
  computed: {
    ...mapGetters({
      tabs: 'allTabs'
    })
  },
  methods: {
    ...mapActions(['removeTabAtIndex']),
    closeTab(e: Event, index: number) {
      e.preventDefault();
      const tab = this.tabs[index];
      this.removeTabAtIndex(index);

      if (tab.path === this.route.path) {
        const path = this.tabs[0] ? this.tabs[0].path : '/';
        this.router.push(path);
      }
    }
  }
});