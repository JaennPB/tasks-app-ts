import { configureStore } from "@reduxjs/toolkit";

import mainSlice from "./slices/mainSlice";
import UISlice from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    main: mainSlice,
    UI: UISlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
