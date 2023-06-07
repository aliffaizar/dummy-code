import authReducer, { Auth } from './authReducer'

export interface RootState {
  auth: Auth
}

export const rootReducer = {
  auth: authReducer,
}
