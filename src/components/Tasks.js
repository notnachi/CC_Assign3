import React, {useEffect} from 'react'
import { useTasks } from '../hooks';
import {Checkbox} from './Checkbox'
import { collatedTasks } from '../constants';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers';
import { useSelectedSubjectValue, useSubjectsValue } from '../context';
import { AddTask } from './AddTask';

export const Tasks = () => {

    const { selectedSubject } = useSelectedSubjectValue();
    const { subjects } = useSubjectsValue();
    const {tasks} = useTasks(selectedSubject)

    // console.log(selectedSubject)



    let subjectName = '';

    if (collatedTasksExist(selectedSubject) && selectedSubject) {
        subjectName = getCollatedTitle(collatedTasks, selectedSubject).name;
    }

    if (
        subjects &&
        subjects.length > 0 &&
        selectedSubject &&
        !collatedTasksExist(selectedSubject)
      ) {
          console.log('WHat is my subject name ' , getTitle(subjects, selectedSubject))
        subjectName = getTitle(subjects, selectedSubject).subject_name;
      }

    useEffect(() => {
        document.title = `${subjectName}: Todoist`;
      });

    return (
        <div className="tasks" data-testid="tasks">
            <h2 data-testid="project-name">{subjectName}</h2>

            <ul className="tasks__list">
                {tasks.map((task) => (
                <li key={`${task.task_id}`}>
                    <Checkbox id={task.task_id} taskDesc={task.task_desc} />
                    <span>{task.task_desc}</span>
                </li>
                ))}
            </ul>
            {/* <h1>Hi you will see tasks here</h1> */}
            <AddTask />
    </div>
    )
}
