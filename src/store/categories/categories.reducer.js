import { CATEGORIES_ACTION_TYPES } from "./categories.action.types";

const INITIAL_STATE = {
  categoriesArray: [],
};

// returns new state according to given action types
export const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categoriesArray: payload,
      };
    default:
      return {
        state,
      };
  }
};
