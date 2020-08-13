import icon from '@/components/icon/icon.vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

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
  mounted() {
    const id = this.router.currentRoute.value.params.id;
    if (id && id === this.id) {
      this.expanded = true;
    }
  },
  methods: {
    toggle() {
      this.expanded = !this.expanded;
    }
  }
});