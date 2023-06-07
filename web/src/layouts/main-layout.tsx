import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/navbar'

export function MainLayout() {
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
      </main>
    </>
  )
}
