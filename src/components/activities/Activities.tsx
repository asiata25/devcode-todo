import React, { useEffect, useState } from 'react'
import { fetcher } from '../../helper/fetcher'
import { activity } from '../pages/Homescreen'
import AlertMdl from '../ui/modal/AlertMdl'
import CardActivity from './CardActivity'

type ActivitiesType = {
  datas: activity[]
}

const Activities: React.FC<ActivitiesType> = (props) => {
  const [actList, setActList] = useState(props.datas)
  const [showAlet, setShowAlert] = useState(false)

  useEffect(() => {
    setActList(props.datas)
  }, [props.datas.length])

  const deleteAct = async (id: string) => {
    await fetcher.delete(id)
    setShowAlert(true)
    setActList((prevState) => {
      return prevState.filter((item) => item.id !== id)
    })
  }

  return (
    <>
      <AlertMdl
        showAlert={showAlet}
        onClose={() => {
          setShowAlert(false)
        }}
      />
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
    </>
  )
}

export default Activities
