import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../redux/actions/userAction'
import { Button, Container, Image } from 'react-bootstrap'

const UserInfo = () => {
  const { name, photo } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  return (
    <Container className='d-flex align-items-center justify-content-center mt-4 mb-4'>
      <Image
        src={photo}
        alt='userpic'
        roundedCircle
        className='mr-4'
        style={{ width: '150px' }}
      />
      <h3 className='mr-4'>{name}</h3>
      <Button variant='outline-danger' onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </Container>
  )
}

export default UserInfo
