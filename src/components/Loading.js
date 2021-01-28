import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <div
      className='d-flex justify-content-between mx-auto my-4'
      style={{ width: '200px' }}
    >
      <Spinner animation='grow' role='status' variant='primary'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
      <Spinner animation='grow' role='status' variant='primary'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
      <Spinner animation='grow' role='status' variant='primary'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    </div>
  )
}

export default Loading
