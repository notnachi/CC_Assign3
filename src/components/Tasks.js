import React from 'react'
import { useTasks } from '../hooks';
import {Checkbox} from './Checkbox'

export const Tasks = () => {
    const {tasks} = useTasks("TODAY")

    console.log(tasks)
    let projectName = '';
    return (
        <div className="tasks" data-testid="tasks">
            <h2 data-testid="project-name">{projectName}</h2>

            <ul className="tasks__list">
                {tasks.map((task) => (
                <li key={`${task.task_id}`}>
                    <Checkbox id={task.task_id} taskDesc={task.task_desc} />
                    <span>{task.task_desc}</span>
                </li>
                ))}
            </ul>
            {/* <h1>Hi you will see tasks here</h1> */}
    </div>
    )
}
