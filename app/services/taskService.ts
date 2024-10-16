import { Task } from '@prisma/client';
import { createTask as createTaskOnServer, updateTask as updateTaskOnServer, deleteTask as deleteTaskOnServer, getTasks as getTasksFromServer } from '../../server/services/taskService.server';

export async function createTask(title: string, description: string, userId: number, priority: string, status: string) {
  if (!title || !description || !userId || !priority || !status) {
    throw new Error('All fields are required');
  }

  return await createTaskOnServer(title, description, userId, priority, status);
}

export async function getTasks() {
  return await getTasksFromServer();
}

export async function updateTask(id: number, data: Partial<Omit<Task, 'id'>>) {
  if (!id || !data) {
    throw new Error('All fields are required');
  }

  return await updateTaskOnServer(id, data);
}

export async function deleteTask(id: number) {
  if (!id) {
    throw new Error('Id required');
  }

  return await deleteTaskOnServer(id);
}
