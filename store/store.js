import { configureStore } from "@reduxjs/toolkit";
import cartSlice from '../slices/cartReducer'
import sidebarSlice from '../slices/sidebarReducer'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const cartReducer = persistReducer(persistConfig, cartSlice)
const sidebarReducer = persistReducer(persistConfig, sidebarSlice)


export const store = configureStore({
  reducer:{
    sidebar: sidebarReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store)