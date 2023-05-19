import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { toast } from "react-toastify";

export interface EditorState {
  inputValue: string;
  savingToDraft: {
    loading: boolean;
    success?: boolean;
    error?: string
  }
  publishPost: {
    loading: boolean;
    success?: boolean;
    error?: string
  }
}

const initialState: EditorState = {
  inputValue: '',
  savingToDraft: {
    loading: false,
    success: false,
    error: ''
  },
  publishPost: {
    loading: false,
    success: false,
    error: ''

  }
}

function dummyAPICall(delay:number): Promise<boolean> {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(true);
    }, delay);
  });
}


export const publishPostAsync = createAsyncThunk(
  "editor/publishPostAsync",
  async (_, thunkAPI) => {
    try {
      const response = await dummyAPICall(2000)
      
      toast.success("Published sucssessfully 🚀");
      return response;
    } catch (error) {

      toast.error("Fail to publish");
      return thunkAPI.rejectWithValue("Fail to publish a post");
    }

  }
);

export const saveToDraftAsync = createAsyncThunk(
  "editor/saveToDraftAsync",
  async (_, thunkAPI) => {

  try {
    const response = await dummyAPICall(2000)
    
      toast.success("Saved sucssessfully 🚀");
      return response;
  } catch (error) {
      toast.error("Fail to save to draft");
      return thunkAPI.rejectWithValue("Fail to save a post");
    }
  }
);


export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
      inputChange: (state, action: PayloadAction<string>) => {
          state.inputValue = action.payload
    }
  },
  extraReducers(builder) {
       builder
      .addCase(publishPostAsync.pending, (state) => {
        state.publishPost.loading = true;
      })
      .addCase(publishPostAsync.fulfilled, (state, action) => {
        state.publishPost.loading = false;
        state.publishPost.success = action.payload;
      })
      .addCase(publishPostAsync.rejected, (state, action) => {
        state.publishPost.loading = false;
        state.publishPost.error = action.error.message;
      })
      .addCase(saveToDraftAsync.pending, (state) => {
        state.savingToDraft.loading = true;
      })
      .addCase(saveToDraftAsync.fulfilled, (state, action) => {
        state.savingToDraft.loading = false;
        state.savingToDraft.success = action.payload;
      })
      .addCase(saveToDraftAsync.rejected, (state, action) => {
        state.savingToDraft.loading = false;
        state.savingToDraft.error = action.error.message;
      })
  },
})

export const { inputChange } = editorSlice.actions

export default editorSlice.reducer