import { Combobox, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Chevron from '../../../assets/tabler_chevron-down.svg'
import Check from '../../../assets/tabler_check.svg'
import { priorityType } from '../../pages/Activity'

export type Priority = {
  value: priorityType
  name: 'Very High' | 'High' | 'Normal' | 'Low' | 'Very Low'
  color: string
}

type SelectType = {
  onChange: (val: Priority) => void
  selected: Priority
  options: Priority[]
}

export const Select: React.FC<SelectType> = (props) => {
  const [query, setQuery] = useState('')

  const filteredpriorities =
    query === ''
      ? props.options
      : props.options.filter((priority) =>
          priority.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <Combobox
      value={props.selected}
      onChange={(val) => {
        props.onChange(val)
      }}
    >
      <div className='relative' data-cy='modal-add-priority-dropdown'>
        <div
          data-cy='modal-add-priority-item'
          className='relative w-full cursor-default overflow-hidden rounded-md bg-white text-left border border-slate-400 py-[14px] px-[17px]'
        >
          <div
            className={`w-[14px] h-[14px] ${props.selected.color} rounded-full absolute top-1/2 -translate-y-1/2 left-0 ml-[17px]`}
          ></div>
          <Combobox.Input
            className='w-full border-none leading-5 text-black-dev focus:ring-0 focus:outline-none pl-5'
            displayValue={(priority: Priority) => priority.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button
            data-cy='tabler:chevron-down'
            className='absolute inset-y-0 right-0 flex items-center pr-[17px]'
          >
            <img src={Chevron} />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options
            data-cy='modal-add-priority-dropdown'
            className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
          >
            {filteredpriorities.length === 0 && query !== '' ? (
              <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
                Nothing found.
              </div>
            ) : (
              filteredpriorities.map((priority) => (
                <Combobox.Option
                  data-cy='modal-add-priority-very-low'
                  key={priority.value}
                  className={({ active }) =>
                    `relative cursor-default select-none py-[19px] px-[17px] ${
                      active ? 'bg-blue-dev text-white' : 'text-gray-900'
                    }`
                  }
                  value={priority}
                >
                  {({ selected, active }) => (
                    <>
                      <div className='flex gap-[19px] items-center'>
                        <div
                          className={`w-[14px] h-[14px] rounded-full ${priority.color}`}
                        />
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {priority.name}
                        </span>
                      </div>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 right-0 flex items-center pr-[18px] ${
                            active ? 'text-white' : 'text-teal-600'
                          }`}
                        >
                          <img src={Check} width={18} height={18} />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  )
}

export default Select
