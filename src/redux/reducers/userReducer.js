import {
  LOG_OUT,
  SHOW_SIGNUP_MODAL,
  HIDE_SIGNUP_MODAL,
  SHOW_RESET_MODAL,
  HIDE_RESET_MODAL,
  LOGIN_SUCCESS,
} from '../types'

const initialState = {
  name: null,
  photo: null,
  userId: null,
  isLogged: false,
  showSignupModal: false,
  showResetPasswordModal: false,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        name: action.payload.name,
        photo: action.payload.photo,
        userId: action.payload.userId,
        isLogged: true,
      }
    case SHOW_SIGNUP_MODAL:
      return {
        ...state,
        showSignupModal: true,
      }
    case HIDE_SIGNUP_MODAL:
      return {
        ...state,
        showSignupModal: false,
      }
    case SHOW_RESET_MODAL:
      return {
        ...state,
        showResetPasswordModal: true,
      }
    case HIDE_RESET_MODAL:
      return {
        ...state,
        showResetPasswordModal: false,
      }
    case LOG_OUT:
      return {
        ...state,
        name: null,
        photo: null,
        userId: null,
        isLogged: false,
      }
    default:
      return state
  }
}
