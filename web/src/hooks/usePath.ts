import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function usePath() {
  const [path, setPath] = useState<string>('/')
  const location = useLocation()

  useEffect(() => {
    setPath(location.pathname)
  }, [location])

  return path
}
