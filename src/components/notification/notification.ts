import { defineComponent } from 'vue';

export default defineComponent({
  name: 'notification',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data: () => ({
    header: '',
    body: ''
  }),
  mounted() {
  }
});