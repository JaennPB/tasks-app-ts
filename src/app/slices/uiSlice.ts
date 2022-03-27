import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UIState {
  addListModalIsVisible: true | false;
  addTaskModalIsVisible: true | false;
}

export const initialState: UIState = {
  addListModalIsVisible: false,
  addTaskModalIsVisible: false,
};

export const UISlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    openOrCloseAddListModal: (state, action: PayloadAction<boolean>) => {
      state.addListModalIsVisible = action.payload;
    },
    openOrCloseAddTaskModal: (state, action: PayloadAction<boolean>) => {
      state.addTaskModalIsVisible = action.payload;
    },
  },
});

export const { openOrCloseAddListModal, openOrCloseAddTaskModal } =
  UISlice.actions;
export default UISlice.reducer;
