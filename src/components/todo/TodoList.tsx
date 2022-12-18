import { todo } from '../pages/Activity'
import TodoEmpty from '../../assets/todo-empty-state.svg'
import TodoItem from './TodoItem'

type TodoListType = {
  list: todo[]
  onDelTodo: (id: string) => void
  idAct: string
}

const TodoList: React.FC<TodoListType> = (props) => {
  let content = (
    <img
      src={TodoEmpty}
      alt='todo-empty-state'
      data-cy='todo-empty-state'
      className='mx-auto'
    />
  )

  if (props.list.length !== 0) {
    content = (
      <ul>
        {props.list.map((item, idx) => (
          <TodoItem
            index={idx}
            idAct={props.idAct}
            key={item.id}
            data={item}
            onDelete={() => {
              props.onDelTodo(item.id.toString())
            }}
          />
        ))}
      </ul>
    )
  }

  return content
}

export default TodoList
