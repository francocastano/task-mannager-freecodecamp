import React from 'react'
import "../stylesheet/taskForm.css"

export default function TaskForm() {
    return (
        <form action="" className="form">
            <input
                type="text"
                className="input"
                placeholder="Write a task"
                name="text" />
            <button className="button">Add Task</button>
        </form>
    )
}
