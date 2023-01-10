import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartReducer"; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,} from 'redux-persist'
import sidebarSlice from "../slices/sidebarSlice";


const persistConfig = {
  key:'root',
  storage: AsyncStorage,
}

const cart = persistReducer(persistConfig, cartReducer)
const sidebar = persistReducer(persistConfig, sidebarSlice)

export const store = configureStore({
  reducer: {
    cart,
    sidebar
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});


export const persistor = persistStore(store)