import { useEffect, useState } from "react"
import { getTasks, updateTask } from "~/services/taskService";
import TaskColumn from "./TaskColumn";

export default function TaskList() {
  //States
  const [tasks, setTasks] = useState<Task[]>();
  const[todoTasks, setTodoTask] = useState<Task[]>();
  const[inProgressTasks, setInProgressTask] = useState<Task[]>();
  const[doneTasks, setDoneTask] = useState<Task[]>();

  const [editTaskId, setEditTaskId] = useState<number | null>(null); // To keep on edit the task
  const [editValues, setEditValues] = useState<{ title: string; description: string }>({
    title: '',
    description: ''
  }); //To save the temporary values

  //interfaces
  interface Subtask {
    id: number;
    title: string;
    userId: string;
    priority: number;
    status: string;
  }

  interface Task {
    id: number;
    title: string;
    description: string;
    priority: number;
    status: string;
    userId: string;
    subtasks?: Subtask[];
  }

  // GET DATA FUNCTION
  const getData = async () => {
    try {
      const tasks = await getTasks();
      setTasks(tasks);

      const todoTasks = tasks.filter(task => task.status === 'Todo');
      const inProgressTasks = tasks.filter(task => task.status === 'InProgress');
      const doneTasks = tasks.filter(task => task.status === 'Done');

      setTodoTask(todoTasks);
      setInProgressTask(inProgressTasks);
      setDoneTask(doneTasks);

    } catch (error) {
      console.log(error);
      
    }
  }

  // EDIT MODE FUNCTION
  const startEditing = (task: Task) => {
    setEditTaskId(task.id);
    setEditValues({ title: task.title, description: task.description });
  };

  // HANDLE VALUES FUNCTION
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditValues({ ...editValues, [name]: value });
  };

  // SAVE THE TASK FUNCTION
  const saveTaskChanges = async (task: Task) => {
    try {
      await updateTask(task.id, editValues); // Service
      setEditTaskId(null); // Close edit mode
      getData(); // Refresh the web
    } catch (error) {
      console.log(error);
    }
  };

  //USE EFFECT TO RELOAD THE WEB
  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="grid grid-cols-3 gap-4">
    <TaskColumn
      title="Todo"
      tasks={todoTasks}
      editTaskId={editTaskId}
      editValues={editValues}
      startEditing={startEditing}
      handleInputChange={handleInputChange}
      saveTaskChanges={saveTaskChanges}
    />
    <TaskColumn
      title="In Progress"
      tasks={inProgressTasks}
      editTaskId={editTaskId}
      editValues={editValues}
      startEditing={startEditing}
      handleInputChange={handleInputChange}
      saveTaskChanges={saveTaskChanges}
    />
    <TaskColumn
      title="Done"
      tasks={doneTasks}
      editTaskId={editTaskId}
      editValues={editValues}
      startEditing={startEditing}
      handleInputChange={handleInputChange}
      saveTaskChanges={saveTaskChanges}
    />
  </div>
  );
}
