import counterSlice from "@/features/counter/counter-slice"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { syncStorage } from "redux-persist-webextension-storage"

import { persistReducer } from "@plasmohq/redux-persist"
import blurSlice from "@/features/blur/blur-slice"
import filterSlice from "@/features/filter/filter-slice"

export const persistConfig = {
  key: "root",
  version: 1,
  storage: syncStorage,
  whitelist: ["counter", "filter", "blur"]
}

export const combinedReducers = combineReducers({
  counter: counterSlice,
  blur: blurSlice,
  filter: filterSlice
})

// TODO: Fix persistReducer so it doesn't break the types
// @ts-ignore
export const persistedReducer = persistReducer(persistConfig, combinedReducers)

// Until persistReducer is fixed, we need to use this mock store to get the types
export const mockStore = configureStore({
  reducer: combinedReducers
})
