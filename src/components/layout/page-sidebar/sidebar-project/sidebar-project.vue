<template>
  <div class="projects-list__item__wrapper">
    <div :class="`projects-list__item ${expanded ? 'projects-list__item--expanded' : ''}`">
      <div class="projects-list__item__header" @click="toggle">
        <i class="fal fa-angle-right" />
        <icon v-if="tags.length" :name="tags[0]" />
        <span>{{ name }}</span>
      </div>

      <div class="projects-list__item__content">
        <router-link :to="`/projects/${id}/description`" @click="e => openTab(e, `/projects/${id}/description`)" class="projects-list__item__content__item" active-class="projects-list__item__content__item--active">
          <span>readme.md</span>
        </router-link>
        <a
          :href="!github || isPrivate ? '#' : `https://github.com/${github.user}/${github.repository}`"
          class="projects-list__item__content__item"
          :class="[(!github || isPrivate) && 'projects-list__item__content__item--disabled']"
          target="_blank"
          rel="norefferer">
          <span>github.html</span>
          <i v-if="!github || isPrivate" class="fal fa-lock-alt" />
        </a>
        <a :href="!demo ? '#' : demo" class="projects-list__item__content__item" :class="[!demo && 'projects-list__item__content__item--disabled']" target="_blank" rel="norefferer">
          <span>demo.html</span>
          <i v-if="!demo" class="fal fa-lock-alt" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./sidebar-project.ts"></script>
<style lang="scss" src="./sidebar-project.scss"></style>
