import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UIState {
  addlistModalIsVisible: true | false;
}

export const initialState: UIState = {
  addlistModalIsVisible: false,
};

export const UISlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    openOrCloseAddListModal: (state, action: PayloadAction<boolean>) => {
      state.addlistModalIsVisible = action.payload;
    },
  },
});

export const { openOrCloseAddListModal } = UISlice.actions;
export default UISlice.reducer;
