import { useEffect, useRef, useState } from 'react'
import { Form } from 'react-router-dom'
import { fetcher } from '../../helper/fetcher'
import EditBtn from './EditBtn'

type EditAbleTitleType = {
  onClick: () => void
  isOnEdit: boolean
  title: string
  id: string
}

const EditAbleTitle: React.FC<EditAbleTitleType> = (props) => {
  const inputText = useRef<HTMLInputElement>(null)

  const [inputVal, setInputVal] = useState(props.title)

  useEffect(() => {
    inputText.current?.focus()
  }, [props.isOnEdit])

  const clickEditHandler = async () => {
    if (!props.isOnEdit) {
      return props.onClick()
    }

    await fetcher.update(props.id, inputVal)
    props.onClick()
  }

  return (
    <div className='flex items-center gap-[19px]'>
      {props.isOnEdit ? (
        <input
          type='text'
          value={inputVal}
          ref={inputText}
          onChange={(val) => {
            setInputVal(val.target.value)
          }}
          className='font-bold text-4xl text-black-dev outline-none py-2 border-b border-b-black-dev'
        />
      ) : (
        <h2 data-cy='todo-title' className='font-bold text-4xl text-black-dev'>
          {inputVal}
        </h2>
      )}
      <EditBtn cy='todo-title-edit-button' onClick={clickEditHandler} />
    </div>
  )
}

export default EditAbleTitle
