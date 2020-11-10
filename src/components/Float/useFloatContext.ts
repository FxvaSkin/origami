import { useContext } from 'react'
import { FloatContext } from './FloatContext'

const useFloatContext = () => {
  const data = useContext(FloatContext)
  return data
}

export { useFloatContext }
