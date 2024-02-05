import { create } from 'zustand'
import { v4 as uuid } from 'uuid'

export type Status = 'TODO' | 'IN_PROGRESS' | 'DONE'

export type Tasks = {
  id: string
  title: string
  description?: string
  status: string
}
export type State = {
  tasks: Tasks[]
  draggedTask: string | null
}

export type Actions = {
  addTask: (title: string, description: string) => void
  dragTaskUpdate: (id: string | null) => void
  removeTask: (id: string) => void
  updateTask: (id: string, status: string) => void
}

export const useTaskStore = create<State & Actions>()(set => ({
  tasks: [],
  draggedTask: null,
  addTask: (title: string, description?: string) => {
    set(state => ({
      tasks: [
        ...state.tasks,
        {
          id: uuid(),
          title: title,
          description: description,
          status: 'TODO'
        }
      ]
    }))
  },
  dragTaskUpdate: (id: string | null) => {
    set({ draggedTask: id })
  },
  removeTask: (id: string) => {
    set(state => ({
      tasks: state.tasks.filter(task => task.id !== id)
    }))
  },
  updateTask: (id: string, status: string) => {
    set(state => ({
      tasks: state.tasks.map(task =>
        task.id === id
          ? {
              ...task,
              status
            }
          : task
      )
    }))
  }
}))
