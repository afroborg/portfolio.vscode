<template>
  <div class="page-settings">
    <v-select :value="theme" @change="setTheme" :options="themes" name="theme-select" label="Theme" />
  </div>
</template>

<script lang="ts" src="./page-settings.ts"></script>
<style lang="scss" src="./page-settings.scss"></style>
