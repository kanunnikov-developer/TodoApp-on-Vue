import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { compliteTodoProvider, deleteTodoProvider, getTodosProvider } from "@/server";

export const useTodosStore = defineStore("todos", () => {
  const todos = ref([]);

  const completedTodos = computed(() => todos.value.filter((todo) => todo.checked));
  const workedTodos = computed(() => todos.value.filter((todo) => todo.checked === false));

  async function fetchTodos() {
    try {
      const data = await getTodosProvider();
      todos.value = data;
    } catch (error) {
      console.error("Error fetching todos in store: ", error);
    }
  }

  async function deleteTodo(id) {
    try {
      todos.value = todos.value.filter((todo) => todo.id !== id);
      await deleteTodoProvider(id);
    } catch (error) {
      console.error("Error delete todo in store: ", error);
    }
  }

  async function compliteTodo(todo) {
    try {
      const updatedTodo = await compliteTodoProvider(todo);
      const index = todos.value.findIndex((t) => t.id === todo.id);
      if (index !== -1) {
        todos.value[index] = updatedTodo;
      }
    } catch (error) {
      console.error("Error update todo in store: ", error);
    }
  }

  function updateTodoLocally(updatedTodo) {
    const index = todos.value.findIndex((t) => t.id === updatedTodo.id);
    if (index !== -1) {
      todos.value[index] = updatedTodo;
    }
  }

  function addTodo(newTodo) {
    todos.value.push(newTodo);
  }

  return { todos, completedTodos, workedTodos, fetchTodos, deleteTodo, compliteTodo, updateTodoLocally, addTodo };
});
