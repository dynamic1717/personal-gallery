import React, { useRef, useState } from 'react'
import { Modal, Form, Button, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { hideSignup, signup } from '../../redux/actions/userAction'

const SignupModal = () => {
  const { showSignupModal } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }
    await dispatch(signup(emailRef.current.value, passwordRef.current.value))
      .then(() => {
        dispatch(hideSignup())
      })
      .catch((error) => setError(error.message))
  }

  return (
    <Modal
      show={showSignupModal}
      onHide={() => dispatch(hideSignup())}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Create a new account
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' ref={emailRef} required />
          </Form.Group>
          <Form.Group id='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' ref={passwordRef} required />
          </Form.Group>
          <Form.Group id='passwordConfirm'>
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control type='password' ref={passwordConfirmRef} required />
          </Form.Group>
          <Button className='w-100 mb-2' type='submit'>
            Sign Up
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default SignupModal
