import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'

import { Navbar } from '../components/navbar'
import { useEffect, useState } from 'react'
import { authenicate } from '../store/authReducer'

export function MainLayout() {
  const dispatch = useDispatch()
  const [isLoding, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true)
      try {
        const { data } = await axios.get('/api/auth/me', {
          withCredentials: true,
        })
        const user = {
          id: data.id,
          name: data.name,
          email: data.email,
          role: data.role,
        }
        if (data) {
          dispatch(authenicate({ user, authenicated: true }))
        }
      } catch (error) {
        dispatch(authenicate({ user: null, authenicated: false }))
      }
      setIsLoading(false)
    }
    fetchUser()
  }, [dispatch])

  return (
    <>
      {isLoding ? (
        <div className='h-screen flex justify-center items-center'>
          <span className='loading loading-dots w-16'></span>
        </div>
      ) : (
        <>
          <Navbar />
          <Outlet />
        </>
      )}
      <ToastContainer />
    </>
  )
}
