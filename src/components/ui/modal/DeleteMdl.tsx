import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import DeleteIcon from '../../../assets/modal-delete-icon.svg'
import Button from '../Button'

type DeleteMdlType = {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
  onDelete: () => void
}

const DeleteMdl: React.FC<DeleteMdlType> = (props) => {
  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog
        as='div'
        data-cy='modal-delete'
        className='relative z-10'
        onClose={props.onClose}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 -translate-y-2'
              enterTo='opacity-100 translate-y-0'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 -translate-y-2'
            >
              <Dialog.Panel className='card w-1/3 p-[40px]' data-cy='wow'>
                <img
                  data-cy='modal-delete-icon'
                  src={DeleteIcon}
                  width={84}
                  height={84}
                  className='mx-auto mb-[34px]'
                />
                <span data-cy='modal-delete-title'>{props.children}</span>
                <div className='flex justify-center gap-5 mt-[46px]'>
                  <Button
                    onClick={props.onClose}
                    variant='secondary'
                    cy='modal-delete-cancel-button'
                    className='w-1/3'
                  >
                    Batal
                  </Button>
                  <Button
                    onClick={props.onDelete}
                    variant='danger'
                    cy='modal-delete-confirm-button'
                    className='w-1/3'
                  >
                    Hapus
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default DeleteMdl
