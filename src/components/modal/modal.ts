import { defineComponent } from 'vue';

export default defineComponent({
  name: 'modal',
  props: {
    visible: {
      required: true,
      type: Boolean
    },
    onClose: Function,
    onOk: Function,
    showFooter: {
      type: Boolean,
      default: true
    },
    okText: {
      type: String,
      default: 'Ok'
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    },
    title: String,
  },
  data: () => ({
    expanded: false,
  }),
  methods: {
    ok() {
      this.ok?.();
    },
    close() {
      this.onClose?.();
    },
    expand() {
      this.expanded = !this.expanded;
    },
  }
});