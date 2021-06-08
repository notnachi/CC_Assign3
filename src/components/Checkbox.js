import React from 'react'
import {archiveTask} from '../helpers/dynamoService'

export const Checkbox = ({id, taskDesc}) => {
    return (
      <div
        className="checkbox-holder"
        data-testid="checkbox-action"
        onClick={() => archiveTask(id)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') archiveTask();
        }}
        aria-label={`Mark ${taskDesc} as done?`}
        role="button"
        tabIndex={0}
      >
        <span className="checkbox" />
    </div>
    )
}
