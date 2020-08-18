<template>
  <img :src="svg" :height="size" :width="size" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'icon',
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 16
    }
  },
  setup(props) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const svg = require(`../../assets/languages/${props.name}.svg`);
    return {
      svg
    };
  },
});
</script>
