<script setup lang="ts">
import { computed, onMounted } from "vue";
import Card from "./Card.vue";
import { useTodosStore } from "@/stores/todos.store";
import ModalEditTodo from "./ModalEditTodo.vue";
import { useModalEditStore } from "@/stores/modalEditTodo.store";
import { useCreateTodo } from "@/stores/modalCreateTodo.store";
import ModalCreateTodo from "./ModalCreateTodo.vue";

const props = defineProps({
  todos: {
    type: Array,
    default: null,
  },
});

const todosStore = useTodosStore();
const modalEditStore = useModalEditStore();
const modalCreateStore = useCreateTodo();

const displayTodos = computed(() => props.todos || todosStore.todos);

onMounted(() => {
  if (!props.todos) {
    todosStore.fetchTodos();
  }
});
</script>

<template>
  <div class="cardsList">
    <Card v-for="todo in displayTodos" :key="todo.id" :todo="todo" />
    <ModalEditTodo v-if="modalEditStore.isOpenModalEditTodo" :todo="modalEditStore.currentTodo" />
    <ModalCreateTodo v-if="modalCreateStore.isOpenModal" />
  </div>
</template>

<style scoped>
.cardsList {
  display: flex;
  align-items: stretch;
  gap: 30px;
  flex-wrap: wrap;
}
</style>
