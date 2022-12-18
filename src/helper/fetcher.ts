import { priorityType, todo } from '../components/pages/Activity'
import { activity } from '../components/pages/Homescreen'

export const fetcher = {
  baseURL: 'https://todo.api.devcode.gethired.id',
  getAll: async () => {
    const respone = await fetch(
      `${fetcher.baseURL}/activity-groups?email=asiatakh25@gmail.com`,
      {
        method: 'GET',
        redirect: 'follow',
      }
    )
    if (respone.ok) {
      const data = await respone.text()
      const res = JSON.parse(data)

      return res
    }

    return respone
  },
  get: async (id: string) => {
    const respone = await fetch(`${fetcher.baseURL}/activity-groups/${id}`, {
      redirect: 'follow',
    })

    if (respone.ok) {
      const data = await respone.text()
      return JSON.parse(data)
    }

    return respone
  },
  update: async (id: string, title: string) => {
    const respone = await fetch(`${fetcher.baseURL}/activity-groups/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        email: 'asiatakh25@gmail.com',
      }),
    })

    if (respone.ok) {
      const data = await respone.text()
      return data
    }

    return respone
  },
  create: async () => {
    const respone = await fetch(`${fetcher.baseURL}/activity-groups`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'asiatakh25@gmail.com',
        title: 'New Activity',
      }),
      redirect: 'follow',
    })

    if (respone.ok) {
      const data = await respone.json()
      return data
    }

    return respone
  },
  delete: async (id: string) => {
    const respone = await fetch(`${fetcher.baseURL}/activity-groups/${id}`, {
      method: 'DELETE',
    })

    if (respone.ok) {
      return true
    }

    return false
  },
  todoGetAll: async (id: string) => {
    const respone = await fetch(
      `${fetcher.baseURL}/todo-items?activity_group_id=${id}`,
      { redirect: 'follow' }
    )

    if (respone.ok) {
      const data = await respone.text()
      const res = JSON.parse(data)

      return res.data
    }

    return respone
  },
  todoCreate: async (
    title: string,
    priority: priorityType,
    idActivity: string
  ) => {
    const respone = await fetch(`${fetcher.baseURL}/todo-items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        activity_group_id: idActivity,
        title,
        priority,
        is_active: false,
      }),
      redirect: 'follow',
    })

    if (respone.ok) {
      const data = await respone.json()
      return data
    }

    return respone
  },
  deleteTodo: async (id: string) => {
    const respone = await fetch(`${fetcher.baseURL}/todo-items/${id}`, {
      method: 'DELETE',
      redirect: 'follow',
    })

    if (respone.ok) {
      return true
    }

    return false
  },
  updateTodo: async (idAct: string, todo: todo) => {
    const respone = await fetch(`${fetcher.baseURL}/todo-items/${todo.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...todo, activity_group_id: idAct }),
    })

    if (respone.ok) {
      const data = await respone.text()
      return data
    }

    return respone
  },
}
