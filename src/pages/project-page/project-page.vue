<template>
  <div class="project__page">
    <h1>{{ project.name }}</h1>
    <div class="project__languages__list">
      <div v-for="language in project.languages" :key="language" class="project__language" :title="language">
        <icon :name="language" :size="24" />
      </div>
    </div>

    <div class="project__details">
      <h2>Details</h2>
      <div class="project__details__table table">
        <div class="table-row">
          <div class="table-column">Private:</div>
          <div class="table-column">
            <span :class="`indicator indicator--${project.isPrivate}`" />
            {{ project.isPrivate ? 'Yes' : 'No' }}
          </div>
        </div>

        <div class="table-row">
          <div class="table-column">Authentication:</div>
          <div class="table-column">
            <span :class="`indicator indicator--${project.hasAuthentication}`" />
            {{ project.hasAuthentication ? 'Yes' : 'No' }}
          </div>
        </div>

        <div class="table-row">
          <div class="table-column">Full-stack:</div>
          <div class="table-column">
            <span :class="`indicator indicator--${project.isFullStack}`" />
            {{ project.isFullStack ? 'Yes' : 'No' }}
          </div>
        </div>
      </div>
    </div>

    <div v-if="project.github && project.githubContent" class="project__lastest-commits">
      <h2>Latest commits</h2>
      <div class="lastest-commits__list">
        <div v-for="(commit, i) in project.githubContent.commits" :key="`commit--${i}`" class="commit">
          <div class="commit__avatar">
            <img :src="commit.author.photoUrl" />
          </div>

          <div class="commit__info">
            <div class="commit__message">
              {{ commit.message }}
            </div>

            <div class="commmit__authored">
              <span>
                <a :href="commit.author.url" target="_blank" rel="norefferer">{{ commit.author.name }}</a>
                authored {{ toDaysSince(commit.date) }}
              </span>
            </div>
          </div>

          <div class="commit__link">
            <a :href="commit.url" target="_blank" rel="norefferer">
              <i class="far fa-external-link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./project-page.ts"></script>
<style lang="scss" src="./project-page.scss"></style>
