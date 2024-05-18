import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface QueryStore {
  query: {
    keyword?: string;
    location?: string;
  };
  setKeyword: (keyword: string) => void;
  setLocation: (location: string) => void;
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
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("QueryStore", useQueryStore);
}

export default useQueryStore;
