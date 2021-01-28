import React from 'react'
import { useSelector } from 'react-redux'

const ProgressBar = () => {
  const { progress, isUploaded } = useSelector((state) => state.images)

  return (
    <div
      className='progress-bar mb-2'
      style={isUploaded ? { width: 0 } : { width: progress + '%' }}
    ></div>
  )
}

export default ProgressBar
