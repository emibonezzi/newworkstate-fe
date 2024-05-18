import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface QueryStore {
  query: {
    keyword?: string;
    location?: string;
    category?: string;
  };
  setKeyword: (keyword: string) => void;
  setLocation: (location: string) => void;
  setCategory: (category: string) => void;
}

const useQueryStore = create<QueryStore>((set) => ({
  query: {},
  setKeyword: (keyword) =>
    set((store) => ({ query: { ...store.query, keyword: keyword } })),
  setLocation: (location) =>
    set((store) => ({
      query: {
        ...store.query,
        location: location,
      },
    })),
  setCategory: (category) =>
    set((store) => ({
      query: {
        ...store.query,
        category: category,
      },
    })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("QueryStore", useQueryStore);
}

export default useQueryStore;
