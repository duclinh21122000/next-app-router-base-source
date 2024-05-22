import { api } from '@/services/api/api'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  // Add more reducers from other features here
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
