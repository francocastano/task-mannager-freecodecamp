import React, {useState} from  "react";
import "../stylesheet/taskList.css"
import Task from "./task";
import TaskForm from "./taskForm";

function TaskList() {

    const {tasks, setTasks} = useState([]);

    return (
        <>
            <TaskForm></TaskForm>
            <div className="task-list-container">
               {
                tasks.map((task) => <Task text={task.text} />)
               }
            </div>
        </>
    );
}

export default TaskList;