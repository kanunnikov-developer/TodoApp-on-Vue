<script setup lang="ts">
import { useTodosStore } from "@/stores/todos.store";
import ButtonCard from "./ui/ButtonCard.vue";
import DeleteIcon from "./ui/icons/deleteIcon.vue";
import { useModalEditStore } from "@/stores/modalEditTodo.store";
const props = defineProps({
  todo: {
    type: Object,
  },
});

const todosStore = useTodosStore();
const modalEditStore = useModalEditStore();
</script>

<template>
  <div class="card">
    <div class="text">
      <div class="title">{{ props.todo.title }}</div>
      <div class="status">{{ props.todo.status }}</div>
      <div class="description">{{ props.todo.description }}</div>
    </div>
    <div class="controls">
      <div class="edit">
        <ButtonCard text="Выполнить" :disabled="props.todo.checked" @click="todosStore.compliteTodo(props.todo)" />
        <ButtonCard text="Изменить" class="deleteBtn" :disabled="props.todo.checked" @click="modalEditStore.openModalEditTodo(props.todo)" />
      </div>
      <DeleteIcon @click="todosStore.deleteTodo(props.todo.id)" />
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 350px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--border);
  border-radius: 10px;
}

.title {
  font-size: 18px;
  margin-bottom: 5px;
}

.status {
  font-size: 12px;
  font-weight: 400;
  color: var(--secondary-color);
  margin-bottom: 15px;
}

.description {
  font-size: 14px;
  font-weight: 400;
  color: var(--description-text-color);
  margin-bottom: 25px;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.edit {
  display: flex;
  align-items: center;
  gap: 10px;
}

.deleteBtn {
  background: none;
  color: var(--dark-color);
}

.deleteBtn:disabled:hover {
  background: none;
  color: var(--dark-color);
}

.deleteBtn:hover {
  background: var(--dark-color);
  color: var(--background);
}
</style>
