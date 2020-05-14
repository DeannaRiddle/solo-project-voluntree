import { combineReducers } from "redux";

const eventsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_EVENT_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default eventsReducer;
