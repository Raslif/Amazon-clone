import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket/basketReducer";

export default configureStore({
  reducer: { basketReducer },
});
