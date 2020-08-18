<template>
  <div class="projects-list__item__wrapper">
    <div :class="`projects-list__item ${expanded ? 'projects-list__item--expanded' : ''}`">
      <div class="projects-list__item__header" @click="toggle">
        <i class="fal fa-angle-right" />
        <icon v-if="languages.length" :name="languages[0]" />
        <span>{{ name }}</span>
      </div>

      <div class="projects-list__item__content">
        <router-link :to="`/projects/${id}/description`" @click="e => openTab(e, `/projects/${id}/description`)" class="projects-list__item__content__item" active-class="projects-list__item__content__item--active">
          <span>readme.md</span>
        </router-link>
        <a
          :href="!github ? '#' : `https://github.com/${github.user}/${github.repository}`"
          class="projects-list__item__content__item"
          :class="[!github && 'projects-list__item__content__item--disabled']"
          target="_blank"
          rel="norefferer">
          <span>github.html</span>
          <i v-if="!github || isPrivate" class="fal fa-lock-alt" />
        </a>
        <a :href="!demoUrl ? '#' : demoUrl" class="projects-list__item__content__item" :class="[!demoUrl && 'projects-list__item__content__item--disabled']" target="_blank" rel="norefferer">
          <span>demo.html</span>
          <i v-if="!demoUrl" class="fal fa-lock-alt" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./sidebar-project.ts"></script>
<style lang="scss" src="./sidebar-project.scss"></style>
