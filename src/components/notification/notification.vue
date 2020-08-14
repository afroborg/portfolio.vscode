<template>
  <teleport to="#notification-teleport">
    <div class="notification" :class="`notification--${type}`">
      <div class="notification__close-btn"></div>
      <div class="notification__content">
        <div class="notification__header">
          {{ header }}
        </div>
        <div class="notification__body">
          {{ body }}
        </div>
      </div>
      <div class="notification__indicator" :class="`notification__indicator--${type}`"></div>
    </div>
  </teleport>
</template>

<script lang="ts" src="./notification.ts"></script>
<style lang="scss" src="./notification.scss"></style>
