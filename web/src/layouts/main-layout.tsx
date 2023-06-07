import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import { Navbar } from '../components/navbar'
import { useEffect, useState } from 'react'
import { authenicate } from '../store/authReducer'

export function MainLayout() {
  const dispatch = useDispatch()
  const [isLoding, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true)
      try {
        const { data } = await axios.get('/api/auth/me', {
          withCredentials: true,
        })
        const user = {
          id: data.id,
          username: data.username,
          email: data.email,
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
      <Navbar />
      <div>
        {isLoding && (
          <div className='h-[80vh] flex justify-center items-center'>
            Loading...
          </div>
        )}
        <Outlet />
      </div>
    </>
  )
}
