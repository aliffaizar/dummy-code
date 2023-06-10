import axios from 'axios'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../store/rootReducer'
import { logout } from '../store/authReducer'

export function Avatar() {
  const user = useSelector((state: RootState) => state.auth.user)
  const dispatch = useDispatch()

  const avatar = useMemo(() => {
    const name = user?.name?.split(' ')?.map((n) => n[0])
    const avatar = name?.length === 1 ? name[0] : name?.join('').slice(0, 2)
    return avatar?.toUpperCase()
  }, [user])

  const handleLogout = async () => {
    await axios.get('/api/auth/logout', { withCredentials: true })
    dispatch(logout())
    window.location.href = '/login'
  }

  return (
    <div className='dropdown dropdown-end'>
      <div tabIndex={0} className='avatar placeholder cursor-pointer'>
        <div className='bg-secondary-focus text-neutral-content font-bold rounded-full w-8'>
          <span className='text-xs'>{avatar}</span>
        </div>
      </div>
      <ul
        tabIndex={0}
        className='dropdown-content m-2 menu p-2 shadow bg-neutral-focus rounded-box w-52 z-50'
      >
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  )
}
