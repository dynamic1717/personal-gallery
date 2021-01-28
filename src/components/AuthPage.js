import React from 'react'
import SignIn from './Auth/SignIn'
import SignupModal from './Auth/SignupModal'
import ForgotPassword from './Auth/ForgotPassword'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function AuthPage() {
  const { showSignupModal, showResetPasswordModal } = useSelector(
    (state) => state.user
  )

  return (
    <>
      <Container className='d-flex align-items-center justify-content-center'>
        <SignIn />
      </Container>
      {showSignupModal && <SignupModal />}
      {showResetPasswordModal && <ForgotPassword />}
    </>
  )
}
