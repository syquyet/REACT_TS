import { combineReducers } from "redux";

interface actionType {
  type: string;
}
export const countReducer = (state: number = 0, action: actionType) => {
  switch (action.type) {
    case "UP":
      return state + 1;
    case "DOWN":
      return state - 1;
    case "CORE":
      return state * 10;
  }
  return state;
};
interface todoAction {
  type: string;
  todo: string;
  index: number;
}

export const todosReducer = (state: string[] = [], action: todoAction) => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.todo];
    case "UPDATE":
      const newState = state.map((item, i) => {
        if (i === action.index) {
          return action.todo;
        }
        return item;
      });
      return newState;
    case "DELETE":
      const stateDelete = state.filter((item, i) => i !== action.index);
      return stateDelete;
  }
  return state;
};
interface colorAction {
  type: string;
  color: string;
}
export const colorBackround = (
  state: string = "yellow",
  action: colorAction
) => {
  switch (action.type) {
    case "COLOR":
      return action.color;
    default:
      return state;
  }
};

export const redecers = combineReducers({ countReducer, todosReducer,colorBackround });
