import { USER_ACTION_TYPES } from "./user.types";
import rols from "../../utils/rols";

const INITIAL_STATE = {
  currentUser: {
    name: "Nicolas",
    lastName: "Pirozzi",
    rol: rols.parent,
  },
};

// eslint-disable-next-line default-param-last
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  // Esto se va a activar siempre q se cambie el state, y cuando no sea currentUser, este devuelvo lo q ya tenía
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    case USER_ACTION_TYPES.SET_IS_RELOAD:
      return { ...state, isReload: payload };
    default:
      return state;
  }
};
