import React from 'react'
import { SiReact, SiRedux, SiFirebase, SiBootstrap } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className='d-flex flex-column align-items-center justify-content-center bg-dark text-light py-2'>
      <p className='m-0' style={{ fontSize: '0.8rem' }}>
        Made with
      </p>
      <div
        className='d-flex justify-content-between align-items-center mx-auto mb-2'
        style={{ width: '350px' }}
      >
        <div>
          <SiReact /> React
        </div>
        <div>
          <SiRedux /> Redux
        </div>
        <div>
          <SiFirebase /> Firebase
        </div>
        <div>
          <SiBootstrap /> Bootstrap
        </div>
      </div>
      <a
        href='https://github.com/dynamic1717'
        className='text-light'
        style={{ fontSize: '0.8rem' }}
      >
        github.com/dynamic1717
      </a>
    </footer>
  )
}

export default Footer
