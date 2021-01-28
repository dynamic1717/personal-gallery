import {
  UPLOAD_IMAGE,
  FETCH_IMAGES,
  SET_UPLOAD_PROGRESS,
  SET_ERROR,
  SHOW_ENLARGED_IMG,
  HIDE_ENLARGED_IMG,
  CLEAR_IMAGES_LOGOUT,
} from '../types'

const initialState = {
  file: null,
  imgUrl: null,
  docs: null,
  progress: 0,
  isUploaded: false,
  error: '',
  selectedImg: null,
  showImgModal: false,
}

export const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return {
        ...state,
        imgUrl: action.payload,
        isUploaded: true,
      }
    case SET_UPLOAD_PROGRESS:
      return {
        ...state,
        progress: action.payload,
        isUploaded: false,
      }
    case FETCH_IMAGES:
      return {
        ...state,
        docs: action.payload,
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    case SHOW_ENLARGED_IMG:
      return {
        ...state,
        selectedImg: action.payload,
        showImgModal: true,
      }
    case HIDE_ENLARGED_IMG:
      return {
        ...state,
        selectedImg: null,
        showImgModal: false,
      }
    case CLEAR_IMAGES_LOGOUT:
      return {
        ...state,
        docs: null,
      }
    default:
      return state
  }
}
