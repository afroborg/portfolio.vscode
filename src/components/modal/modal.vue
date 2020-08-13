<template>
  <div class="modal__wrapper" :class="{ 'modal__wrapper--visible': visible }">
    <div class="modal__outside" @click="close" />

    <div class="modal" :class="{ 'modal--visible': visible, 'modal--expanded': expanded }" ref="modal">
      <div class="modal-header">
        <div class="modal-header__actions">
          <div class="mac-button mac-button--close" @click="close" />
          <div class="mac-button mac-button--minimize" />
          <div class="mac-button mac-button--expand" @click="expand" />
        </div>

        <div class="modal-header__title">
          <span>{{ title }}</span>
        </div>
      </div>

      <div class="modal-content">
        <slot />
      </div>

      <div v-if="showFooter" class="modal-footer">
        <div class="modal-footer__actions">
          <div class="modal-footer__btn modal-footer__btn--ok" @click="ok">
            <span>{{ okText }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./modal.ts"></script>
<style lang="scss" src="./modal.scss"></style>
