import { configureStore } from '@reduxjs/toolkit'

// Reducers
import editorReducer from './features/editor/editorSlice'
import themeSlice from './features/theme/themeSlice'


export const store = configureStore({
    reducer: {
        editor: editorReducer,
        theme: themeSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch