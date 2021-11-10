import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { reducer as settingsReducer } from "./slices/settings";

export const rootPersistConfig = {
  key: "root",
  storage: storage,
  keyPrefix: "redux-",
  whitelist: ["settings"],
};

const rootReducer = combineReducers({
  settings: settingsReducer,
});

export default rootReducer;
