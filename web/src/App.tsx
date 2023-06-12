import { Route, Routes } from 'react-router-dom'

import { MainLayout } from './layouts/main-layout'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Challenge from './pages/challenge'
import NotFound from './pages/notFound'
import { AdminGuard } from './components/AdminGuard'
import AdminPage from './pages/admin'
import CreateChallenge from './pages/admin/CreateChallenge'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='challenges/:id' element={<Challenge />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route
          path='admin'
          element={
            <AdminGuard>
              <AdminPage />
            </AdminGuard>
          }
        />
        <Route path='admin/challenges/create' element={<CreateChallenge />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
