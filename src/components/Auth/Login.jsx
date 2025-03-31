import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl  border-emerald-600 p-20'>
        <form className='flex flex-col items-center justify-center'>
            <input className=' text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-white' type='email' placeholder='Enter your email'/>
            <input className=' text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-white' type='password' placeholder='Enter your password'/>
            <button className=' text-white mt-5 border-none outline-none bg-emerald  border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-white'>Login</button>
        </form>
        </div>
      
    </div>
  )
}

export default Login
