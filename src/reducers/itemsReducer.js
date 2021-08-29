import { types } from "../types/types";

const initialState = {
  categories: [],
  items: [],
  loading: false,
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setItems:
      return { ...state, items: action.payload.items };
    case types.setCategories:
      return { ...state, categories: action.payload.categories };
    case types.loading:
      return { ...state, loading: action.payload.loading };
    default:
      return state;
  }
};
