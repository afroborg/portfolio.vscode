<template>
  <div class="page__content">
    <div class="page__content__tabs">
      <router-link v-for="(tab, i) in tabs" :key="tab.path" :to="tab.path" class="page__content__tabs__tab" active-class="page__content__tabs__tab--active">
        <span>{{ tab.title }}</span>
        <i class="fal fa-times" @click="e => closeTab(e, i)" />
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts" src="./page-content.ts"></script>
<style lang="scss" src="./page-content.scss"></style>
