import icon from '@/components/icon/icon.vue';
import { ITab } from '@/models/ITab';
import { computed, defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'page-content',
  components: {
    icon
  },
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
  mounted() {
    // Control tabs with keyboard shortcuts
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === 'w' && this.tabs.length) {
        const currentTabIndex = this.tabs.findIndex((t: ITab) => t.path === this.route.path);
        if (currentTabIndex > -1) {
          this.closeTab(e, currentTabIndex);
        }
      }
    });

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