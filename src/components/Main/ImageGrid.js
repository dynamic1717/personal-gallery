import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchImages, showEnlargedImg } from '../../redux/actions/imagesAction'
import { Row, Col, Container, Image } from 'react-bootstrap'
import Loading from '../Loading'

const ImageGrid = ({ userId }) => {
  const { docs } = useSelector((state) => state.images)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchImages(userId))
  }, [dispatch, userId])

  if (!docs) {
    return <Loading />
  }

  return (
    <Container>
      {docs.length === 0 && (
        <p className='text-center'>You have not uploaded any images</p>
      )}
      <Row className='row row-cols-3 align-items-center mb-4'>
        {docs &&
          docs.map((doc) => (
            <Col
              key={doc.id}
              onClick={() =>
                dispatch(
                  showEnlargedImg(doc.url, doc.createdAt.seconds, doc.id)
                )
              }
              style={{ cursor: 'pointer' }}
            >
              <Image
                src={doc.url}
                alt='uploaded pic'
                className='img-fluid mb-2'
                rounded
              />
            </Col>
          ))}
      </Row>
    </Container>
  )
}

export default ImageGrid
