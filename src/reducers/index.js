import { ADD_TASK, MOVE_TASK } from '../types/index';

const initialState = {
  todo: [
    {
      id: 1,
      title: 'Una cosa',
      date: '',
      list: 'todo'
    },
    {
      id: 2,
      title: 'Una cosa',
      date: '',
      list: 'todo'
    }
  ],
  inProgress: [],
  done: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            id: action.id,
            title: action.title,
            date: action.dueDate,
            list: 'todo'
          }
        ]
      };
    case MOVE_TASK:
      const goToList = action.goToList;
      const listNow = action.listNow;
      return {
        ...state,
        [goToList]: [
          ...state[goToList],
          {
            ...action.task,
            list: goToList
          }
        ],
        [listNow]: state[listNow].filter(item => item.id !== action.id)
      };
    default:
      return state;
  }
};
export default reducer;
