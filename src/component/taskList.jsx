import React, {useState} from  "react";
import "../stylesheet/taskList.css"
import Task from "./task";
import TaskForm from "./taskForm";

function TaskList() {

    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        if(task.text.trim()){
            task.text = task.text.trim();

            const updateTasks = [task, ...tasks];
            setTasks(updateTasks);
        }
    }

    const deleteTask = id => {
        const updateTasks = tasks.filter(task => task.id !== id);
        setTasks(updateTasks);
    }

    const completedTask = id => {
       const updateTasks = tasks.map(task => {
            if(task.id === id){
                task.completed = !task.completed;
            }
            return task
       });
       setTasks(updateTasks)
    }

    return (
        <>
            <TaskForm onSubmit={addTask} />
            <div className="tasks-list-container">
               {
                tasks.map((task) => 
                <Task
                key={task.id}
                id={task.id}
                text={task.text} 
                completed={task.completed}
                taskCompleted={completedTask}
                taskDeleted={deleteTask} />
                )
               }
            </div>
        </>
    );
}

export default TaskList;