import { Route, Routes } from 'react-router-dom'

import { MainLayout } from './layouts/main-layout'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Challenge from './pages/challenge'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/challenges/:id' element={<Challenge />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
