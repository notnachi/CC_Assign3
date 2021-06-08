import React, { useState } from 'react';
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa';
import moment from 'moment';
import { useSelectedSubjectValue } from '../context';
import { SubjectOverlay } from './SubjectOverlay';
import { TaskDate } from './TaskDate';

export const AddTask = ({
    showAddTaskMain = true,
    shouldShowMain = false,
    showQuickAddTask,
    setShowQuickAddTask,
  }) =>{

    const [task, setTask] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [subject, setSubject] = useState('');
    const [showMain, setShowMain] = useState(shouldShowMain);
    const [showSubjectOverlay, setShowSubjectOverlay] = useState(false);
    const [showTaskDate, setShowTaskDate] = useState(false);


    const { selectedSubject } = useSelectedSubjectValue();

    const addTask = () => {
        return true;
    }

    return (
        <div
          className={showQuickAddTask ? 'add-task add-task__overlay' : 'add-task'}
          data-testid="add-task-comp"
        >
          {showAddTaskMain && (
            <div
              className="add-task__shallow"
              data-testid="show-main-action"
              onClick={() => setShowMain(!showMain)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setShowMain(!showMain);
              }}
              tabIndex={0}
              aria-label="Add task"
              role="button"
            >
              <span className="add-task__plus">+</span>
              <span className="add-task__text">Add Task</span>
            </div>
          )}
    
          {(showMain || showQuickAddTask) && (
            <div className="add-task__main" data-testid="add-task-main">
              {showQuickAddTask && (
                <>
                  <div data-testid="quick-add-task">
                    <h2 className="header">Quick Add Task</h2>
                    <span
                      className="add-task__cancel-x"
                      data-testid="add-task-quick-cancel"
                      aria-label="Cancel adding task"
                      onClick={() => {
                        setShowMain(false);
                        setShowSubjectOverlay(false);
                        setShowQuickAddTask(false);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          setShowMain(false);
                          setShowSubjectOverlay(false);
                          setShowQuickAddTask(false);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                    >
                      X
                    </span>
                  </div>
                </>
              )}
              <SubjectOverlay
                setSubject={setSubject}
                showSubjectOverlay={showSubjectOverlay}
                setShowSubjectOverlay={setShowSubjectOverlay}
              />
              <TaskDate
                setTaskDate={setTaskDate}
                showTaskDate={showTaskDate}
                setShowTaskDate={setShowTaskDate}
              />
              <input
                className="add-task__content"
                aria-label="Enter your task"
                data-testid="add-task-content"
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <button
                type="button"
                className="add-task__submit"
                data-testid="add-task"
                onClick={() =>
                  showQuickAddTask
                    ? addTask() && setShowQuickAddTask(false)
                    : addTask()
                }
              >
                Add Task
              </button>
              {!showQuickAddTask && (
                <span
                  className="add-task__cancel"
                  data-testid="add-task-main-cancel"
                  onClick={() => {
                    setShowMain(false);
                    setShowSubjectOverlay(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setShowMain(false);
                      setShowSubjectOverlay(false);
                    }
                  }}
                  aria-label="Cancel adding a task"
                  tabIndex={0}
                  role="button"
                >
                  Cancel
                </span>
              )}
              <span
                className="add-task__project"
                data-testid="show-project-overlay"
                onClick={() => setShowSubjectOverlay(!showSubjectOverlay)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setShowSubjectOverlay(!showSubjectOverlay);
                }}
                tabIndex={0}
                role="button"
              >
                <FaRegListAlt />
              </span>
              <span
                className="add-task__date"
                data-testid="show-task-date-overlay"
                onClick={() => setShowTaskDate(!showTaskDate)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') setShowTaskDate(!showTaskDate);
                }}
                tabIndex={0}
                role="button"
              >
                <FaRegCalendarAlt />
              </span>
            </div>
          )}
        </div>
      );


  }

