import React, {useState} from 'react'
import "../stylesheet/taskForm.css"
import { v4 as uuidv4 } from 'uuid'

export default function TaskForm(props) {

    const [input, setInput] = useState("");


    const changeDrive = e => {
        setInput(e.target.value);
    }

    const sendDrive = e =>{
        e.preventDefault();

        const newTask = {
        id: uuidv4(),
        text:input,
        completed: false
       }
       
       props.onSubmit(newTask);
    }

    return (
        <form action="" className="form"
        onSubmit={sendDrive}>
            <input
                type="text"
                className="input"
                placeholder="Write a task"
                name="text"
                onChange={changeDrive} />
            <button className="button">Add Task</button>
        </form>
    )
}
