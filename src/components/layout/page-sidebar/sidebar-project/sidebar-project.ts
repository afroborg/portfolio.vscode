import icon from '@/components/icon/icon.vue';
import { ITab } from '@/models/ITab';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'sidebar-project',
  components: {
    icon
  },
  props: {
    id: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    tags: Array,
    languages: Array,
    github: Object,
    isPrivate: Boolean,
    demo: String
  },
  setup() {
    const router = useRouter();
    return {
      router
    };
  },
  data: () => ({
    expanded: false,
  }),
  computed: {
    ...mapGetters({
      tabs: 'allTabs'
    }),
  },
  mounted() {
    const id = this.router.currentRoute.value.params.id;
    if (id && id === this.id) {
      this.expanded = true;
    }
  },
  methods: {
    ...mapActions(['createTab']),
    toggle() {
      this.expanded = !this.expanded;
    },
    openTab(e: Event, url: string) {
      e.preventDefault();
      const tab: ITab = {
        title: this.name,
        path: url,
        icon: (this.languages as string[])[0]
      };
      if (!(this.tabs as ITab[]).some(s => s.path === url)) {
        this.createTab(tab);
      }

      this.router.push(url);
    }
  }
});