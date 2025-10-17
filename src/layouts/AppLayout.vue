<script setup>
import AppMenu from "./AppMenu.vue";
</script>

<template>
  <div class="root">
    <div class="menu">
      <AppMenu />
    </div>
    <main class="main">
      <div class="header">
        <div class="title"><slot name="title"></slot></div>
        <div class="description"><slot name="description"></slot></div>
      </div>
      <div class="content"><slot name="content"></slot></div>
    </main>
  </div>
</template>

<style scoped>
.menu {
  width: 310px;
  height: 100vh;
  border-right: 1px solid var(--border);
  position: sticky; /* ← добавляем */
  top: 0; /* ← прилипает к верху */
  align-self: flex-start; /* ← важно для sticky */
}

.root {
  display: flex;
}

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 40px 30px 30px;
  border-bottom: 1px solid var(--border);
}

.title {
  font-size: 34px;
}

.description {
  font-size: 18px;
  font-weight: 400;
  color: var(--description-text-color);
}

.content {
  padding: 30px;
}
</style>
