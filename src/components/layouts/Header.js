import React, {useState} from 'react'
import { FaPizzaSlice } from 'react-icons/fa';
import { AddTask } from '../AddTask';

export const Header = () => {
    const [shouldShowMain, setShouldShowMain] = useState(false);
    const [showQuickAddTask, setShowQuickAddTask] = useState(false);

    return (
        <header className="header" data-testid="header">
        <nav>
            <div className="logo">
                Add logo here
            </div>
            <div className="settings">
            <ul>
                <li className="settings__add">
                <button
                    data-testid="quick-add-task-action"
                    aria-label="Quick add task"
                    type="button"
                    onClick={() => {
                    setShowQuickAddTask(true);
                    setShouldShowMain(true);
                    }}
                >
                    +
                </button>
                </li>
                <li className="settings__darkmode">
                <button
                    data-testid="dark-mode-action"
                    aria-label="Darkmode on/off"
                    type="button"
                    //onClick={() => setDarkMode(!darkMode)}
                >
                    <FaPizzaSlice />
                </button>
                </li>
            </ul>
            </div>
        </nav>

        <AddTask
            showAddTaskMain={false}
            shouldShowMain={shouldShowMain}
            showQuickAddTask={showQuickAddTask}
            setShowQuickAddTask={setShowQuickAddTask}
        />
    </header>
    )
}
