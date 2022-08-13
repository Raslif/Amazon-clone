import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./userTypes";

const initialUserState = {
  user: {
    token: "",
    username: "",
  },
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        user: action.payload,
      };

    case USER_LOGGED_OUT:
      return {
        user: null,
      };

    default:
      return state;
  }
};

export default userReducer;
