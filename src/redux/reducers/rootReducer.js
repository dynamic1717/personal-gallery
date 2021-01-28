import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import { imagesReducer } from './imagesReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  images: imagesReducer,
})
