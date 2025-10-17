import { createTodoProvider } from "@/server";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useTodosStore } from "./todos.store";

export const useCreateTodo = defineStore("", () => {
  const isOpenModal = ref(false);

  function openModalCreateTodo() {
    isOpenModal.value = !isOpenModal.value;
  }

  async function createTodo(todo) {
    try {
      const newTodo = await createTodoProvider(todo);

      const todoStore = useTodosStore();
      todoStore.addTodo(newTodo);

      openModalCreateTodo();
    } catch (error) {
      console.log("Created todo is 404");
    }
  }

  return { isOpenModal, openModalCreateTodo, createTodo };
});
