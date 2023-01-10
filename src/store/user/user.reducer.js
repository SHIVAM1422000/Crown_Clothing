const INITIAL_STATE = {
  currentUser: null,
};

// returns state according to given action types
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return {
        state,
      };
  }
};
