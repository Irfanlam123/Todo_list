"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMaintask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    setMaintask([...mainTask, {title, desc}])
    settitle("")
    setdesc("")
    console.log(mainTask)
  };
  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMaintask(copyTask)
  }

  let renderTask = <h2>No task Available</h2>

  if (mainTask.length>0) {
    renderTask=mainTask.map((t,i)=>{
      return (
       <li key={i} className='flex items-center justify-between mb-8'>
        <div className='flex justify-between w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h6 className='text-2xl font-semibold'>{t.desc}</h6>
       </div> 
       <button onClick={()=>{
        deleteHandler(i)
       }}
       className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
       </li>
      );
    });
  }
  return (
    <div>
      <h1 className='bg-black text-white text-5xl p-5 font-bold text-center'  >Irfan's TodoList</h1>
      <form onSubmit={submitHandler}> 
        <input type='text' 
        placeholder='iNpUt title hErE' 
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}
        className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2'/>
        <input type='text' 
        placeholder='Description hErE'
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }}
        
        className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2'/>
        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>

        Add Task</button>
      </form>
      <hr/>
      <div className='p-8 bg-slate-200'>
        <ul>{renderTask}</ul>
      </div>
    </div>
  )
}

export default page