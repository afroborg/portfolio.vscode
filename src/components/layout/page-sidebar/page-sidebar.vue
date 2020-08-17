<template>
  <div class="page__sidebar">
    <div class="page__inner-sidebar">
      <span v-for="link in innerLinks" :key="link.path">
        <router-link v-if="!link.path.includes('http')" :to="link.path" class="inner-sidebar__link" active-class="inner-sidebar__link--active">
          <i :class="link.icon" />
        </router-link>

        <a v-else :href="link.path" class="inner-sidebar__link" target="_blank" rel="_norefferer">
          <i :class="link.icon" />
        </a>
      </span>
      <div class="inner-sidebar__link inner-sidebar__link--settings" :class="{ 'inner-sidebar__link--active': showSettingsModal }" @click="toggleSettingsModal">
        <i class="fal fa-cog" />
      </div>
    </div>

    <div class="page__sidebar__projects" :class="{ 'page__sidebar__projects--expanded': projectsExpanded }">
      <div class="projects__header" @click="expandProjects">
        <h2>projects</h2>
        <div class="projects__filter" @click="toggleFilterModal">
          <i class="far fa-filter" />
        </div>
        <div class="projects__expand">
          <i class="fas" :class="{ 'fa-angle-down': !projectsExpanded, 'fa-angle-up': projectsExpanded }" />
        </div>
      </div>
      <div class="projects-list">
        <loader v-if="isLoading" message="Loading projects..." />

        <template v-else>
          <sidebar-project v-for="project in projects" :key="project.name" v-bind="project" />
        </template>
      </div>
    </div>

    <modal :visible="showFilterModal" :on-close="toggleFilterModal" title="Filter projects" ok-text="Save" :show-footer="false">
      <h3>Languages</h3>
      <checkbox v-for="filter in filters" :key="filter.name" v-model:value="filter.enabled" :name="filter.name">
        <div class="sidebar__checkbox__content">
          <icon :name="filter.icon" />
          <span>{{ filter.name }}</span>
        </div>
      </checkbox>
    </modal>

    <modal :visible="showSettingsModal" :on-close="toggleSettingsModal" title="Page settings" ok-text="Save" :show-footer="false">
      <page-settings />
    </modal>
  </div>
</template>

<script lang="ts" src="./page-sidebar.ts"></script>
<style lang="scss" src="./page-sidebar.scss"></style>
