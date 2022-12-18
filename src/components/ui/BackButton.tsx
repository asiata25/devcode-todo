import { useNavigate } from 'react-router-dom'
import Back from '../../assets/todo-back-button.svg'

export const BackButton = () => {
  const navigate = useNavigate()

  return (
    <button
      data-cy='todo-back-button'
      onClick={() => {
        navigate('/')
      }}
    >
      <img src={Back} alt='back' width={32} height={32} />
    </button>
  )
}
