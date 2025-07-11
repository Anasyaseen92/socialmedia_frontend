import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import authReducer from "./state";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import {
  persistStore,
  persistReducer as persistReducerWrapper, // ✅ rename to avoid conflict
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage"; // ✅ needed for localStorage
import { PersistGate } from "redux-persist/integration/react";

// ✅ Configuration for Redux Persist
const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

// ✅ Create persisted reducer
const persistedReducer = persistReducerWrapper(persistConfig, authReducer);

// ✅ Create Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// ✅ Create root and render app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
