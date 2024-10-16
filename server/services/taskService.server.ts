import { Task } from '@prisma/client';
import prisma from '../db/db.server';

//New task
export async function createTask(title: string, description: string, userId: number, priority: string, status: string) {
  const task = await prisma.task.create({
    data: {
      title,
      description,
      userId,
      priority,
      status,
    },
  });
  return task;
}

//Get all tasks
export async function getTasks() {
  const tasks = await prisma.task.findMany({
    include: { subtasks: true },
  });
  return tasks;
}

// Update Task
export async function updateTask(id: number, data: Partial<Omit<Task, 'id'>>) {
  const updatedTask = await prisma.task.update({
    where: { id },
    data,
  });
  return updatedTask;
}

// Delete task
export async function deleteTask(id: number) {
  await prisma.task.delete({
    where: { id },
  });
}
