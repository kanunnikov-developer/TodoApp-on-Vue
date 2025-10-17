<script setup>
import ButtonMain from "@/components/ui/ButtonMain.vue";
import DoneIcon from "@/components/ui/icons/doneIcon.vue";
import TasksIcon from "@/components/ui/icons/tasksIcon.vue";
import WorkIcon from "@/components/ui/icons/workIcon.vue";
import { ROUTER_PATH } from "@/constans";
import { useCreateTodo } from "@/stores/modalCreateTodo.store";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const createTodoStore = useCreateTodo();

const isPathActive = (path) => {
  return route.path === path;
};
</script>

<template>
  <div class="menu">
    <div class="title">
      <div>Главное меню</div>
      <img src="/createTodoIcon.svg" alt="createToDo" class="createTodo" @click="createTodoStore.openModalCreateTodo" />
    </div>
    <div class="navigation">
      <ButtonMain :class="isPathActive(ROUTER_PATH.HOME) && 'active'" @click="router.push(ROUTER_PATH.HOME)">
        <TasksIcon class="icon" /> Все задачи
      </ButtonMain>
      <ButtonMain :class="isPathActive(ROUTER_PATH.COMPLETED) && 'active'" @click="router.push(ROUTER_PATH.COMPLETED)">
        <DoneIcon class="icon" /> Выполненные
      </ButtonMain>
      <ButtonMain :class="isPathActive(ROUTER_PATH.WORKED) && 'active'" @click="router.push(ROUTER_PATH.WORKED)">
        <WorkIcon class="icon" /> В работе
      </ButtonMain>
    </div>
  </div>
</template>

<style scoped>
.menu {
  padding: 40px 30px;
}

.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navigation {
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.active {
  border: 1px solid var(--dark-color);
  background: var(--dark-color);
  color: var(--background);
}

.createTodo {
  cursor: pointer;
  transition: all 0.1s ease-in;
}

.createTodo:hover {
  opacity: 50%;
}

.icon {
  width: 23px;
}
</style>
