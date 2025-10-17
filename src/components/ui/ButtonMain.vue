<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <button class="btn">
    {{ props.text }}
  </button>
</template>

<style scoped>
.btn {
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
