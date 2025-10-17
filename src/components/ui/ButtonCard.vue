<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button class="btn" :disabled="props.disabled">
    {{ props.text }}
  </button>
</template>

<style scoped>
.btn {
  background: var(--dark-color);
  color: var(--background);
  padding: 10px 15px;
  font-weight: 400;
  font-size: 14px;
  border: 1px solid var(--dark-color);
  border-radius: 5px;
  transition: all 0.15s ease-in;
}

.btn:hover {
  background: var(--hover-color);
}

.btn:disabled {
  opacity: 50%;
  cursor: default;
}

.btn:disabled:hover {
  background: var(--dark-color);
}
</style>
