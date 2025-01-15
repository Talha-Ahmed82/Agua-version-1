import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./user/userSlice";
import userReducer from "../redux/user/userSlice"
import authReducer from "../redux/auth/authSlice"

export const store = configureStore({
  reducer :{ user: userReducer, 
           auth:authReducer  }});

// const persistConfig = {
//   key: "root",
//   storage,
//   version: 1,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ serializableCheck: false }),
// });

// export const persistor = persistStore(store);
