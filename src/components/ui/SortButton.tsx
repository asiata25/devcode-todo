import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import terlamaIcon from '../../assets/terlama.svg'
import terbaruIcon from '../../assets/terbaru.svg'
import azIcon from '../../assets/a-z.svg'
import zaIcon from '../../assets/z-a.svg'
import belumSelesaiIcon from '../../assets/belum-selesai.svg'
import chevron from '../../assets/tabler_arrows-sort.svg'
import check from '../../assets/tabler_check.svg'

const selectOpt = [
  { name: 'terbaru', icon: terbaruIcon },
  { name: 'terlama', icon: terlamaIcon },
  { name: 'a-z', icon: azIcon },
  { name: 'z-a', icon: zaIcon },
  { name: 'belum selesai', icon: belumSelesaiIcon },
]

export const SortButton: React.FC<{ onChange: (val: string) => void }> = (
  props
) => {
  const [selected, setSelected] = useState(selectOpt[0])

  return (
    <Listbox
      value={selected}
      onChange={(val) => {
        setSelected(val)
        props.onChange(val.name)
      }}
    >
      <div className='relative'>
        <Listbox.Button
          className='p-4 rounded-full border border-slate-200'
          data-cy='todo-sort-button'
        >
          <img
            src={chevron}
            width={24}
            height={24}
            data-cy='tabler:arrows-sort'
          />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options
            data-cy='Sort'
            className='absolute mt-1 max-h-60 w-[200px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
          >
            {selectOpt.map((select) => (
              <Listbox.Option
                key={select.name}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 capitalize px-4 ${
                    active ? 'bg-slate-200' : 'text-gray-900'
                  }`
                }
                value={select}
              >
                {({ selected }) => (
                  <div className='flex items-center gap-4'>
                    <span>
                      <img src={select.icon} width={18} height={18} />
                    </span>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {select.name}
                    </span>
                    {selected ? (
                      <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
                        <img src={check} width={18} height={18} />
                      </span>
                    ) : null}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}
