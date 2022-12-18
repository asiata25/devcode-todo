import { useState } from 'react'
import DeleteIMG from '../../assets/activity-item-delete-button.svg'
import Modal from './modal/DeleteMdl'

type DeleteBtnType = {
  messageDelete: React.ReactNode
  onDelete: () => void
  btnCy: string
}

const DeleteBtn: React.FC<DeleteBtnType> = (props) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Modal
        onDelete={props.onDelete}
        isOpen={showModal}
        onClose={() => {
          setShowModal(false)
        }}
      >
        {props.messageDelete}
      </Modal>
      <button
        data-cy={props.btnCy}
        onClick={() => {
          setShowModal(true)
        }}
      >
        <img
          src={DeleteIMG}
          alt='activity-item-delete-button'
          width={24}
          height={24}
        />
      </button>
    </>
  )
}

export default DeleteBtn
