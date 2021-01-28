import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  syncProfile,
  googlePopup,
  showSignup,
  login,
  showReset,
} from '../../redux/actions/userAction'
import { Alert, Button, Card, Form } from 'react-bootstrap'
import { FcGoogle } from 'react-icons/fc'

const SignIn = () => {
  const dispatch = useDispatch()

  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    await dispatch(login(emailRef.current.value, passwordRef.current.value))
      .then(() => {
        setError('')
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  useEffect(() => {
    dispatch(syncProfile())
  })

  return (
    <div className='w-100' style={{ maxWidth: '400px' }}>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Sign In</h2>
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
            <Button className='w-100 mb-2' type='submit'>
              Sign In
            </Button>
          </Form>
          <div className='text-center'>
            Don't have an account?{' '}
            <Button
              variant='outline-primary'
              onClick={() => dispatch(showSignup())}
            >
              Register
            </Button>
          </div>
          <div className='text-center'>
            <Button variant='link' onClick={() => dispatch(showReset())}>
              I forgot my password
            </Button>
          </div>

          <hr />

          <Button
            variant='outline-dark'
            className='w-100'
            onClick={() => dispatch(googlePopup())}
          >
            <FcGoogle /> Google Authentication
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SignIn
