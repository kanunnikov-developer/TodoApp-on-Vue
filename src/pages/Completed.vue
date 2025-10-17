<script setup lang="ts">
import CardsList from "@/components/CardsList.vue";
import AppLayout from "@/layouts/AppLayout.vue";
import { useTodosStore } from "@/stores/todos.store";

const todosStore = useTodosStore();
</script>

<template>
  <AppLayout>
    <template #title>Выполненные задачи</template>
    <template #description>Тут оборажен список всех выполненных вами задач</template>
    <template #content>
      <CardsList :todos="todosStore.completedTodos" />
    </template>
  </AppLayout>
</template>
