import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ListObject {
  name: string;
  completed: string[];
  uncompleted: string[];
}

export interface MainState {
  currentList: string | null;
  lists: ListObject[];
}

export const initialState: MainState = {
  currentList: "My Tasks",
  lists: [
    {
      name: "My Tasks",
      completed: [],
      uncompleted: ["Finish app by the end of month"],
    },
  ],
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    addlist: (state, action: PayloadAction<string>) => {
      const newListObj = {
        name: action.payload,
        completed: [],
        uncompleted: [],
      };
      state.lists.push(newListObj);
    },
  },
});

export const {} = mainSlice.actions;
export default mainSlice.reducer;
