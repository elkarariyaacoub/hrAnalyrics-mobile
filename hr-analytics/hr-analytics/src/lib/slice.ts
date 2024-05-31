import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PageState {
  value: number
}

const initialState: PageState = {
  value: 0,
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPage } = pageSlice.actions

export default pageSlice.reducer