import {
  projectFirestore,
  projectStorage,
  timestamp,
} from '../../firebase/config'
import {
  FETCH_IMAGES,
  SET_UPLOAD_PROGRESS,
  SET_ERROR,
  UPLOAD_IMAGE,
  SHOW_ENLARGED_IMG,
  HIDE_ENLARGED_IMG,
} from '../types'

export const uploadImage = (file, userId) => async (dispatch) => {
  const usersRef = projectFirestore.collection('users')
  const userImagesRef = usersRef.doc(userId).collection('images')
  const storageRef = projectStorage.ref()

  const uploadTask = storageRef.child('images/' + file.name).put(file)
  uploadTask.on(
    'state_changed',
    (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
      dispatch({ type: SET_UPLOAD_PROGRESS, payload: percentage })
    },
    (error) => {
      console.log(error)
    },
    async () => {
      const url = await uploadTask.snapshot.ref.getDownloadURL()
      const createdAt = timestamp()
      userImagesRef.add({ url, createdAt })
      dispatch({ type: UPLOAD_IMAGE, payload: url })
    }
  )
}

export const fetchImages = (userId) => async (dispatch) => {
  const userRef = projectFirestore.collection('users').doc(userId)
  userRef
    .collection('images')
    .orderBy('createdAt', 'desc')
    .onSnapshot((snap) => {
      let documents = []
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id })
      })
      dispatch({ type: FETCH_IMAGES, payload: documents })
    })
}

export const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: error,
  }
}

export const showEnlargedImg = (url, createdAt, id) => {
  return {
    type: SHOW_ENLARGED_IMG,
    payload: { url, createdAt, id },
  }
}

export const hideEnlargedImg = () => {
  return {
    type: HIDE_ENLARGED_IMG,
  }
}

export const deleteImage = (userId, imageId) => async (dispatch) => {
  const imagesRef = projectFirestore
    .collection('users')
    .doc(userId)
    .collection('images')
  await imagesRef
    .doc(imageId)
    .delete()
    .then(() => dispatch(hideEnlargedImg()))
}
