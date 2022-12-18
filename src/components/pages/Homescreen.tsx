import { Form, useLoaderData } from 'react-router-dom'
import ActivityEmptyState from '../../assets/activity-empty-state.svg'
import Plus from '../../assets/tabler_plus.svg'
import { fetcher } from '../../helper/fetcher'
import Activities from '../activities/Activities'
import Button from '../ui/Button'

export type activity = { id: string; title: string; created_at: string }

export const loader = async () => {
  const activities = await fetcher.getAll()
  return activities.data
}

export const action = async () => {
  const activity = await fetcher.create()
  return activity
}

export const Homescreen = () => {
  const activities = useLoaderData() as activity[]

  return (
    <>
      <div className='flex justify-between items-center mb-14'>
        <h2
          data-cy='activity-title'
          className='font-bold text-4xl text-black-dev'
        >
          Activity
        </h2>
        <Form method='post'>
          <Button cy='activity-add-button'>
            <img src={Plus} data-cy='tabler:plus' width={24} height={24} />
            Tambah
          </Button>
        </Form>
      </div>
      {activities.length !== 0 && <Activities datas={activities} />}
      {activities.length === 0 && (
        <img
          src={ActivityEmptyState}
          alt='activity-empty-state'
          data-cy='activity-empty-state'
          className='mx-auto'
        />
      )}
    </>
  )
}
