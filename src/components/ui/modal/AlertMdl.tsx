import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import InfoIcon from '../../../assets/modal-information-icon.svg'

type AlertMdlType = {
  showAlert: boolean
  onClose: () => void
}

const AlertMdl: React.FC<AlertMdlType> = (props) => {
  return (
    <Transition appear show={props.showAlert} as={Fragment}>
      <Dialog
        as='div'
        data-cy='modal-information'
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
              <Dialog.Panel
                className='card w-1/3 py-[17px] px-[27px] flex items-center gap-x-2.5'
                data-cy='wow'
              >
                <img
                  src={InfoIcon}
                  width={24}
                  height={24}
                  data-cy='modal-information-icon'
                />
                <p
                  className='font-medium text-sm text-black-dev'
                  data-cy='modal-information-title'
                >
                  Activity berhasil dihapus
                </p>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default AlertMdl
