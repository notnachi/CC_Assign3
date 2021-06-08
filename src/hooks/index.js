import { useState, useEffect } from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { collatedTasksExist } from '../helpers';
import {getTasks, getSubjects} from '../helpers/dynamoService'

/********DYNAMO OPERATIONS ************/


export const useTasks = selectedSubject => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  const user_id = 'test'

  useEffect(async () => {
    let unsubscribe = await getTasks(user_id)

    unsubscribe = selectedSubject && !collatedTasksExist(selectedSubject)
        ? (unsubscribe = unsubscribe.filter((item) => {
            if(item.subject_id === selectedSubject)
                return item
        }))
        : selectedSubject === 'TODAY'
        ? (unsubscribe = unsubscribe = unsubscribe.filter((item) => {
            if(item.date === moment().format('DD/MM/YYYY'))
                return item
        }))
        : selectedSubject === 'INBOX' || selectedSubject === 0
        ? (unsubscribe = unsubscribe.filter((item) => {
            if(item.date === '')
                return item
        }))
        : unsubscribe;

        // unsubscribe = unsubscribe.map((item) => {
        //     return {
        //         id: uuidv4(),
        //         ...item
        //     }
        // })

        setTasks(
            selectedSubject === 'NEXT 7'
            ? (unsubscribe = unsubscribe.filter((item) => {
                if(moment(item.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 && item.archived !== true)
                    return item
            }))
            : (unsubscribe = unsubscribe.filter((item) => {
                if(item.archived !== true)
                    return item
            }))
        )
    // return () => unsubscribe();

  }, [selectedSubject]);

  return { tasks, archivedTasks };
};

export const useSubjects = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(async () => {

    let allSubjects = await getSubjects()

    if (JSON.stringify(allSubjects) !== JSON.stringify(subjects)) {
        setSubjects(allSubjects);
      }

  }, [subjects]);

  return { subjects, setSubjects };
};
