import React, { useRef, useState } from 'react'
import { Modal, Form, Button, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { hideReset, resetPassword } from '../../redux/actions/userAction'

const ForgotPassword = () => {
  const { showResetPasswordModal } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const emailRef = useRef()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    await dispatch(resetPassword(emailRef.current.value))
      .then(() => {
        setError('')
        setMessage('Check your inbox for further instructions')
      })
      .catch((error) => setError(error.message))
  }

  return (
    <Modal
      show={showResetPasswordModal}
      onHide={() => dispatch(hideReset())}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Password Reset
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {error && <Alert variant='danger'>{error}</Alert>}
        {message && <Alert variant='success'>{message}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' ref={emailRef} required />
          </Form.Group>
          <Button className='w-100 mb-2' type='submit'>
            Reset Password
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default ForgotPassword
