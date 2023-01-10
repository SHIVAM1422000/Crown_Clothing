import { CATEGORIES_ACTION_TYPES } from "./categories.action.types";

const INITIAL_STATE = {
  categoriesMap: {},
};

// returns new state according to given action types
export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: payload,
      };
    default:
      return {
        state,
      };
  }
};
