import { UserActionTypes } from './user.types';
export const setCurrentUser = user => ({
  type: UserActionTypes.type,
  payload: user,
});
