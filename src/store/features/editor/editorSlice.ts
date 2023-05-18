import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface EditorState {
  inputValue: string
}

const initialState: EditorState = {
  inputValue: '',
}

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
      inputChange: (state, action: PayloadAction<string>) => {
          state.inputValue = action.payload
      },
  },
})

export const { inputChange } = editorSlice.actions

export default editorSlice.reducer