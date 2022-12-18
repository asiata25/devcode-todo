import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../ui/Card'
import DeleteBtn from '../ui/DeleteBtn'

type CardActivityType = {
  cy: number
  title: string
  createdAt: string
  id: string
  onDeleteAct: (id: string) => void
}

const CardActivity: React.FC<CardActivityType> = (props) => {
  return (
    <Card
      className='h-[235px] flex flex-col justify-between'
      cy={`activity-item-${props.id}`}
    >
      <Link
        to={`activity/${props.id}`}
        className='hover:cursor-pointer h-full p-6'
      >
        <h3
          data-cy='activity-item-title'
          className='font-bold text-lg text-black-dev'
        >
          {props.title}
        </h3>
      </Link>
      <div className='flex justify-between items-center p-6 pt-0'>
        <span
          data-cy='activity-item-date'
          className='font-medium text-sm text-grey-dev'
        >
          {new Date(props.createdAt).toLocaleDateString('id-ID', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </span>
        <DeleteBtn
          btnCy='activity-item-delete-button'
          onDelete={() => {
            props.onDeleteAct(props.id)
          }}
          messageDelete={
            <p className='text-lg text-black-dev font-medium'>
              Apakah anda yakin menghapus activity{' '}
              <span className='font-bold'>“{props.title}”?</span>
            </p>
          }
        />
      </div>
    </Card>
  )
}

export default CardActivity
