<template>
  <div class="root__page">
    <div class="root__page__icons-wrapper">
      <icon v-for="icon in icons" :key="icon.icon" :name="icon.icon" :style="`top: ${icon.x}px; left: ${icon.y}px; animation-duration: ${icon.speed}ms`" class="root__page__icon" :size="32" />
    </div>

    <div class="root__page__hero">
      <div class="hero__text">
        <h2><span>Hello,</span> I'm Axel Froborg</h2>
        <h1>Web Developer</h1>
        <router-link to="#" class="hero__text-btn">
          <i class="fal fa-paper-plane" />
          <span>Contact</span>
        </router-link>
      </div>
    </div>

    <div class="root__page__keyboard-shortcuts">
      <h2>Keyboard shortcuts</h2>
      <div class="keyboard__shortcuts__container">
        <div class="keyboard__shortcut">
          <p>Change theme</p>
          <div class="keyboard__shortcut__keys">
            <span>Alt</span>
            +
            <span>T</span>
          </div>
        </div>

        <div class="keyboard__shortcut">
          <p>Close tab</p>
          <div class="keyboard__shortcut__keys">
            <span>Alt</span>
            +
            <span>W</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./root-page.ts"></script>
<style lang="scss" src="./root-page.scss"></style>
