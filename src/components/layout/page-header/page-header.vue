<template>
  <div class="page__header">
    <div class="page__header__mac-buttons">
      <div class="mac-button mac-button--close" />
      <div class="mac-button mac-button--minimize" @click="minimize" />
      <div class="mac-button mac-button--expand" @click="maximize" />
    </div>
    <div class="page__header__name">
      <span>{{ header }}</span>
    </div>
  </div>
</template>

<script lang="ts" src="./page-header.ts"></script>
<style lang="scss" src="./page-header.scss"></style>
