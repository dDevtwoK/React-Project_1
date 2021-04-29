import { UserActionTypes } from './user.types';

const INITIAL_USER = {
  currentUser: null,
};

const userReducer = (state = INITIAL_USER, action) => {
  switch (action.type) {
    case UserActionTypes.type:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
