<template>
  <div class="root__page">
    <div class="root__page__icons-wrapper">
      <icon
        v-for="icon in icons"
        :key="icon.icon"
        :name="icon.icon"
        :style="
          `top: ${icon.x}px; left: ${icon.y}px; animation-duration: ${icon.speed}ms`
        "
        class="root__page__icon"
        :size="32"
      />
    </div>

    <div class="root__page__arrow">
      <span>Check out my projects!</span>
    </div>

    <div class="root__page__hero">
      <div class="hero__text">
        <h2><span>Hello,</span> I'm Axel Froborg</h2>
        <h1>Web Developer</h1>
        <div to="#" class="hero__text-btn" @click="toggleContactModal">
          <i class="fal fa-paper-plane" />
          <span>Contact</span>
        </div>
      </div>
    </div>

    <keyboard-shortcuts />
  </div>

  <modal
    :visible="showContactModal"
    title="Contact"
    :on-ok="toggleContactModal"
    :on-close="toggleContactModal"
    :show-footer="false"
  >
    <contact />
  </modal>
</template>

<script lang="ts" src="./root-page.ts"></script>
<style lang="scss" src="./root-page.scss"></style>
