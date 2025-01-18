import React from 'react'

const LoginPage = () => {
  return (
    <div className='flex'>
      <div className='w-full mx-2 h-[100vh] bg-bgColor flex items-center justify-center'>
        <div className='p-3 md:p-4 lg:p-4 rounded-md border bg-white flex flex-col gap-6 items-center '>
          <div className='flex flex-col gap-2'>
          <h1 className='text-4xl font-kavoon'>TF</h1>
          <h1 className='font-semibold text-3xl'>Welcome Back!</h1>
          <p className='text-xl '>
            Login to continue
          </p>
          </div>
          <div className='flex flex-col gap-2'>
            <input type="email" placeholder='Email' required={true} />
            <input type="password" placeholder='Password' required={true} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default LoginPage
