import { types } from "../types/types";

export const itemsReducer = (state = "", action) => {
  switch (action.type) {
    case types.setItems:
      return action.payload.items;
    default:
      return state;
  }
};
