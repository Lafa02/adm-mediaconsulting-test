import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducers, middlewares } from "@/services";

const rtkReducers = combineReducers(reducers);

export const store = configureStore({
  reducer: rtkReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([...middlewares]),
});