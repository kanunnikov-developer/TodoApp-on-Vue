import { updateTodoProvider } from "@/server";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useTodosStore } from "./todos.store";

export const useModalEditStore = defineStore("edit", () => {
  const isOpenModalEditTodo = ref(false);
  const currentTodo = ref();

  function openModalEditTodo(todo) {
    currentTodo.value = { ...todo };
    isOpenModalEditTodo.value = true;
  }

  function closeModalEditTodo() {
    isOpenModalEditTodo.value = false;
    currentTodo.value = null;
  }

  async function updateTodo(todo) {
    try {
      await updateTodoProvider(todo);

      // обновляем в основном store
      const todoStore = useTodosStore();
      todoStore.updateTodoLocally(todo);

      closeModalEditTodo();
    } catch (error) {
      console.error("Error update todo in store: ", error);
    }
  }

  return { isOpenModalEditTodo, currentTodo, openModalEditTodo, closeModalEditTodo, updateTodo };
});
