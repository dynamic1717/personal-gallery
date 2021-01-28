import React from 'react'
import { Modal, Button, Popover, OverlayTrigger } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { hideEnlargedImg, deleteImage } from '../../redux/actions/imagesAction'

const ImageModal = ({ userId }) => {
  const { selectedImg, showImgModal } = useSelector((state) => state.images)
  const dispatch = useDispatch()

  function showFormattedDate(timestamp) {
    const correctTimestamp = timestamp + '000'
    return new Date(+correctTimestamp).toLocaleString()
  }

  const popover = (
    <Popover id='popover-basic'>
      <Popover.Title as='h3'>Are you sure?</Popover.Title>
      <Popover.Content className='text-center'>
        <Button
          variant='link'
          onClick={() => dispatch(deleteImage(userId, selectedImg.id))}
        >
          Yes
        </Button>
      </Popover.Content>
    </Popover>
  )

  return (
    <Modal
      show={showImgModal}
      onHide={() => dispatch(hideEnlargedImg())}
      centered
      size='lg'
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Added: {showFormattedDate(selectedImg.createdAt)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={selectedImg.url}
          alt='enlarged pic'
          className='img-fluid mb-2'
        />
        <div className='w-100 text-right'>
          <OverlayTrigger trigger='focus' placement='auto' overlay={popover}>
            <Button variant='outline-danger'>Delete the image</Button>
          </OverlayTrigger>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ImageModal
