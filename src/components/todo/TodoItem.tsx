import { useState } from 'react'
import { fetcher } from '../../helper/fetcher'
import { priorityType, todo } from '../pages/Activity'
import DeleteBtn from '../ui/DeleteBtn'
import EditBtn from '../ui/EditBtn'
import AddTodoMdl from '../ui/modal/AddTodoMdl'

const TodoItem: React.FC<{
  data: todo
  onDelete: () => void
  idAct: string
  index: number
}> = (props) => {
  const [isActive, setIsActive] = useState(props.data.is_active)
  const [showAddModal, setShowAddModal] = useState(false)
  const [priority, setPriority] = useState(props.data.priority)
  const [title, setTitle] = useState(props.data.title)

  let color
  switch (props.data.priority) {
    case 'high':
      color = 'bg-yellow-500'
      break
    case 'normal':
      color = 'bg-teal-500'
      break
    case 'low':
      color = 'bg-sky-500'
      break
    case 'very-low':
      color = 'bg-violet-500'
      break

    default:
      color = 'bg-red-500'
      break
  }

  return (
    <>
      <AddTodoMdl
        isOpen={showAddModal}
        title={title}
        selectedP={priority}
        onClose={() => {
          setShowAddModal(false)
        }}
        onSubmit={async (title, priority) => {
          await fetcher.updateTodo(props.idAct, {
            priority,
            title,
            activity_group_id: +props.idAct,
            updated_at: new Date(),
            created_at: props.data.created_at,
            id: props.data.id,
            is_active: isActive,
          })
          setTitle(title)
          setPriority(priority)
          setShowAddModal(false)
        }}
      />
      <li
        className='card p-7 mb-2.5 flex items-center justify-between'
        data-cy={`todo-item-${props.index}`}
      >
        <div className='flex gap-4 items-center'>
          <input
            data-cy='todo-item-checkbox'
            type='checkbox'
            checked={isActive}
            onChange={async () => {
              const data = props.data
              data.is_active = !isActive

              await fetcher.updateTodo(props.idAct, data)
              setIsActive((prevState) => {
                return !prevState
              })
            }}
          />
          <div
            data-cy='todo-item-priority-indicator'
            className={`w-[9px] h-[9px] rounded-full ${color}`}
          />
          <span
            data-cy='todo-item-title'
            className={`${!isActive ? '' : 'text-slate-500 line-through'}`}
          >
            {title}
          </span>
          <EditBtn
            cy='todo-item-edit-button'
            onClick={() => {
              setShowAddModal(true)
            }}
          />
        </div>
        <DeleteBtn
          btnCy='todo-item-delete-button'
          messageDelete={
            <p className='text-lg text-black-dev font-medium'>
              Apakah anda yakin menghapus List Item{' '}
              <span className='font-bold'>"{props.data.title}”?</span>
            </p>
          }
          onDelete={props.onDelete}
        />
      </li>
    </>
  )
}

export default TodoItem
