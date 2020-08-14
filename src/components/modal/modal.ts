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
  mounted() {
    // Close modal with esc key
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (this.visible && e.key.toLowerCase() === 'escape') {
        this.onClose?.();
      }
    });
  },
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