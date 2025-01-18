import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    if (!email.endsWith('@gmail.com')) {
      toast.error('Use valid @gmail.com email address.');
      return;
    }
    else if (email === '' || password === '') {
      toast.error("Please enter login credentials!");
      return;
    }
    toast.success("Logged in!")
    navigate('/table');

  }
  return (
    <div className='flex'>
      <div className='w-full h-[95vh] bg-grey flex items-center justify-center'>
        <div className='p-3 md:p-4 lg:p-4 rounded-md border bg-white flex flex-col gap-6 items-center '>
          <div className='flex flex-col gap-2 items-center'>
            <h1 className='text-4xl font-kavoon'>TF</h1>
            <h1 className='font-semibold text-3xl'>Welcome Back!</h1>
            <p className='text-xl '>
              Login to continue
            </p>
          </div>
          <div className='flex flex-col gap-2 lg:w-[400px] w-[300px]'>
            <input type="email" placeholder='Email' required={true} className='border border-grey py-2 px-4 rounded-md outline-none' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' required={true} className='border border-grey py-2 px-4 rounded-md outline-none' onChange={(e) => setPassword(e.target.value)} />
            <button className='py-2 px-6 bg-green rounded-md text-white font-semibold' onClick={handleClick}>Login</button>
          </div>
          <p>---OR---</p>
          <div className='py-2 w-full bg-white flex justify-center  rounded-md gap-2 items-center border'>
            Continue with Google <FcGoogle size={30} />
          </div>

        </div>
      </div>
      <Toaster/>
    </div>
  )
}

export default LoginPage
