import NewTask from "~/components/tasks/NewTask";
import TaskList from "~/components/tasks/TaskList";
import { createTask, getTasks, updateTask, deleteTask } from '../services/taskService';
import { json } from "@remix-run/react";

export async function loader() {
  const tasks = await getTasks();
  return json(tasks);
}

export async function action({ request }) {
  const formData = await request.formData();

  const action = formData.get('action') as string;

  if (action === 'create') {
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const userId = parseInt(formData.get('userId') as string);
    const priority = formData.get('priority') as string;
    const status = formData.get('status') as string;

    const task = await createTask(title, description, userId, priority, status);
    return json(task);
  } else if (action === 'update') {
    const id = parseInt(formData.get('id') as string);
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const userId = parseInt(formData.get('userId') as string);
    const priority = formData.get('priority') as string;
    const status = formData.get('status') as string;

    const updatedTask = await updateTask(id, { title, description, userId, priority, status });
    return json(updatedTask);
  } else if (action === 'delete') {
    const id = parseInt(formData.get('id') as string);
    await deleteTask(id);
    return json({ message: 'Task deleted successfully' });
  } else {
    return json({ message: 'Invalid action' });
  }
}

export default function Index () {
  return (
    <div>
      <NewTask />
      <br />
      <h2 className="text-lg font-bold mb-4">YOUR TASKS</h2>
      <hr />
      <TaskList />
    </div>
  )
}