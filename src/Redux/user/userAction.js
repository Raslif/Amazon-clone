import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./userTypes";

const userLogIn = (user) => {
  return {
    type: USER_LOGGED_IN,
    payload: user,
  };
};

const userLogOut = () => {
  return {
    type: USER_LOGGED_OUT,
  };
};

export { userLogIn, userLogOut };
