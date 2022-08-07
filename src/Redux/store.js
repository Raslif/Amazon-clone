import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import basketReducer from "./basket/basketReducer";

const persistConfig = {
  key: "basket",
  storage,
};

const persistedReducer = persistReducer(persistConfig, basketReducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
