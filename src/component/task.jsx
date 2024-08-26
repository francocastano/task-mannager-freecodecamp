import React from 'react'
import "../stylesheet/task.css"
import { ImCross } from "react-icons/im";

export default function Task({ id, text, completed, taskCompleted, taskDeleted }) {
  return (
    <div className={completed ? "task-container completed" : "task-container"}>
        <div className="text"
        onClick={() => taskCompleted(id)}>
            {text}
        </div>
        <div className="icons"
        onClick={() => taskDeleted(id)}>
            <ImCross className='icon'/>
        </div>
    </div>
  )
}
