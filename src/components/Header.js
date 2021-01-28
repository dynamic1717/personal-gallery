import React from 'react'

const Header = () => {
  return (
    <header className='bg-dark text-white pt-3 pb-2 text-center'>
      <h1 className='w-100' style={{ letterSpacing: '0.6rem' }}>
        personal&#183;gallery
      </h1>
      <p className='mb-0' style={{ fontSize: '0.9rem' }}>
        upload an images to your own collection
      </p>
    </header>
  )
}

export default Header
