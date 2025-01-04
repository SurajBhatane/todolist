"use client"
import React, { useState } from 'react'
const page = () => {

  const [task, settask] = useState('')
  const [taskDiscription, settaskDiscription] = useState('')
  const [details, setdetails] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setdetails([...details,
    {
      task,
      taskDiscription
    }
    ]);
    console.log(details)
    settask("")
    settaskDiscription("")
  }

  const deleteHandler = (i) => {
    const copytask = [...details]
    copytask.splice(i, 1)
    setdetails(copytask)


  }

  let renderTask = <h2>No Task Available</h2>

  if (details.length > 0) {

    renderTask = details.map((t, i) => {
      return (
        <li
          key={i}
          className='flex mb-2 items-center justify-between'>
          <div className='flex ml-4 flex-wrap 
          justify-between items-center p-1 w-2/3 '>
            <h5>{t.task}</h5>
            <h5>{t.taskDiscription}</h5>
          </div>
          <button
            onClick={() => {
              deleteHandler(i)
            }}
            className='py-1 px-4 bg-[#F44336] rounded-md text-black'>Delete</button>
          <hr />
        </li>

      );
    });

  }

  return (
    <>
      <div className='h-screen w-full '>


        <h1 id='heading' className=' text-black text-4xl  p-5  flex items-center justify-center font-bold'> My todo List</h1>
        <form
          onSubmit={(e) => {
            submitHandler(e)
          }}
          className=' m-5'>

          <div className='mb-5'>
            <h2 className='text-xl uppercase mx-5 font-semibold '> task</h2>
            <input
              required
              value={task}
              onChange={(e) => {
                settask(e.target.value)

              }}
              type='text'
              placeholder='Enter Task here'
              className='text-black rounded-md mx-10 p-2 border-none  '
            />
          </div>
          <div className='mb-5'>
            <h2
              className='text-xl uppercase mx-1 font-semibold '
            >
              task Discription
            </h2>
            <input
              required
              value={taskDiscription}
              onChange={(e) => {
                settaskDiscription(e.target.value)
              }}
              type='discription'
              placeholder='Enter Task Discription'
              className='text-black rounded-md mx-10 p-2'
            />
          </div>
          <button
            className=' w-full rounded-md flex items-center justify-center px-5 py-2 text-black font-semibold bg-purple-600'>
            Add Task
          </button>

        </form>
        <hr />
        <div className='w-full mt-1 p-3 text-1.2xl bg-purple-500'>
          <ul>
            {renderTask}
          </ul>

        </div>
      </div>
    </>
  )
}

export default page