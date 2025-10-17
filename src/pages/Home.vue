<script setup>
import CardsList from "@/components/CardsList.vue";
import AppLayout from "@/layouts/AppLayout.vue";
</script>

<template>
  <AppLayout>
    <template #title>Добро пожаловать!</template>
    <template #description>Тут оборажен список всех созданных вами задач</template>
    <template #content>
      <CardsList />
    </template>
  </AppLayout>
</template>

<style scoped></style>
