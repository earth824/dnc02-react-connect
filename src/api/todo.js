import { api } from './client';

export const getAllTodo = async () => {
  const { data } = await api.get('/todos');
  return data.todos;
};
