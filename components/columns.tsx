'use client'
import { useTaskStore } from '@/lib/store'

import Column from './column'
import { useState } from 'react'
import AddTodos from './AddTodos'

export default function Columns() {
  return (
    <div>
      <AddTodos />

      <section className='mt-10 flex gap-6 lg:gap-12'>
        <Column title='Todo' status='TODO' />
        <Column title='In Progress' status='IN_PROGRESS' />
        <Column title='Done' status='DONE' />
      </section>
    </div>
  )
}
