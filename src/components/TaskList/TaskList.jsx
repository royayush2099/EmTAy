import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start py-5 w-full gap-5 flex-nowrap mt-10'>
      <div className="h-full flex-shrink-0 w-[300px] bg-red-400 rounded-xl p-4">
        <div className='flex justify-between items-center mt-3'>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm text-white'>High</h3>
          <h4 className='text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-10 text-xl font-semibold text-center'>Make a YouTube Video</h2>
        <p className='text-sm mt-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi sint dolor id? Id officiis sequi quo molestiae vel in,
          porro quidem aperiam ex laboriosam fuga eaque reiciendis natus eos.</p>
      </div>

      <div className="h-full flex-shrink-0 w-[300px] bg-blue-400 rounded-xl p-4">
        <div className='flex justify-between items-center mt-3'>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm text-white'>High</h3>
          <h4 className='text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-10 text-xl font-semibold text-center'>Make a YouTube Video</h2>
        <p className='text-sm mt-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi sint dolor id? Id officiis sequi quo molestiae vel in,
          porro quidem aperiam ex laboriosam fuga eaque reiciendis natus eos.</p>
      </div>

      <div className="h-full flex-shrink-0 w-[300px] bg-green-400 rounded-xl p-4">
        <div className='flex justify-between items-center mt-3'>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm text-white'>High</h3>
          <h4 className='text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-10 text-xl font-semibold text-center'>Make a YouTube Video</h2>
        <p className='text-sm mt-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi sint dolor id? Id officiis sequi quo molestiae vel in,
          porro quidem aperiam ex laboriosam fuga eaque reiciendis natus eos.</p>
      </div>

      <div className="h-full flex-shrink-0 w-[300px] bg-yellow-400 rounded-xl p-4">
        <div className='flex justify-between items-center mt-3'>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm text-white'>High</h3>
          <h4 className='text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-10 text-xl font-semibold text-center'>Make a YouTube Video</h2>
        <p className='text-sm mt-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi sint dolor id? Id officiis sequi quo molestiae vel in,
          porro quidem aperiam ex laboriosam fuga eaque reiciendis natus eos.</p>
      </div>

      <div className="h-full flex-shrink-0 w-[300px] bg-emerald-400 rounded-xl p-4">
        <div className='flex justify-between items-center mt-3'>
          <h3 className='bg-red-600 px-3 py-1 rounded text-sm text-white'>High</h3>
          <h4 className='text-sm'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-10 text-xl font-semibold text-center'>Make a YouTube Video</h2>
        <p className='text-sm mt-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi sint dolor id? Id officiis sequi quo molestiae vel in,
          porro quidem aperiam ex laboriosam fuga eaque reiciendis natus eos.</p>
      </div>
    </div>
  )
}

export default TaskList;
