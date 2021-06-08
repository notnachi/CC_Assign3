import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSubjectsValue } from '../context';

export const AddSubject = ({shouldShow = false}) => {
    const [show, setShow] = useState(shouldShow);
    const [subjectName, setSubjectName] = useState('');

    const newID = uuidv4();

    const {subjects, setSubjects} = useSubjectsValue();


    /**check if there is a method to add subject in dynamo service */


    return (
        <div className="add-project" data-testid="add-project">
        {show && (
            <div className="add-project__input" data-testid="add-project-inner">
            <input
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}
                className="add-project__name"
                data-testid="project-name"
                type="text"
                placeholder="Name your project"
            />
            <button
                className="add-project__submit"
                type="button"
                //onClick={() => addProject()}
                data-testid="add-project-submit"
            >
                Add Subject
            </button>
            <span
                aria-label="Cancel adding project"
                data-testid="hide-project-overlay"
                className="add-project__cancel"
                onClick={() => setShow(false)}
                onKeyDown={(e) => {
                if (e.key === 'Enter') setShow(false);
                }}
                role="button"
                tabIndex={0}
            >
                Cancel
            </span>
            </div>
        )}
        <span className="add-project__plus">+</span>
        <span
            aria-label="Add Project"
            data-testid="add-project-action"
            className="add-project__text"
            onClick={() => setShow(!show)}
            onKeyDown={(e) => {
            if (e.key === 'Enter') setShow(!show);
            }}
            role="button"
            tabIndex={0}
        >
            Add Project
        </span>
    </div>
    )
}