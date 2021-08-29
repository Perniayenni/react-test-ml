import { types } from "../types/types";

export const setItems = (items) => {
  return { type: types.setItems, payload: { items } };
};

export const setCategories = (categories) => {
  return { type: types.setCategories, payload: { categories } };
};

export const setLoading = (loading) => {
  return { type: types.loading, payload: { loading } };
};
