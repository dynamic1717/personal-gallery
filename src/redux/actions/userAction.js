import firebase from 'firebase/app'
import { auth, projectFirestore } from '../../firebase/config'
import {
  CLEAR_IMAGES_LOGOUT,
  HIDE_SIGNUP_MODAL,
  LOG_OUT,
  SHOW_SIGNUP_MODAL,
  SHOW_RESET_MODAL,
  HIDE_RESET_MODAL,
  LOGIN_SUCCESS,
} from '../types'

export const googlePopup = () => async () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  await firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      var credential = result.credential
      var token = credential.accessToken
      var user = result.user
    })
    .catch((error) => {
      console.log(error)
    })
}

export const syncProfile = () => async (dispatch) => {
  try {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('User signed in')
        let name
        let photo
        if (user.displayName) {
          name = user.displayName
          photo = user.photoURL
        } else {
          name = user.email
          photo =
            'https://i05.fotocdn.net/s122/376748e5230138e9/user_xl/2780381446.jpg'
        }
        const userId = user.uid
        // Updating firestore user document (or creating a new doc)
        projectFirestore.collection('users').doc(userId).set({
          name: name,
          photo: photo,
        })
        dispatch({ type: LOGIN_SUCCESS, payload: { name, photo, userId } })
      } else {
        console.log('No user is signed in')
      }
    })
  } catch (error) {
    console.log(error)
  }
}

export const showSignup = () => {
  return {
    type: SHOW_SIGNUP_MODAL,
  }
}

export const hideSignup = () => {
  return {
    type: HIDE_SIGNUP_MODAL,
  }
}

export const signup = (email, password) => async () => {
  await auth.createUserWithEmailAndPassword(email, password)
}

export const login = (email, password) => async () => {
  await auth.signInWithEmailAndPassword(email, password)
}

export const logOut = () => async (dispatch) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({
        type: LOG_OUT,
      })
      dispatch({
        type: CLEAR_IMAGES_LOGOUT,
      })
    })
    .catch((error) => {
      console.log(error)
    })
}

export const showReset = () => {
  return {
    type: SHOW_RESET_MODAL,
  }
}

export const hideReset = () => {
  return {
    type: HIDE_RESET_MODAL,
  }
}

export const resetPassword = (email) => async () => {
  await auth.sendPasswordResetEmail(email)
}
