<template>
  <div class="projects-list__item__wrapper">
    <div :class="`projects-list__item ${expanded ? 'projects-list__item--expanded' : ''}`">
      <div class="projects-list__item__header" @click="toggle">
        <i class="fal fa-angle-right" />
        <icon v-if="tags.length" :name="tags[0]" />
        <span>{{ name }}</span>
      </div>

      <div class="projects-list__item__content">
        <router-link :to="`/projects/${id}/description`" class="projects-list__item__content__item" active-class="projects-list__item__content__item--active">
          <span>description</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./sidebar-project.ts"></script>
<style lang="scss" src="./sidebar-project.scss"></style>
