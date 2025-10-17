import { COMPLITE_TODO_ID, CREATE_TODO, DELETE_TODO_ID, GET_TODOS_API } from "@/constans";
import axios from "axios";

export const getTodosProvider = async () => {
  try {
    const response = await axios.get(GET_TODOS_API);
    return response.data;
  } catch (error) {
    console.error("Error fetching todos in provider:", error);
  }
};

export const deleteTodoProvider = async (id) => {
  try {
    await axios.delete(`${DELETE_TODO_ID}/${id}`);
  } catch (error) {
    console.error("Error delete todo in provider:", error);
  }
};

export const compliteTodoProvider = async (todo) => {
  try {
    const updateTodo = {
      id: todo.id,
      title: todo.title,
      description: todo.description,
      status: "готово",
      checked: true,
    };
    const response = await axios.put(`${COMPLITE_TODO_ID}/${todo.id}`, updateTodo);
    return response.data;
  } catch (error) {
    console.error("Error update todo in provider:", error);
  }
};

export const updateTodoProvider = async (todo) => {
  try {
    const response = await axios.put(`${COMPLITE_TODO_ID}/${todo.id}`, todo);
    return response.data;
  } catch (error) {
    console.error("Error update todo in provider:", error);
  }
};

export const createTodoProvider = async (todo) => {
  try {
    const response = await axios.post(CREATE_TODO, todo);
    return response.data;
  } catch (error) {
    console.error("Error added todo in provider:", error);
  }
};
