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
  data: () => ({
    svg: ''
  }),
  mounted() {
    this.svg = require(`../../assets/languages/${this.name}.svg`);
  }
});
</script>
