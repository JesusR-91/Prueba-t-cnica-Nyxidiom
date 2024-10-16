import { Form } from "@remix-run/react";
import { useState } from "react"
import { createTask } from "~/services/taskService";

export default function NewTask() {
  //States
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  
  //Handles
  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };
  const handlePriority = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriority(event.target.value);
  }
  const handleStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  }

  //SaveTask
  const saveTask = async () => {
    try {
      await createTask({title, description, userId: 1, priority, status});
    } catch (error) {
      console.log(error);      
    }
  };


  return (
    <Form action="create" onSubmit={saveTask} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full md:w-1/2 mx-auto">
      <h2 className="text-gray-700 font-bold mb-2">Add new task</h2>
      <div className="flex flex-row gap-4"> 
        <div className="flex flex-col"> 
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
          <input type="text" name="title" value={title} onChange={handleTitle} className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"/>
        </div>
        <div className="flex flex-col"> 
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
          <textarea name="description" onChange={handleDescription} value={description} className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline resize-none"></textarea>
        </div>
        <div className="flex flex-col"> 
          <label htmlFor="priority" className="block text-gray-700 font-bold mb-2">Priority</label>
          <select name="priority" onChange={handlePriority} className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="flex flex-col"> 
          <label htmlFor="status" className="block text-gray-700 font-bold mb-2">Status</label>
          <select name="status" onChange={handleStatus} className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="Done">Done</option>
            <option value="InProgress">Work in progress</option>
            <option value="Todo">To do</option>
          </select>
        </div>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4  md:w-1/4 mx-auto" >Create</button>
    </Form>

  )
}
