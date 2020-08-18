<template>
  <teleport to="#notification-teleport">
    <div v-for="(notification, i) in notifications" :key="`notification--${i}`" class="notification" :class="`notification--${notification.type}`">
      <div class="notification__close-btn" @click="remove(i)"></div>
      <div class="notification__content">
        <div class="notification__header">
          {{ notification.header }}
        </div>
        <div class="notification__body">
          {{ notification.body }}
        </div>
      </div>
      <div class="notification__indicator" :class="`notification__indicator--${notification.type}`"></div>
    </div>
  </teleport>
</template>

<script lang="ts" src="./notification.ts"></script>
<style lang="scss" src="./notification.scss"></style>
