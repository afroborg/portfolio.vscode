<template>
  <div class="loader">
    <i class="far fa-spinner-third fa-spin" />
    <div v-if="message" class="loader__message">{{ message }}</div>
  </div>
</template>

<script lang="ts" src="./loader.ts"></script>
<style lang="scss" src="./loader.scss"></style>
