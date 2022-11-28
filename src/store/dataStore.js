import create from "zustand";

const dataStore = (set) => ({
  isClicked: false,
  user: {},
  data: [],
});

export const useDataStore = create(dataStore);
