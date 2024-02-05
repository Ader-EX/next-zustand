import { useTaskStore } from '@/lib/store'
import React from 'react'
import { useState } from 'react'


export default function AddTodos() {
      const [todo, setTodo] = useState('')
      const [desc, setDesc] = useState('')
      const addTask = useTaskStore(state => state.addTask)
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addTask(todo, desc)
        setTodo('')
        setDesc('')
      }
  return (
    <div>
      <form className='mx-auto max-w-sm' onSubmit={handleSubmit}>
        <div className='mb-5 '>
          <label
            htmlFor='todo'
            className='mb-2 block text-sm font-medium  dark:text-white'
          >
            What to do
          </label>
          <input
            onChange={e => setTodo(e.target.value)}
            value={todo}
            type='text'
            id='todo'
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            placeholder='Eat Breakfast'
            required
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='description'
            className='mb-2 block text-sm font-medium dark:text-white'
          >
            Description
          </label>
          <input
            onChange={e => setDesc(e.target.value)}
            value={desc}
            type='text'
            placeholder='Be at the dinner table in 5 minutes'
            id='description'
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          />
        </div>

        <button
          type='submit'
          className='w-full rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto'
        >
          Submit
        </button>
      </form>
    </div>
  )
}
