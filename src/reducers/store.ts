import { configureStore } from "@reduxjs/toolkit";
import widgetReduder from "./widget/widgetSlice";

export const store = configureStore({
  reducer: {
    widget: widgetReduder,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
