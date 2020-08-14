import { defineComponent } from 'vue';

export default defineComponent({
  name: 'checkbox',
  props: {
    value: {
      type: Boolean,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
});