import axios, { AxiosError } from 'axios'
import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [form, setForm] = useState({ email: '', password: '', name: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState({ status: false, message: '' })
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      await axios.post('/api/auth/register', form)
      navigate('/login')
    } catch (error) {
      if (error instanceof AxiosError) {
        setIsError({
          status: true,
          message: error?.response?.data.message || 'Something went wrong',
        })
      }
      setIsLoading(false)
    }
  }
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <img
          className='mx-auto h-10 w-auto'
          src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
          alt='Your Company'
        />
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight '>
          Register to create an account
        </h2>
      </div>
      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        {isError.status && (
          <p className='text-red-500 text-center'>{isError?.message}</p>
        )}
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium leading-6 '
            >
              Name
            </label>
            <div className='mt-2'>
              <input
                id='name'
                name='name'
                type='name'
                autoComplete='name'
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className='input input-bordered w-full'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 '
            >
              Email address
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className='input input-bordered w-full'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium leading-6 '
            >
              Password
            </label>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='password'
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                className='input input-bordered w-full'
              />
            </div>
          </div>
          <div>
            {isLoading ? (
              <button
                disabled
                className='btn btn-disabled text-zinc-500 w-full'
              >
                <span className='loading loading-spinner'></span>
                sumiting...
              </button>
            ) : (
              <button className='btn btn-primary w-full' type='submit'>
                Sign in
              </button>
            )}
          </div>
        </form>
        <div className='mt-6'>
          <div className='relative'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-300' />
            </div>
            <div className='relative flex justify-center text-sm'>
              <span className='bg-base-100 px-2 text-zinc-300'>
                Or continue with
              </span>
            </div>
          </div>

          <div className='mt-6 flex flex-wrap justify-center gap-3'>
            <div className='w-full'>
              <a
                href='/api/auth/google'
                target='_bank'
                className='inline-flex w-full justify-center rounded-md border items-center border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50'
              >
                <FcGoogle className='w-6 h-6' />
                <span className='ml-2 text-base'>Google</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
