import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// ------------------------------------
// - Initial State
// ------------------------------------

const sliceKey = "settings";

const initialState = {
  theme: "light",
};

// ------------------------------------
// - Slice Reducers
// ------------------------------------

const slice = createSlice({
  name: sliceKey,
  initialState,
  reducers: {
    setCurrentTheme: (state, actions) => {
      state.theme = actions.payload;
    },
  },
});

// IN CASE TO USE PERSISTANCE
export const persistConfig = {
  key: sliceKey,
  storage: storage,
  keyPrefix: "redux-",
  whitelist: ["theme"],
};

export const reducer = persistReducer(persistConfig, slice.reducer); // use this in case of persist
export const actions = slice.actions;
// export const reducer = slice.reducer; // replace in case of persist

export default slice;

// ------------------------------------
// - Action Handlers
// ------------------------------------

export const { setCurrentTheme } = slice.actions; // default action handlerss
