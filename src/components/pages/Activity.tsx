import { useState } from 'react'
import { LoaderFunction, useLoaderData } from 'react-router-dom'
import Plus from '../../assets/tabler_plus.svg'
import { fetcher } from '../../helper/fetcher'
import TodoList from '../todo/TodoList'
import { BackButton } from '../ui/BackButton'
import Button from '../ui/Button'
import EditAbleTitle from '../ui/EditAbleTitle'
import AddTodoMdl from '../ui/modal/AddTodoMdl'
import { SortButton } from '../ui/SortButton'

export type priorityType = 'very-high' | 'high' | 'normal' | 'low' | 'very-low'

export type todo = {
  is_active: boolean
  created_at: Date
  updated_at: Date
  id: number
  activity_group_id: number
  title: string
  priority: priorityType
}

export type detailAct = {
  id: string
  title: string
  created_at: Date
  todo_items: todo[]
}

export const loader: LoaderFunction = async ({ params }) => {
  const activity = await fetcher.get(params.id!)
  return activity
}

const Activity = () => {
  const activity = useLoaderData() as detailAct

  const [onEditTitle, setOnEditTitle] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [todos, setTodos] = useState(activity.todo_items)

  const deleteTodo = async (id: string) => {
    const success = await fetcher.deleteTodo(id)
    if (success) {
      setTodos((prevState) => {
        return prevState.filter((item) => item.id.toString() !== id)
      })
    }
  }

  return (
    <>
      <AddTodoMdl
        isOpen={showAddModal}
        title=''
        selectedP='very-high'
        onClose={() => {
          setShowAddModal(false)
        }}
        onSubmit={async (title, priority) => {
          const dataTodo = await fetcher.todoCreate(
            title,
            priority,
            activity.id
          )
          setTodos((prevState) => {
            return [dataTodo, ...prevState]
          })
        }}
      />
      <div className='flex justify-between items-center mb-14'>
        <div className='flex gap-x-[19px] items-center'>
          <BackButton />
          <EditAbleTitle
            id={activity.id}
            title={activity.title}
            isOnEdit={onEditTitle}
            onClick={() => {
              setOnEditTitle((prevState) => {
                return !prevState
              })
            }}
          />
        </div>
        <div className='flex gap-[18px] items-center'>
          <SortButton onChange={(val) => {}} />
          <Button
            cy='todo-add-button'
            onClick={() => {
              setShowAddModal(true)
            }}
          >
            <img src={Plus} data-cy='tabler:plus' width={24} height={24} />
            Tambah
          </Button>
        </div>
      </div>
      <TodoList
        idAct={activity.id}
        list={todos}
        onDelTodo={(id) => {
          deleteTodo(id)
        }}
      />
    </>
  )
}

export default Activity
