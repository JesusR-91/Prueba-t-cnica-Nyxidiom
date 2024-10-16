interface TaskColumnProps {
    title: string;
    tasks: Task[] | undefined;
    editTaskId: number | null;
    editValues: { title: string; description: string };
    startEditing: (task: Task) => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    saveTaskChanges: (task: Task) => void;
  }
  
const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks, editTaskId, editValues, startEditing, handleInputChange, saveTaskChanges }) => {
    return (
        <div className="bg-white rounded-md text-gray-700 border border-gray-300 p-4 m-2">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        {tasks && tasks.length > 0 ? (
            tasks.map((task: Task) => (
            <TaskCard
                key={task.id}
                task={task}
                editTaskId={editTaskId}
                editValues={editValues}
                startEditing={startEditing}
                handleInputChange={handleInputChange}
                saveTaskChanges={saveTaskChanges}
            />
            ))
        ) : (
            <p>No tasks yet</p>
        )}
        </div>
    );
};

export default TaskColumn;
  