import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface QueryStore {
  query: {
    keyword?: string;
    sortOrder?: string;
  };
  setKeyword: (keyword: string) => void;
  setSortOrder: (sort: string) => void;
}

const useQueryStore = create<QueryStore>((set) => ({
  query: {},
  setKeyword: (keyword) => set((store) => ({ query: { keyword: keyword } })),
  setSortOrder: (sort) => set(() => ({ query: { sortOrder: sort } })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("QueryStore", useQueryStore);
}

export default useQueryStore;
