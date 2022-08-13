import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import basketReducer from "./basket/basketReducer";
import userReducer from "./user/userReducer";

const persistConfig = {
  key: "amazon_clone",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    basketReducer: basketReducer,
    userReducer: userReducer,
  })
);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
