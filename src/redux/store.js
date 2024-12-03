import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/auth/slice.js";
// import greenReducer from "../redux/green/slice.js";
// import thermalReduser from "../redux/thermal/slice.js";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["token"],
  };
  const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);


  export const store = configureStore({
    reducer: {
      // green: greenReducer,
      // thermal: thermalReduser,
      auth: persistedAuthReducer,

    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
   
  });
  
  export const persistor = persistStore(store);