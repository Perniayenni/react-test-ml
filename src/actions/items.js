import { types } from "../types/types";

export const setItems = (items) => {
  return { type: types.setItems, payload: { items } };
};
