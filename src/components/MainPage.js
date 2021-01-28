import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import ImageGrid from './Main/ImageGrid'
import ImageModal from './Main/ImageModal'
import UploadForm from './Main/UploadForm'
import UserInfo from './Main/UserInfo'

export default function MainPage() {
  const { userId } = useSelector((state) => state.user)
  const { selectedImg } = useSelector((state) => state.images)

  return (
    <>
      <Container style={{ flex: 'auto' }}>
        <UserInfo />
        <hr />
        <UploadForm userId={userId} />
        <ImageGrid userId={userId} />
      </Container>
      {selectedImg && <ImageModal userId={userId} />}
    </>
  )
}
