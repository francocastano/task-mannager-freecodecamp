import React from 'react'
import "../stylesheet/task.css"
import { ImCross } from "react-icons/im";

export default function Task({ text, completed }) {
  return (
    <div className={completed ? "task-container completed" : "task-container"}>
        <div className="text">
            {text}
        </div>
        <div className="icons">
            <ImCross className='icon'/>
        </div>
    </div>
  )
}
