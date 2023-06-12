import axios, { AxiosError } from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'

import { RootState } from '../store/rootReducer'
import { login } from '../store/authReducer'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [isError, setIsError] = useState({ status: false, message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authenicated = useSelector(
    (state: RootState) => state.auth.authenicated
  )

  useEffect(() => {
    if (authenicated) {
      window.location.href = '/'
    }
  }, [authenicated, navigate])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      const { data } = await axios.post('/api/auth/login', form, {
        withCredentials: true,
      })
      const user = {
        id: data.id,
        name: data.name,
        email: data.email,
      }
      dispatch(login({ user, authenicated: true }))
      setIsLoading(false)
    } catch (error: unknown) {
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
          Sign in to your account
        </h2>
      </div>
      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        {isError.status && (
          <p className='text-red-500 text-center'>{isError?.message}</p>
        )}
        <form onSubmit={handleSubmit} className='space-y-6'>
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
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                type='email'
                autoComplete='email'
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
              Password
            </label>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                autoComplete='password'
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
                loading
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
