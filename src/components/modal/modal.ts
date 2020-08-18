import { defineComponent, onMounted, ref } from 'vue';

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
  setup(props) {
    const expanded = ref(false);
    const expand = () => expanded.value = !expanded.value;
    const close = () => props.onClose?.();
    const ok = () => props.onOk?.();

    onMounted(() => {
      // Close modal with esc key
      document.addEventListener('keydown', (e: KeyboardEvent) => {
        if (props.visible && e.key.toLowerCase() === 'escape') {
          close();
        }
      });
    });

    return {
      expanded,
      expand,
      close,
      ok
    };
  },
});