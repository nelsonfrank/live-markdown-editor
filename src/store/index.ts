import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";

// Reducers
import editorSlice from "./features/editor/editorSlice";
import themeSlice from "./features/theme/themeSlice";

export const persistConfig = {
	key: "root",
	storage: storage,
};

export const rootReducers = combineReducers({
	editor: editorSlice,
	theme: themeSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducers)
  
export const store = configureStore({
    reducer: persistedReducer
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch