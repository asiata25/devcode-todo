import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import CloseIcon from '../../../assets/modal-add-close-button.svg'
import { priorityType } from '../../pages/Activity'
import Button from '../Button'
import Label from '../input/Label'
import Select, { Priority } from '../input/Select'

type AddTodoMdlType = {
  onClose: () => void
  onSubmit: (title: string, priority: priorityType) => void
  isOpen: boolean
  title: string
  selectedP: priorityType
}

const priorities: Priority[] = [
  { value: 'very-high', name: 'Very High', color: 'bg-red-500' },
  { value: 'high', name: 'High', color: 'bg-yellow-500' },
  { value: 'normal', name: 'Normal', color: 'bg-teal-500' },
  { value: 'low', name: 'Low', color: 'bg-sky-500' },
  { value: 'very-low', name: 'Very Low', color: 'bg-violet-500' },
]

const AddTodoMdl: React.FC<AddTodoMdlType> = (props) => {
  const [name, setName] = useState(props.title)
  const [selected, setSelected] = useState(
    priorities.find((item) => item.value === props.selectedP)!
  )

  return (
    <Transition appear show={props.isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={props.onClose}>
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
          <div
            className='flex min-h-full items-center justify-center p-4 text-center'
            data-cy='modal-add'
          >
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 -translate-y-2'
              enterTo='opacity-100 translate-y-0'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 -translate-y-2'
            >
              <Dialog.Panel className='card w-1/2' data-cy='wow'>
                <div className='flex justify-between items-center p-7 border-b border-slate-400'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                    data-cy='modal-add-title'
                  >
                    Tambah List Item
                  </Dialog.Title>
                  <button
                    onClick={props.onClose}
                    data-cy='modal-add-close-button'
                  >
                    <img src={CloseIcon} />
                  </button>
                </div>
                <div className='px-7 pt-9 pb-6'>
                  <div className='flex flex-col gap-y-6'>
                    <div className='flex flex-col gap-y-2 items-start'>
                      <Label cy='modal-add-name-title' text='Nama List Item' />
                      <input
                        data-cy='modal-add-name-input'
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value)
                        }}
                        type='text'
                        placeholder='Tambahkan nama list item'
                        className='rounded-md border border-slate-400 w-full py-[14px] px-[18px] placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring focus:ring-sky-200'
                      />
                    </div>
                    <div className='flex flex-col gap-y-2 items-start'>
                      <Label cy='modal-add-priority-title' text='PRIORITY' />
                      <Select
                        onChange={(val) => {
                          setSelected(val)
                        }}
                        selected={selected}
                        options={priorities}
                      />
                    </div>
                  </div>
                </div>

                <div className='py-5 px-5 border-t border-t-slate-400'>
                  <Button
                    isDisabled={name.length === 0}
                    cy='modal-add-save-button'
                    onClick={() => {
                      props.onSubmit(name, selected.value)

                      setName('')
                      setSelected(priorities[0])
                      props.onClose()
                    }}
                    className='ml-auto'
                  >
                    Simpan
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

export default AddTodoMdl
