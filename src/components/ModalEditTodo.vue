<script setup>
import { useModalEditStore } from "@/stores/modalEditTodo.store";
import ButtonCard from "./ui/ButtonCard.vue";
import { ref, watch } from "vue";

const modalEditStore = useModalEditStore();

const props = defineProps({
  todo: {
    type: Object,
    default: null,
  },
});

const formData = ref({
  title: "",
  description: "",
  status: "",
});

watch(
  () => props.todo,
  (newTodo) => {
    if (newTodo) {
      formData.value = {
        title: newTodo.title,
        description: newTodo.description,
        status: newTodo.status,
      };
    }
  },
  { immediate: true }
);

function submitForm(e) {
  e.preventDefault();

  const updateTodo = {
    id: props.todo.id,
    title: formData.value.title,
    description: formData.value.description,
    status: formData.value.status,
    checked: formData.value.status === "готово",
  };

  modalEditStore.updateTodo(updateTodo);
}
</script>

<template>
  <div class="modal-overlay">
    <div class="modal">
      <button class="back" @click="modalEditStore.closeModalEditTodo">Назад</button>
      <div class="title">Изменить задачу</div>
      <form class="form" @submit="submitForm">
        <div class="label">
          Название
          <input type="text" class="input" v-model="formData.title" />
        </div>
        <div class="label">
          Описание
          <input type="text" class="input" v-model="formData.description" />
        </div>
        <div class="label">
          Статус
          <select class="input" v-model="formData.status">
            <option value="в работе">в работе</option>
            <option value="готово">готово</option>
          </select>
        </div>
        <ButtonCard text="Сохранить" />
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  width: 350px;
  background: var(--background);
  padding: 20px 30px;
  border-radius: 10px;
  z-index: 1001;
}

.back {
  font-size: 12px;
  font-weight: 400;
  color: var(--description-text-color);
  margin-bottom: 15px;
}

.title {
  font-size: 22px;
  margin-bottom: 30px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.label {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input {
  padding: 10px 15px;
  border: 1px solid var(--border);
  border-radius: 5px;
}
</style>
