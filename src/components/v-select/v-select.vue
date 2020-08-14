<template>
  <div class="v-select">
    <label v-if="label" :for="`v-select--${name}`">{{ label }}</label>
    <select v-if="options" :name="`v-select--${name}`" :id="`v-select--${name}`" @input="change">
      <option v-for="option in options" :key="option[keyProp]" :value="option[keyProp]" :selected="option[keyProp] === value">
        {{ option[valueProp] }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" src="./v-select.ts"></script>
<style lang="scss" src="./v-select.scss"></style>
