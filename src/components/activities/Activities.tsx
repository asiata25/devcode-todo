import React, { useEffect, useState } from 'react'
import { fetcher } from '../../helper/fetcher'
import { activity } from '../pages/Homescreen'
import CardActivity from './CardActivity'

type ActivitiesType = {
  datas: activity[]
}

const Activities: React.FC<ActivitiesType> = (props) => {
  const [actList, setActList] = useState(props.datas)

  useEffect(() => {
    setActList(props.datas)
  }, [props.datas.length])

  const deleteAct = async (id: string) => {
    await fetcher.delete(id)
    setActList((prevState) => {
      return prevState.filter((item) => item.id !== id)
    })
  }

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
      {actList.map((data, idx) => (
        <CardActivity
          key={data.id}
          onDeleteAct={(id) => {
            deleteAct(id)
          }}
          cy={idx}
          id={data.id}
          title={data.title}
          createdAt={data.created_at}
        />
      ))}
    </div>
  )
}

export default Activities
