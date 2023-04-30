import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'
import { RootState } from '../../app/store'

type InitialState = {
  numOfIcecreams: number,
  value: number
}

const initialState: InitialState = {
  numOfIcecreams: 20,
  value: 0,
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    setOrderedAction: state => {
      state.numOfIcecreams--
    },
    setRestockedAction: (state, actions: PayloadAction<number>) => {
      state.numOfIcecreams += actions.payload
    },
    setUpdateValueAction: (state, actions: PayloadAction<number>) => {
      state.value = actions.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecreams--
    })
  }
})

export const numOfIcecreamsSelector = (state: RootState) => state.icecream.numOfIcecreams //selector de redux
export const valueSelector = (state: RootState) => state.icecream.value //selector de redux
export default icecreamSlice.reducer
export const { setOrderedAction, setRestockedAction, setUpdateValueAction } = icecreamSlice.actions