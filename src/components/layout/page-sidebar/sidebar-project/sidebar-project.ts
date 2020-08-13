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
  methods: {
    toggle() {
      this.expanded = !this.expanded;
    }
  }
});