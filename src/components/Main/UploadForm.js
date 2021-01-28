import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setError, uploadImage } from '../../redux/actions/imagesAction'
import ProgressBar from './ProgressBar'
import { Form, Alert } from 'react-bootstrap'
import { BiImageAdd } from 'react-icons/bi'

const UploadForm = ({ userId }) => {
  const { error } = useSelector((state) => state.images)
  const dispatch = useDispatch()

  const changeHandler = (e) => {
    let selected = e.target.files[0]
    const types = ['image/png', 'image/jpeg']
    if (selected && types.includes(selected.type)) {
      dispatch(uploadImage(selected, userId))
      dispatch(setError(''))
    } else {
      dispatch(setError('Please select an image file (png or jpeg)'))
    }
  }

  return (
    <div>
      <Form>
        {error && <Alert variant='danger'>{error}</Alert>}
        <label
          htmlFor='file-upload'
          className='d-block mx-auto text-center btn btn-light'
        >
          <BiImageAdd /> Chose an image to upload
        </label>
        <input
          type='file'
          id='file-upload'
          style={{ display: 'none' }}
          onChange={changeHandler}
        />
      </Form>

      <ProgressBar />
    </div>
  )
}

export default UploadForm
