import { create } from "zustand";

export const useStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,

  categories:
    JSON.parse(localStorage.getItem("categories")) || [],

  notes: localStorage.getItem("notes") || "",

  setUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },

  setCategories: (categories) => {
    localStorage.setItem(
      "categories",
      JSON.stringify(categories)
    );
    set({ categories });
  },

  setNotes: (notes) => {
    localStorage.setItem("notes", notes);
    set({ notes });
  },
}));