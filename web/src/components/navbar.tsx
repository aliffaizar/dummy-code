import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../store/rootReducer'
import { usePath } from '../hooks/usePath'

export function Navbar() {
  const auth = useSelector((state: RootState) => state.auth)
  const path = usePath()
  return (
    <nav className='bg-neutral shadow-md'>
      <div className='navbar max-w-7xl mx-auto'>
        <div className='flex-1'>
          <Link to='/' className='normal-case text-2xl'>
            Dummy Code
          </Link>
        </div>
        <div className='flex justify-end items-center gap-8'>
          <Link to='/'>Home</Link>
          {!auth.authenicated && path !== '/login' && (
            <Link to='/login' className='btn btn-primary btn-sm px-5'>
              login
            </Link>
          )}
          {path === '/login' && (
            <Link to='/register' className='btn btn-primary btn-sm px-5'>
              register
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
