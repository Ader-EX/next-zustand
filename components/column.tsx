'use client'
import { Status, useTaskStore } from '@/lib/store'
import Task from './task'
import { useMemo } from 'react'
import React from 'react'
export default function Column({
  title,
  status
}: {
  title: string
  status: Status
}) {
  const task = useTaskStore(state => state.tasks)
  const filteredTasks = useMemo(
    () => task.filter(task => task.status === status),
    [task, status]
  )
  const updateTask = useTaskStore(state => state.updateTask)
  const draggedTask = useTaskStore(state => state.draggedTask)
  const draggedTaskStatus = useTaskStore(state => state.dragTaskUpdate)
  const handleDrop = (e: any) => {
    if (!draggedTask) return
    updateTask(draggedTask, status)
    draggedTaskStatus(null)
  }

  return (
    <section className='h-[600px] flex-1'>
      <h2 className='ml-1 font-serif text-2xl font-semibold'>{title}</h2>

      <div
        onDrop={handleDrop}
        onDragOver={(e: any) => e.preventDefault()}
        className='mt-3.5 h-full w-full flex-1 rounded-xl bg-neutral-600 p-4'
      >
        <div className='flex flex-col gap-4'>
          {filteredTasks.map(task => (
            <Task key={task.id} {...task} />
          ))}
        </div>
      </div>
    </section>
  )
}
