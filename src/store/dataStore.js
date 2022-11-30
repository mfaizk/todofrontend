import create from "zustand";

const dataStore = (set) => ({
  isClicked: false,
  user: {},
  data: [],
  setUser: (u) => {
    set((state) => ({
      user: u,
    }));
  },
});

export const useDataStore = create(dataStore);
