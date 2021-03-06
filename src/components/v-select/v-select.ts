import { defineComponent } from 'vue';

export default defineComponent({
  name: 'v-select',
  props: {
    value: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    keyProp: {
      type: String,
      default: 'key'
    },
    valueProp: {
      type: String,
      default: 'value'
    },
    label: String
  },
});