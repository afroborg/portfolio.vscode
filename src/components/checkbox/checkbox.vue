<template>
  <div class="checkbox" @click="$emit('update:value', !value)">
    <input :name="`checkbox--${name}`" :id="`checkbox--${name}`" type="checkbox" style="display: none;" v-model="value" />
    <div class="checkbox__toggle" :class="{ 'checkbox__toggle--toggled': value }">
      <i class="far fa-check" />
    </div>
    <slot />
  </div>
</template>

<script lang="ts" src="./checkbox.ts"></script>
<style lang="scss" src="./checkbox.scss"></style>
