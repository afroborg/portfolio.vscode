<template>
  <div class="root__page__keyboard-shortcuts">
    <h2>Keyboard shortcuts</h2>
    <div class="keyboard__shortcuts__container">
      <div
        v-for="(shortcut, i) in shortcuts"
        :key="i"
        class="keyboard__shortcut"
      >
        <p>{{ shortcut.name }}</p>

        <div class="keyboard__shortcut__keys">
          <template v-for="(key, j) in shortcut.keys">
            <span :key="`shortcut-${i}__key-${key}`">{{ key }}</span>

            <template v-if="j !== shortcut.keys.length - 1">+</template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./keyboard-shortcuts.ts"></script>
<style lang="scss" src="./keyboard-shortcuts.scss"></style>
