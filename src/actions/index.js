import { ADD_TASK, MOVE_TASK } from '../types/index';

export const addTask = (id, title, dueDate) => ({
  type: ADD_TASK,
  id,
  title,
  dueDate
});

export const moveTask = (id, listNow, goToList, task) => ({
  type: MOVE_TASK,
  id,
  listNow,
  goToList,
  task
});
