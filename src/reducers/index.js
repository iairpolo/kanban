import { ADD_TASK } from '../types/index';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    default:
      return state;
  }
};
export default reducer;
