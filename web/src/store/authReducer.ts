import { createSlice } from '@reduxjs/toolkit'

export type User = {
  id: number
  name: string
  email: string
}
export type Auth = {
  user: User | null
  authenicated: boolean
}

const initialState = {
  user: null,
  authenicated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
      state.authenicated = true
    },
    authenicate: (state, action) => {
      state.user = action.payload.user
      state.authenicated = action.payload.authenicated
    },
    logout: (state) => {
      state.user = null
      state.authenicated = false
    },
  },
})

export const { login, authenicate, logout } = authSlice.actions

export default authSlice.reducer
