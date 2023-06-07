import { Link } from 'react-router-dom'

export function Navbar() {
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
          <Link to='/login' className='btn btn-primary btn-sm px-5'>
            login
          </Link>
        </div>
      </div>
    </nav>
  )
}
