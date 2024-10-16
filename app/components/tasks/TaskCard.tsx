import { Task } from "@prisma/client";

interface TaskCardProps {
    task: Task;
    editTaskId: number | null;
    editValues: { title: string; description: string };
    startEditing: (task: Task) => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    saveTaskChanges: (task: Task) => void;
  }
  
const TaskCard: React.FC<TaskCardProps> = ({ task, editTaskId, editValues, startEditing, handleInputChange, saveTaskChanges }) => {
    return (
    <div key={task.id} className="bg-lightslategray rounded-md text-gray-700 border border-gray-300 p-4 m-2">
        {editTaskId === task.id ? (
        <>
            {/* Edit task */}
            <input
            name="title"
            value={editValues.title}
            onChange={handleInputChange}
            className="border p-2 mb-2 w-full"
            />
            <textarea
            name="description"
            value={editValues.description}
            onChange={handleInputChange}
            className="border p-2 mb-2 w-full"
            />
            <button onClick={() => saveTaskChanges(task)} className="bg-blue-500 text-white p-2">
            Save
            </button>
        </>
        ) : (
        <>
            {/* Task */}
            <button onClick={() => startEditing(task)}>
            <h5 className="font-semibold">{task.title}</h5>
            </button>
            <p>User: {task.userId}</p>
            <p>Description: {task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.status}</p>
        </>
        )}
        {/* Subtasks */}
        {task.subtasks && task.subtasks.map((subtask: Subtask) => (
        <div key={subtask.id} className="ml-4 mt-2">
            <h5 className="font-semibold">{subtask.title}</h5>
            <p>User: {subtask.userId}</p>
            <p>Priority: {subtask.priority}</p>
            <p>Status: {subtask.status}</p>
        </div>
        ))}
    </div>
    );
};

export default TaskCard;