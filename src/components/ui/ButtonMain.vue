<script setup></script>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: left;
  padding: 15px 20px;
  color: var(--dark-color);
  font-weight: 500;
  font-size: 18px;
  border: 1px solid var(--background);
  border-radius: 5px;
  transition: all 0.15s ease-in;
}

.btn:hover {
  border: 1px solid var(--dark-color);
}
</style>
